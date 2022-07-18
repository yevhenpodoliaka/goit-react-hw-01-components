import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({id,type,amount,currency}) => (
          <tr key={id} style={{ color : type === 'deposit' ? 'green':'grey'}}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
export default TransactionHistory;
