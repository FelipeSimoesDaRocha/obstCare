import styled, { css } from 'styled-components';

export const Component = styled.div<{ isCollapsed: boolean }>`
  .ant-layout-sider-children {
    margin: 1rem;
  }

  .site-layout {
    background: var(--fff);
  }

  .ant-menu-submenu svg {
    font-size: 22px !important;
  }

  .ant-menu {
    background: none !important;
    border-inline-end: none !important;
    height: 85vh !important;
  }

  .ant-menu-item svg {
    font-size: 22px !important;
  }

  .ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: none;
  }

  .ant-menu-item-selected {
    background: var(--active);
    color: #fff;
  }
  .ant-layout-sider-trigger {
    background: #f2f2f2;

    svg {
      fill: #000;
    }
  }

  span.ant-layout-sider-zero-width-trigger.ant-layout-sider-zero-width-trigger-left {
    top: 90px !important;
  }

  .signOut {
    height: 40px;
    margin-inline: 4px;
    margin-block: 4px;
    padding-left: 24px;
    display: flex;
    align-items: center;

    span {
      margin-inline-start: 8px;
      width: 100px;
      overflow: hidden;
      height: 18px;
      color: #343434;
    }
  }

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      .signOut {
        padding-left: 22px;

        span {
          display: none;
        }
      }
    `}
`;

export const Avatar = styled.div<{ isCollapsed: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding-left: 2px;
  margin-bottom: 2rem;

  p {
    font-size: 18px;
    line-height: 24px;
  }

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      justify-content: center;

      p {
        display: none;
      }
    `}
`;
