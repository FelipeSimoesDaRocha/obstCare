import styled from 'styled-components';

export const Component = styled.div`
  width: 495px;
  height: auto;

  padding: 40px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 44px;

  h2 {
    font-weight: 400;
    font-size: 28px;
    color: #000000;
  }

  .form_itens {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .actions {
    width: 415px;
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;
