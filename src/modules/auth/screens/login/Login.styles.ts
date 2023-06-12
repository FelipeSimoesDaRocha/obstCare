import { mediaCarry } from 'styles/_mixins';

import styled, { css } from 'styled-components';

const responsive = {
  /* xl: 1101 * md: 1100 * lg: 991 * sm: 560 */
  container: css`
    ${mediaCarry.md(`
    `)}
  `,

  Content: css`
    ${mediaCarry.xl(`
    `)}

    ${mediaCarry.md(`
    `)}

    ${mediaCarry.sm(`
    `)}
  `,

  ContentInner: css`
    ${mediaCarry.md(`
    `)}
  `,
};

export const Container = styled.div`
  ${responsive.container}
`;

export const Content = styled.div`
  ${responsive.Content}
`;

export const ContentInner = styled.div`
  ${responsive.ContentInner}
`;
