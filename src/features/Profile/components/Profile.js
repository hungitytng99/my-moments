import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Profile.scss';
function Profile(props) {
    const { post } = props;
    console.log(post);
    return (
        <div className="profile">
            <Row>
                <Col lg={4}>
                    <div className="profile__avatar flex-center">
                        <img src={post.avatar}/>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="profile__info">
                        <div className="profile__info-box">
                            <div className="profile__info-username">user.name</div>
                            <div className="profile__info-edit">
                                <Link to="#">Edit Profile</Link>
                            </div>
                            <div className="profile__info-setting">
                                <i className="profile__info-setting-icon fas fa-tools"></i>
                            </div>
                        </div>
                        <div className="profile__info-box --mid">
                            <div className="profile__info-detail">
                                <span>1</span>
                                <p>post</p>
                            </div>
                            <div className="profile__info-detail">
                                <span>27</span>
                                <p>followers</p>
                            </div>
                            <div className="profile__info-detail">
                                <span>22</span>
                                <p>following</p>
                            </div>
                        </div>
                        <div className="profile__info-box">
                            <div className="profile__info-detail">
                                <span>Mạnh Hùng</span>
                            </div>
                        </div>
                        <div className="profile__info-box">
                            <div className="profile__info-detail">
                                <p>Welcome </p>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Profile;