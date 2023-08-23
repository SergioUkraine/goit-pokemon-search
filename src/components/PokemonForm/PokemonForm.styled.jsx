import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  padding: 10px;
  justify-content: center;
  /* align-items: center; */
  border: black 2px solid;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 400px;
  padding: 5px 0;
  padding-left: 15px;
  margin-right: 20px;
  border-radius: 20px 20px 20px 20px;
  border-color: transparent;

  font-size: 16px;
`;

export const SearchButton = styled.button`
  height: 30px;
  width: 100px;
  border-color: transparent;
  border-radius: 20px 20px 20px 20px;
  &:active {
    background-color: grey;
    box-shadow: inherit;
  }
`;
