import {Route, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";
import Register from '../auth/Register';

const PrivateRoute=({ ...rest }) => {
    const { user } = useSelector((state) => ({ ...state}));

    return user && user.token ? <Route {...rest} /> : <Redirect to="/login" />; 
}

export default PrivateRoute;