import { FollowApi, MainUser } from 'constants/fake'
import { Link } from 'react-router-dom'
import FollowCard from './FollowCard'
import FollowList from './FollowList'
import './FollowPane.scss'
function FollowPane() {
    return (
        <div className="follow-pane">
            <div className="follow-pane__user">
                <FollowCard user={MainUser} control="Switch" />
            </div>
            <div className="follow-pane__text">
                <div className="follow-pane__text-suggestion">Suggestion For You</div>
                <Link to="#" className="follow-pane__text-all">See All</Link>
            </div>
            <div className="follow-pane__suggestion">
                <FollowList followList={FollowApi} />
            </div>
        </div>
    )
}
export default FollowPane;