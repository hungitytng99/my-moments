const navLink = {
    HOME: "/",
    INBOX: "/inbox",
    EXPLORE: "/explore",
    STORE: "/favourite",
    PROFILE: "/profile",
}
function getCurrentNav() {
    const pathname = window.location.pathname;
    switch (pathname) {
        case navLink.HOME: {
            return 1;
        }
        case navLink.INBOX: {
            return 2;
        }
        case navLink.EXPLORE: {
            return 3;
        }
        case navLink.STORE: {
            return 4;
        }
        default:
            return 0;
    }
}
const HeaderNav = {
    navLink,
    getCurrentNav,
}
export default HeaderNav;