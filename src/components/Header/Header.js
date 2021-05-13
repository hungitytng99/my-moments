import Images from 'constants/images'
import SearchInput from 'common-components/SearchInput/SearchInput'
import './Header.scss'
import { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import AuthHelper from 'helpers/AuthHelper';
import HeaderNav from 'constants/HeaderNav';
function Header() {
    const navSelection = HeaderNav.getCurrentNav();
    const [isSelectItem, setIsSelectItem] = useState(navSelection);
    const username = AuthHelper.getUsername();
    let history = useHistory();
    const handleLogout = () => {
        AuthHelper.rmAuthInfo();
        
        history.push('/login');
    }
    const handleClickNav = (index, redirect) => {
        if (index)
            setIsSelectItem(index);
        if (redirect) {
            history.push(redirect);
            setIsSelectItem(index);
        }
    }
    const handleDropdownDisplay = (e) => {
        e.preventDefault();
    }

    return (
        <header className="header flex-center">
            <div className="header__container">
                <div className="header-logo">
                    <Link to={HeaderNav.navLink.HOME}>
                        <img className="header-logo__img" src={Images.LOGO_TEXT} alt="logo" />
                    </Link>
                </div>
                <div className="header-search">
                    <SearchInput />
                </div>
                <div className="header-control">
                    <ul className="header-control__list">
                        <li className="header-control__item">
                            <div className="custom-icon-home">
                                {isSelectItem === 1 ? <ion-icon name="home" onClick={() => handleClickNav(1, HeaderNav.navLink.HOME)}></ion-icon> : <ion-icon name="home-outline" onClick={() => handleClickNav(1, HeaderNav.navLink.HOME)}></ion-icon>}
                            </div>
                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 2 ? <i className="fas fa-comment-dots"></i> : <i className="far fa-comment-dots" onClick={() => handleClickNav(2, HeaderNav.navLink.INBOX)}></i>}
                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 3 ? <i className="fas fa-compass"></i> : <i className="far fa-compass" onClick={() => handleClickNav(3, HeaderNav.navLink.EXPLORE)}></i>}

                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 4 ? <i className="fas fa-bell"></i> : <i className="far fa-bell" onClick={() => handleClickNav(4, HeaderNav.navLink.STORE)}></i>}
                        </li>
                        <li className="header-control__item">
                            <div className="header__dropdown">
                                {(isSelectItem === 5) ?
                                    <div tabIndex="5" className="no-focus-outline" onBlur={(e) => handleClickNav(1)}>
                                        <div className="fas fa-user-circle" onClick={(e) => handleClickNav(1)}></div>
                                        <div className="header__dropdown-triangle-up"></div>
                                        <div className="header__dropdown-hidden"></div>
                                        <div className="header__dropdown-box noselect" onMouseDown={(e) => handleDropdownDisplay(e)}>
                                            <ul className="header__dropdown-list" >
                                                <li className="header__dropdown-item" onClick={() => handleClickNav(0, username)}>
                                                    <Link className="header__dropdown-link" to={username}>
                                                        <i className="header__dropdown-item-icon fas fa-user"></i>
                                                        <div className="header__dropdown-item-text">Profile</div>
                                                    </Link>
                                                </li>
                                                <li className="header__dropdown-item">
                                                    <Link className="header__dropdown-link" to="#">
                                                        <i className="header__dropdown-item-icon fas fa-bookmark"></i>
                                                        <div className="header__dropdown-item-text">Saved</div>
                                                    </Link>
                                                </li>
                                                <li className="header__dropdown-item">
                                                    <Link className="header__dropdown-link" to="#">
                                                        <i className="header__dropdown-item-icon fas fa-exchange-alt"></i>
                                                        <div className="header__dropdown-item-text">Switch Account</div>
                                                    </Link>
                                                </li>
                                                <li className="header__dropdown-item">
                                                    <Link className="header__dropdown-link" to="#">
                                                        <i className="header__dropdown-item-icon fas fa-cogs"></i>
                                                        <div className="header__dropdown-item-text">Settings</div>
                                                    </Link>
                                                </li>
                                                <li className="header__dropdown-item">
                                                    <div onClick={handleLogout}>
                                                        <div className="header__dropdown-item-text --logout" >Log Out</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div tabIndex="5" className="no-focus-outline far fa-user-circle" onClick={(e) => handleClickNav(5)} onBlur={(e) => handleClickNav(1)}></div>
                                    </>
                                }

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;