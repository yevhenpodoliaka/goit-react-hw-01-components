import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => (
          <li key={el.id} className={s.statItem}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.prototypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
