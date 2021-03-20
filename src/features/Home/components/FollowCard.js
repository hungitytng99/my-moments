import './FollowCard.scss'

FollowCard.defaultProps = {
    user: {},
    control: "Follow",
    sizeAvatar: 32,
}

function FollowCard(props){
    const { user, control, sizeAvatar } = props;
    return(
        <div className="follow-card">
            <div className="follow-card__avatar">
                <img className="follow-card__avatar-img" style={{width:`${sizeAvatar}px`,height:`${sizeAvatar}px`}} src={user.avatar} alt="avatar"/>
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