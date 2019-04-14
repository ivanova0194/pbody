import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from "./components/NavbarExternal";
import Footer from "./components/Footer.jsx";
import Jumbotron from './components/Jumbotron';
import Login from './pages/Sign-in/Sign-in';
import Signup from "./pages/Sign-up/Sign-up";
import Contactus from './pages/Contact us/Contactus';

 import "@fortawesome/fontawesome-free/css/all.min.css";
 import "bootstrap-css-only/css/bootstrap.min.css";
 import "mdbreact/dist/css/mdb.css";


const Layout = props => (
  <div> 
      <Jumbotron title="Welcome " subtitle="Put smth here >:D" />
      <Navbar />
      {props.children}
      <Footer />
  </div>

)

const HomeContainer = () => (
  <Layout>
     <Home />
  </Layout>
)

const LoginContainer = () => (
  <Layout>
     <Login />
  </Layout>
)

const ContactUsContainer = () => (
  <Layout>
    <Contactus/>
  </Layout>
)
  const DiscountContainer=()=>(
    <Layout>
      <div> Discount</div>
    </Layout>
  
)

const SignupContainer=()=>(
  <Layout>
    <Signup />
  </Layout>

)



const CatchAllRoute = () => (
  <h1>Not Found 404</h1>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ HomeContainer }/>
          <Route exact path ="/contactus" component = { ContactUsContainer } />
          <Route exact path ="/discount" component = {DiscountContainer } />
          <Route exact path ="/login" component = { LoginContainer } />
          <Route exact path ="/sign-up" component = { SignupContainer  } />
          
          <Route component = { CatchAllRoute } />
        </Switch>
      </Router>
    );
  }
}

export default App;
