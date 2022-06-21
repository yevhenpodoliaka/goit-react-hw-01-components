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
        {transactions.map(transaction => (
          <tr key={transaction.id} style={{ color : transaction.type === 'deposit' ? 'green':'grey'}}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
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
