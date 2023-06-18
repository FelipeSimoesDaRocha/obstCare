// Next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// React
import { useState } from 'react';
import { BsHouse } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

// Images
import SignOut from 'assets/icons/SignOut.svg';
import avatar from 'assets/images/avatar.png';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from './models';

// Context
import { logout } from 'context/features/user';
import { useAppDispatch } from 'context/hooks';

// Antd
import { Layout as LayoutContainer, Menu } from 'antd';

const { Content, Sider } = LayoutContainer;

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <S.Component isCollapsed={collapsed}>
      <LayoutContainer style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          breakpoint="lg"
          collapsedWidth={isMobile ? 100 : 100}
          onBreakpoint={mobile => setIsMobile(mobile)}
          style={{ background: '#F1F1F1' }}
        >
          <Menu style={{ background: '#F1F1F1' }} defaultSelectedKeys={[selectedKey]} mode="inline">
            <S.Avatar isCollapsed={collapsed}>
              <Image src={avatar} width="39" height="39" alt="photo" />
              <p>Obstcare</p>
            </S.Avatar>
            <Menu.Item
              key="1"
              icon={<BsHouse />}
              onClick={() => {
                router.push('/home');
              }}
            >
              Home
            </Menu.Item>
            <Menu.SubMenu title="Users" icon={<FiUsers />}>
              <Menu.Item
                key="2"
                onClick={() => {
                  router.push('/obstetras');
                }}
              >
                Obstetras
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  router.push('/gestantes');
                }}
              >
                Gestantes
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
          <Link href={'/'} className="signOut" onClick={handleLogout}>
            <Image src={SignOut} alt="icon" />
            <span>Sign out</span>
          </Link>
        </Sider>
        <LayoutContainer className="site-layout">
          <Content style={{ margin: '3rem 1rem' }}>{children}</Content>
        </LayoutContainer>
      </LayoutContainer>
    </S.Component>
  );
};

export default Layout;
