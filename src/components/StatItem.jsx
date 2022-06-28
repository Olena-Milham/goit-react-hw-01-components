import PropTypes from 'prop-types';

export default function StatItem (props){
    const {label, percentage }=props;
    return (
    <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </>
  );
}

StatItem.propTypes={   
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
