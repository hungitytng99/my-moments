import Header from 'components/Header/Header';
import './HomePage.scss'
import FollowPane from '../components/FollowPane';
function HomePage() {
    return (
        <div className="app-container">
            <div className="home-header">
                <Header />
            </div>
            <div className="my-container">
                <div className="feeds">
                    <div className="daily-post">
                    </div>
                    <div className="new-feed">

                    </div>
                </div>

                <div className="home-follows">
                    <FollowPane/>
                </div>
            </div>


        </div>
    )
}

export default HomePage;