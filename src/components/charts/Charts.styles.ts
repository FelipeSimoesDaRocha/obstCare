import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 100%;
  max-width: 780px;
  padding: 2rem;

  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  .header_chart {
    width: 100%;
    display: flex;
    flex-direction: row;
justify-content: space-between;
  }

  ul {
    display: flex;
    margin: 1rem 0;
    gap: 2rem;
  }

  li {
    padding: 1rem;
  }

  p {
    color: #8b909a;
  }
`;

export const ChartStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
