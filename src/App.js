import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddPackage from './pages/AddPackage/AddPackage';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageBookings from './pages/ManageBookings/ManageBookings';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

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
              <PrivateRoute path="/booking/:packageId">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/my-bookings">
                <MyBookings></MyBookings>
              </PrivateRoute>
              <PrivateRoute path="/manage-all-bookings">
                <ManageBookings></ManageBookings>
              </PrivateRoute>
              <PrivateRoute path="/add-a-new-package">
                <AddPackage></AddPackage>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
