
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory(props){
    const {items}=props;
    return <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map((item)=>(
    <tbody key={item.id}>
     <TransactionHistoryItem
     type={item.type}
     amount={item.amount}
     currency={item.currency}
     />
    </tbody>))}
    
  </table>
}

TransactionHistory.propTypes={
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }),),
   
}