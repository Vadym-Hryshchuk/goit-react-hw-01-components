import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0px auto 60px;
  padding: 0;
  list-style: none;
  background-color: white;

  li {
    display: flex;
    height: 72px;
    align-items: center;
    box-shadow: 10px 5px 5px rgb(170 105 105);
    background-color: rgba(181, 174, 174, 1);
    padding: 5px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
