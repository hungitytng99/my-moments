import UserApi from "api/UserApi";
import Loading from "components/Loading/Loading";
import Login from "features/Login";
import Cookies from "js-cookie";
import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

export default function ProtectedRoute(props) {
    console.log(props);
    const [isAuth, setIsAuth] = React.useState(0);
    const { component: Component, ...rest } = props;
    const history = useHistory();
    console.log(Component, rest);
    React.useEffect(() => {
        async function validateToken() {
            const accessToken = Cookies.get(process.env.REACT_APP_TOKEN_STORAGE);
            if (accessToken) {
                const res = await UserApi.verify(accessToken);
                if (res && res.success) {
                    setIsAuth(1);
                }
            } else {
                console.log("redirect to login");
                setIsAuth(2);
            }
        }
        validateToken();
    });
    switch (isAuth) {
        case 0:
            return <Loading />;
        case 1:
            return <Route {...rest} render={props => (
                <Component {...props} />
            )} />
        case 2:
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }
}