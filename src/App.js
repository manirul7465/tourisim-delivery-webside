import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Component/Contexts/AuthProvider';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Order from './Component/Home/Order';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Addservice from './Component/Myorders/Addservice';
import Manageorders from './Component/Myorders/Manageorders';
import Myorders from './Component/Myorders/Myorders';
import Notfound from './Component/Notfound/Notfound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
        <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/myorders">
         <Myorders></Myorders>
        </PrivateRoute>
        <PrivateRoute path="/addservice">
         <Addservice></Addservice>
        </PrivateRoute>
        <PrivateRoute path="/manageorders">
         <Manageorders></Manageorders>
        </PrivateRoute>
        <PrivateRoute path="/order/:serviceId">
         <Order></Order>
        </PrivateRoute>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
