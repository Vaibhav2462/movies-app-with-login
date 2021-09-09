import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movie from './component/Movie'
import Login from './component/Login'
import Search from './component/Search';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Login}></Route>
          <Route path = "/home" component = {Movie}></Route>
          <Route path = "/search" component = {Search}></Route>
        </Switch>
      </Router>
    </>  
  )
}
// function PrivateRoute(props) {
//   let Component = props.Comp;
//   const {currUser} = useContext(AuthContext)
//   // console.log(Component)
//   return (
//       <Route {...props} render={
//           (props)=>{return(
//               currUser !=null?<Component {...props}></Component>:<Redirect to = "/login"></Redirect>)
//           }
//       }></Route>
//   )
// }
export default App;
