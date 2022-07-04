import PropTypes from 'prop-types';
import { ItemLabel, ItemPercentage } from './StatItem.styled';


export default function StatItem (props){
    const {label, percentage }=props;
    return (
    <>
    <ItemLabel>{label}</ItemLabel>
    <ItemPercentage>{percentage}%</ItemPercentage>
  </>
  );
}

StatItem.propTypes={   
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
