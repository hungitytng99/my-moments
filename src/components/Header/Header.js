import Images from 'constants/images'
import SearchInput from 'common-components/SearchInput/SearchInput'
import './Header.scss'
function Header() {
    return (
        <header className="header flex-center">
            <div className="header__container">
                <div className="header-logo">
                    <img className="header-logo__img" src={Images.LOGO_TEXT} alt="logo" />
                </div>
                <div className="header-search">
                    <SearchInput />
                </div>
                <div className="header-control">
                    <ul className="header-control__list">
                        <li className="header-control__item">
                            <i className="header-control home fas fa-home"></i>
                        </li>
                        <li className="header-control__item">
                            <i className="far fa-comment-dots"></i>
                        </li>
                        <li className="header-control__item">
                            <i className="far fa-compass"></i>
                        </li>
                        <li className="header-control__item">
                            <i className="far fa-bell"></i>
                        </li>
                        <li className="header-control__item">
                            <i className="far fa-user-circle"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;