import { StatsList } from 'components/StatsList/StatsList';
import { Container, Description, UserName } from './Profile.styled';

export const Profile = ({ username, tag, avatar, location, stats }) => {
  return (
    <Container>
      <Description>
        <img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsList statistics={stats} />
    </Container>
  );
};
