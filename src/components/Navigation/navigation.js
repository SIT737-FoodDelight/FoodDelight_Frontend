import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import CookFood from '../CookFood/cookFood'
import AboutUs from '../AboutUs/aboutUs'
import ContactUs from '../ContactUs/contactUs'
import ManageAccount from '../ManageAccount/manageAccount'
import OrderFood from '../OrderFood/orderFood'
import Logout from '../Logout/logout'



export default (props) => {
  return (
    <div>
      <BrowserRouter>
        <Link exact="true" to="/OrderFood" >
          <button>Order Food</button>
        </Link>
        <Link to="/CookFood">
          Cook Food
        </Link>
        <Link to="/ManageAccount">
          Manage Account
        </Link>
        <Link to="/AboutUs">
          About us
        </Link>
        <Link to="/ContactUs" >
          Contact us
        </Link>
        <Link to="/logout" >
          Logout
        </Link>
        <Switch>
          <Route path="/OrderFood">
            <OrderFood username={props.username}/>
          </Route>
          <Route path="/CookFood">
            <CookFood />
          </Route>
          <Route path="/ManageAccount">
            <ManageAccount />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
