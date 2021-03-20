import Footer from 'components/Footer/Footer'
import { FollowApi, MainUser } from 'constants/fake'
import FooterCategory from 'constants/FooterCategory'
import { Link } from 'react-router-dom'
import FollowCard from './FollowCard'
import FollowList from './FollowList'
import './FollowPane.scss'
function FollowPane() {
    return (
        <div className="follow-pane">
            <div className="follow-pane__user">
                <FollowCard user={MainUser} control="Switch" sizeAvatar={60} />
            </div>
            <div className="follow-pane__text">
                <div className="follow-pane__text-suggestion">Suggestion For You</div>
                <Link to="#" className="follow-pane__text-all">See All</Link>
            </div>
            <div className="follow-pane__suggestion">
                <FollowList followList={FollowApi} />
            </div>
            <div className="follow-pane__footer">
                <Footer category={FooterCategory.FOOTER_CATEGORY_LIST_1} />
            </div>
        </div>
    )
}
export default FollowPane;