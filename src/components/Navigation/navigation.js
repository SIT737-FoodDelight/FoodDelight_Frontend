import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import CookFood from "../CookFood/cookFood";
import AboutUs from "../AboutUs/aboutUs";
import ManageAccount from "../ManageAccount/manageAccount";
import OrderFood from "../OrderFood/orderFood";
import Logout from "../Logout/logout";
import MyOrders from "../CookFood/myOrders";
import { GoogleLogout } from "react-google-login";

export default props => {
	return (
		<div>
			<BrowserRouter>
				<div className="fixed-header">
					<nav>
						<Link to="/OrderFood">
							<button>Order Food</button>
						</Link>
						<Link to="/CookFood">
							<button>Cook Food</button>
						</Link>
						<Link to="/MyOrders">
							<button>MyOrders</button>
						</Link>
						<Link to="/ManageAccount">
							<button>Manage Account</button>
						</Link>
						<Link to="/AboutUs">
							<button>About us</button>
						</Link>
						<Link to="/logout">
							{props.userType === "google" && (
								<GoogleLogout
									clientId="165578072854-9fm3ip67busp7im0c2chqefn8vg69ls1.apps.googleusercontent.com"
									buttonText="Logout"
									render={renderProps => (
										<button
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
										>
											Logout
										</button>
									)}
									onLogoutSuccess={() => window.location.replace("/")}
								/>
							)}
							{props.userType === "" && <Logout />}
						</Link>
					</nav>
				</div>
				<div>
					<Switch>
						<Route exact path="/">
							<Redirect to="/OrderFood" />
						</Route>
						<Route exact path="/OrderFood">
							<OrderFood
								username={props.username}
								authToken={props.authToken}
							/>
						</Route>
						<Route path="/CookFood">
							<CookFood username={props.username} authToken={props.authToken} />
						</Route>
						<Route path="/ManageAccount">
							<ManageAccount
								username={props.username}
								authToken={props.authToken}
							/>
						</Route>
						<Route path="/AboutUs">
							<AboutUs />
						</Route>
						{/* <Route path="/logout">
							
						</Route> */}
						<Route path="/MyOrders">
							<MyOrders username={props.username} authToken={props.authToken} />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};
