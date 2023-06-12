import { css } from 'styled-components';

const breakpoints = {
  xl: 1101,
  md: 1100,
  lg: 991,
  sm: 560,
};

export const mediaCarry = {
  xl: (styles: string) => css`
    @media (min-width: ${breakpoints.xl}px) {
      ${styles}
    }
  `,
  md: (styles: string) => css`
    @media (max-width: ${breakpoints.md}px) {
      ${styles}
    }
  `,
  lg: (styles: string) => css`
    @media (max-width: ${breakpoints.lg}px) {
      ${styles}
    }
  `,
  sm: (styles: string) => css`
    @media (max-width: ${breakpoints.sm}px) {
      ${styles}
    }
  `,
};
