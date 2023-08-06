import { StatisticsList } from './StatsList.styled';

export const StatsList = ({ statistics }) => {
  return (
    <StatisticsList>
      <li>
        <span>Followers</span>
        <span>{statistics.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{statistics.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{statistics.likes}</span>
      </li>
    </StatisticsList>
  );
};
