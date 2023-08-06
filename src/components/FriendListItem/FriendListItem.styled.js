import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 28px;
  height: 28px;
  margin: 0 20px 0;
  border-radius: 50%;

  background-color: ${({ className }) => {
    switch (className) {
      case 'online':
        return 'green';

      case 'offline':
        return 'red';
      default:
        return 'black';
    }
  }};
`;
export const Avatar = styled.img`
  display: block;
  width: 72px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  background-color: antiquewhite;
`;
export const UserName = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: rgb(74 35 27);
`;
