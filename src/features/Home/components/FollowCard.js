import './FollowCard.scss'
FollowCard.defaultProps = {
    user: {},
    control: "Follow"
}
function FollowCard(props){
    const { user, control } = props;
    return(
        <div className="follow-card">
            <div className="follow-card__avatar">
                <img className="follow-card__avatar-img" src={user.avatar} alt="avatar"/>
            </div>
            <div className="follow-card__info">
                <div className="follow-card__info-username">{user.username}</div>
                <div className="follow-card__info-description">{user.description}</div>
            </div>
            <button className="follow-card__btn">{control}</button>
            
        </div>
    )
}
export default FollowCard;