import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgb(250 235 215 /50%);
  li {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(128 128 128 / 50%);

    span {
      font-size: 16px;
      width: 100%;
      text-align: center;
      color: grey;
    }

    :nth-child(2) {
      font-size: 16px;
      font-weight: 700;
      color: black;
    }
  }
`;
