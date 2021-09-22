import { css } from "styled-components";

const Typography = css`
  p {
    font-weight: 500;
    margin-top: 0.75rem;
    line-height: 1.2rem;
    font-size: 1rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 0.8rem;
    }
  }

  h1, .h1 {
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 1.1;
    text-transform: uppercase;

    &.big {
      font-size: 4rem;
      line-height: 1;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        font-size: 5rem;
      }

      @media ${({ theme }) => theme.mediaQuery.large} {
        font-size: 6rem;
      }

      @media ${({ theme }) => theme.mediaQuery.xlarge} {
        font-size: 7rem;
      }
    }
  }

  h2, .h2 {
    text-transform: capitalize;
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.02rem;
  }

  h3, .h3 {
    font-weight: 500;
    margin-top: 0.75rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export default Typography;