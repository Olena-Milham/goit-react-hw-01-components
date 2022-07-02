
import PropTypes from 'prop-types';
import { TableBody, TableHead, TableHeader, TableRowTop, TransHistoryTb } from './TransactionHistory.styled';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory(props){
    const {items}=props;
    return <TransHistoryTb>
    <TableHead>
      <TableRowTop>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </TableRowTop>
    </TableHead>
    
    <TableBody>
    {items.map((item)=>(
     <TransactionHistoryItem
     key={item.id}
     type={item.type}
     amount={item.amount}
     currency={item.currency}
     />))}
    </TableBody>
  </TransHistoryTb>
}

TransactionHistory.propTypes={
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }),),
   
}