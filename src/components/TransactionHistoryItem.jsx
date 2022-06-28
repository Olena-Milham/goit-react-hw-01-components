import PropTypes from 'prop-types';

export default function TransactionHistoryItem(props){
    const {type, amount, currency}=props 
    return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
}

TransactionHistoryItem.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,

}