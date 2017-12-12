import React from 'react';
import Login from './TodoUserLog/Login';
import LogOut from './TodoUserLog/LogOut';
import TodoContainer from './TodoContainer/TodoContainer';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

const TodoApp = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" component={TodoRedirect} status="all"/>
                    <PrivateRoute exact path="/all" component={TodoRedirect} status="all"/>
                    <PrivateRoute exact path="/active" component={TodoRedirect} status="active"/>
                    <PrivateRoute exact path="/complete" component={TodoRedirect} status="complete"/>

                    <Route exact path="/login"    component={Login}/>
                    <Route exact path="/logout"   component={LogOut}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}
const TodoRedirect = (props) => {
    return <TodoContainer status={props.status}/>
}
const PrivateRoute = ({ component: Component,status, ...rest }) => {
    return <Route {...rest} render={props => {
        let hasLogin = localStorage.getItem("hasLogin");
        if (hasLogin==="true") {
            return <Component {...props} status={status}/>
        }
        return <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} />
    }} />
}

const NotFound = (props) => {
    return <div><h1>404 未找到该页面 </h1><br/><Link to="/">首页</Link></div>
}

export default TodoApp;
