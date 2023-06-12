// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Redux
import { Suspense } from 'react';
import { Provider } from 'react-redux';

// React-query
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';

// Styles
import GlobalStyle from '../styles/globals';

// Models
import { RolesEnum, ModulesEnum } from 'models';

// Context
import { store } from 'context';

// Utils
import { queryClient } from 'utils/querryClient';

// Components
import { ComponentWrapper } from 'components/ComponentWrapper';

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { allowedRoles?: RolesEnum[]; allowedModule?: ModulesEnum };
  dehydratedState: unknown;
}

const App = (props: CustomAppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Obstcare-Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.dehydratedState}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <Provider store={store}>
              <GlobalStyle />
              <ComponentWrapper {...props} />
            </Provider>
          </Suspense>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
