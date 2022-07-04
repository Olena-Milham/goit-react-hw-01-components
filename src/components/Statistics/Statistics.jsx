import PropTypes from 'prop-types';
import { Item, StatContainer, StatList, StatTitle } from './Statistics.styled';
import StatItem from './StatItem/StatItem';

export default function Statistics (props){
    const {title , stats} = props;
    
    return <StatContainer>
      {title&&<StatTitle>{title}</StatTitle>}
    <StatList>
      {stats.map((stat)=>(
         <Item key={stat.id}>
          <StatItem
          label={stat.label}
          percentage={stat.percentage} />
       </Item>
      ))}
    </StatList>
  </StatContainer>
}
Statistics.propTypes={
    title:PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
      // percentage: PropTypes.number.isRequired,
    }),).isRequired,
};
