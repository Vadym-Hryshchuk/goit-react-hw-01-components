import { StatList, Wrapper, createRendomColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title ? <h2>{title}</h2> : ''}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: createRendomColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        ))}
      </StatList>
    </Wrapper>
  );
};
