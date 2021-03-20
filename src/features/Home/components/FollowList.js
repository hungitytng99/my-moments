import PropTypes from 'prop-types';
import FollowCard from './FollowCard';

FollowList.propsType = {
    followList: PropTypes.arrayOf(PropTypes.object),
}
FollowList.defaultProps = {
    followList: [],
}

function FollowList(props){
    const { followList } = props;
    return(
        <div className="follow-list">
            {
                followList.map((item)=>
                {
                    return <FollowCard key={item.username} user={item}/>
                })
            }
        </div>
    )
}
export default FollowList;