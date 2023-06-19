import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #7d7d7d;

  table {
    border-collapse: collapse;
  }

  thead tr {
    height: 75px;
    text-align: justify;
  }

  tbody tr {
    height: 60px;
  }

  tbody tr:hover {
    background: #f0f0f5;
    cursor: pointer;
  }

  tbody tr td:first-child {
    input {
      margin-right: 1rem;
    }
  }

  tbody tr td img {
    width: 43px;
    height: auto;
  }

  tbody tr td:nth-child(2) {
    div {
      display: flex;
      align-items: center;
      gap: 12px;

      color: #323c47;
      font-weight: 500;
      font-size: 15px;
    }
  }

  input[type='checkbox'] {
    width: auto;
  }
`;
