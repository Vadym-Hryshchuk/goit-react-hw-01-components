import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 480px;
  margin: 0px auto 60px;
  text-align: center;
  border-radius: 8px;
  background-color: white;

  h2 {
    margin: 8px 8px 40px;
    padding: 8px;
    text-transform: uppercase;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  text-align: center;

  color: white;

  li {
    flex-basis: calc(100% / 5);
    height: 68px;
    box-shadow: 10px 5px 5px rgb(170 105 105);
    :last-child {
      font-size: 24px;
    }
  }
  span {
    display: block;
  }
`;
export const createRendomColor = () => {
  const red = Math.floor(Math.random() * (256 - 0)) + 0;
  const green = Math.floor(Math.random() * (256 - 0)) + 0;
  const blue = Math.floor(Math.random() * (256 - 0)) + 0;
  return `rgb(${red},${green},${blue})`;
};
