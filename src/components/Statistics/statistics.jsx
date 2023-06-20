import PropTypes from 'prop-types'; 
import { StatList } from "./statistics.style";
import { Title } from "./statistics.style";
import { Item } from "./statistics.style";

export const StatCard = ({ title, stats }) => {
    return (
      <section>
        {title && <Title className="title">{title}</Title>}
          <StatList className="stat-list">
            {stats.map(({ id, label, percentage }) => (
              <Item className="item" key={id} color={getRandomColor()}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </Item>
              
            ))}
          </StatList>
      </section>
    );
  };
 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  StatCard.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };