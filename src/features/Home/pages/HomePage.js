import Header from 'components/Header/Header';
import './HomePage.scss'
import FollowPane from '../components/FollowPane';
import { Col, Row } from 'react-bootstrap';
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
                            <div className="feeds">
                                <div className="daily-post">
                                </div>
                                <div className="new-feed">
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