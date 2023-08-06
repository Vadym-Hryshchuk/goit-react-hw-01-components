import styled from 'styled-components';

export const Table = styled.table`
  width: 480px;
  margin: 0px auto 60px;
  text-align: center;
  text-transform: capitalize;
  border-radius: 8px;
  background-color: white;
  font-size: 20px;

  thead {
    height: 60px;

    color: white;
    text-shadow: 1px 1px 1px black;
    background-color: rgb(15, 185, 220);
  }

  tbody > tr {
    height: 50px;
    text-align: center;
    &:nth-child(odd) {
      background-color: rgb(204, 170, 170);
    }
    &:nth-child(even) {
      background-color: rgb(187, 214, 244);
    }
  }
`;
