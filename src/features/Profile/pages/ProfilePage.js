import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { PRIVATE_POST } from 'constants/fake';
import FooterCategory from 'constants/FooterCategory';
import AuthHelper from 'helpers/AuthHelper';
import Profile from '../components/Profile';
import './ProfilePage.scss'
function ProfilePage(props) {
    const username = AuthHelper.getUsername();
    return (
        <div className="profile-page">
            <div className="profile-page__header">
                <Header />
            </div>
            <div className="profile-page__profile">
            <div className="my-container">
                    <Profile post={PRIVATE_POST} />

                </div>
            </div>
            {/* <div className="profile-page__footer">
                <Footer category={FooterCategory.FOOTER_CATEGORY_LIST_1} />
            </div> */}
        </div>

    )
}
export default ProfilePage;