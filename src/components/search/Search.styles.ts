import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 600ms;

  img {
    width: 16px;
    height: 16px;
  }

  .label {
    color: #c4c4c4;
    font-size: 15px;
    line-height: 36px;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  .input {
    border: 1px solid #e9ebf9;
    border-radius: 8px;
    display: inline-flex;
    overflow: hidden;
    padding-left: 1rem;
    height: 50px;
    align-items: center;
    gap: 10px;

    &.required {
      border: 1px solid #c31212;
    }

    &.focused {
      border-color: #c4c4c4;
      box-shadow: 0px 0px 3px #c4c4c4;
      transition: all 200ms;
    }

    input[type='text'] {
      display: none;
    }
  }
`;
