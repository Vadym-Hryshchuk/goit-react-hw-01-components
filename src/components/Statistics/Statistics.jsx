import { StatList, Wrapper, createRendomColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper className="statistics">
      {title ? <h2 className="title">Upload stats</h2> : ''}

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: createRendomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </StatList>
    </Wrapper>
  );
};
