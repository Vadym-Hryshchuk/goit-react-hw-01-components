import { Avatar, Status, UserName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <>
      <Status className={isOnline ? 'online' : 'offline'}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <UserName className="name">{name}</UserName>
    </>
  );
};
