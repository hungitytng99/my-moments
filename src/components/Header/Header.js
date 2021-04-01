import Images from 'constants/images'
import SearchInput from 'common-components/SearchInput/SearchInput'
import './Header.scss'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
function Header() {
    const [isSelectItem, setIsSelectItem] = useState(1);
    const handleLogout = () => {
        localStorage.removeItem(process.env.REACT_APP_TOKEN_STORAGE);
        <Redirect to="/login"></Redirect>
    }
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
                            <div className="custom-icon-home">
                                {isSelectItem === 1 ? <ion-icon name="home" onClick={() => setIsSelectItem(1)}></ion-icon> : <ion-icon name="home-outline" onClick={() => setIsSelectItem(1)}></ion-icon>}
                            </div>
                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 2 ? <i className="fas fa-comment-dots"></i> : <i className="far fa-comment-dots" onClick={() => setIsSelectItem(2)}></i>}
                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 3 ? <i className="fas fa-compass"></i> : <i className="far fa-compass" onClick={() => setIsSelectItem(3)}></i>}

                        </li>
                        <li className="header-control__item">
                            {isSelectItem === 4 ? <i className="fas fa-bell"></i> : <i className="far fa-bell" onClick={() => setIsSelectItem(4)}></i>}
                        </li>
                        <li className="header-control__item">
                            <div className="header__dropdown">
                                {!(isSelectItem === 5) ? <i className="far fa-user-circle" onClick={() => setIsSelectItem(5)}></i> :
                                    <>
                                        <i className="fas fa-user-circle" onClick={() => setIsSelectItem(1)}></i>
                                        <div className="header__dropdown-triangle-up"></div>
                                        <div className="header__dropdown-hidden"></div>
                                        <div className="header__dropdown-box">
                                            <ul className="header__dropdown-list noselect" >
                                                <li className="header__dropdown-item">
                                                    <Link className="header__dropdown-link" to="#">
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
                                                    <Link to="/login" onClick={handleLogout}>
                                                    <div className="header__dropdown-item-text --logout" >Log Out</div>

                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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