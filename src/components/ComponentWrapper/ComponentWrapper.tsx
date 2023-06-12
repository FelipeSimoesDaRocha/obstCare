import { selectUser } from 'context/features/user'
import { useAppSelector } from 'context/hooks'

import { CustomAppProps } from 'pages/_app'

const ComponentWrapper = ({ Component, pageProps }: CustomAppProps) => {
  const { role, modules = [] } = useAppSelector(selectUser)

  const renderUnauthorized = () => <h1>Acesso não autorizado</h1>

  if (Component.allowedRoles?.length && !Component.allowedRoles.includes(role)) {
    return renderUnauthorized()
  }

  if (Component.allowedModule && !modules.includes(Component.allowedModule)) {
    return renderUnauthorized()
  }

  return <Component {...pageProps} />
}

export default ComponentWrapper
