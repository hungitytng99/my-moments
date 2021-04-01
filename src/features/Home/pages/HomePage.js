import Header from 'components/Header/Header';
import './HomePage.scss'
import FollowPane from '../components/FollowPane';
import { Col, Row } from 'react-bootstrap';
import DailyPane from '../components/DailyPane';
import Feeds from '../components/Feeds';
function HomePage() {
    return (
        <div className="app-container">
            <div className="home-header">
                <Header />
            </div>
            <div className="content">
                <div className="my-container">
                    <Row>
                        <Col sm={8} lg={8}>
                            <div className="home-feeds">
                                <div className="home-daily-post">
                                    <DailyPane/>
                                </div>
                                <div className="home-new-feed">
                                    <Feeds/>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} lg={4}>
                            <div className="home-follows">
                                <FollowPane />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage;