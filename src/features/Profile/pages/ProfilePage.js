import { useSelector } from 'react-redux';
import './ProfilePage.scss'
function ProfilePage(props){
    const user = useSelector(state => state.login[0]);
    return (
        <div>
            PROFILE PAGE, {user.username}
        </div>
    )
}
export default ProfilePage;