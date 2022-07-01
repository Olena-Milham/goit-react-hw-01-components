import PropTypes from 'prop-types';
import { TableData, TableRow } from './TransactionHistory.styled';

export default function TransactionHistoryItem(props){
    const {type, amount, currency}=props 
    return <TableRow>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </TableRow>
}

TransactionHistoryItem.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,

}