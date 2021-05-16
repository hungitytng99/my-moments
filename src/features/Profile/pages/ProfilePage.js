import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { PRIVATE_POST } from 'constants/fake';
import FooterCategory from 'constants/FooterCategory';
import AuthHelper from 'helpers/AuthHelper';
import Profile from '../components/Profile';
import ListPosts from '../components/ListPosts';
import './ProfilePage.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApiHelper from 'helpers/ApiHelper';
function ProfilePage(props) {
    const listPosts = ApiHelper.getOwnPostParser(PRIVATE_POST);
    return (
        <div className="profile-page">
            <div className="profile-page__header">
                <Header />
            </div>
            <div className="profile-page__profile">
                <div className="my-container">
                    <div className="my-container__profile">
                        <Profile listPosts={listPosts} />
                    </div>
                    <div className="my-container__content">
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <div className="tab">
                                        <i className="fas fa-border-none"></i>
                                        <p>Bài viết</p>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab">
                                        <i className="fas fa-tv"></i>
                                        <p>IGTV</p>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab">
                                        <i className="far fa-save"></i>
                                        <p> Đã lưu</p>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab">
                                        <i className="fas fa-user-tag"></i>
                                        <p>Được gắn thẻ</p>
                                    </div>
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <ListPosts listPosts={PRIVATE_POST}></ListPosts>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            {/* <div className="profile-page__footer">
                <Footer category={FooterCategory.FOOTER_CATEGORY_LIST_1} />
            </div> */}
        </div>

    )
}
export default ProfilePage;