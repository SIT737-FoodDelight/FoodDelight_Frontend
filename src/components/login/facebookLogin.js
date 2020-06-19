import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import googleSvg from "../../assets/images/google-icon.svg";
import axios from "axios";
import { API_BASE_URL } from "../Constants/constants";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import facebookSvg from "../../assets/images/facebook.svg";

export default props => {
	console.log(props);
	const responseFacebook = response => {
		console.log(response);
		const user = response.email;
		axios({
			method: "POST",
			url: API_BASE_URL + "facebook",
			headers: {
				"Content-Type": "application/json",
                access_token: response.accessToken,
                username: response.email
			},
		})
			.then(response => {
				console.warn(response.data);
				if (response.data.message == "login_Success") {
					props.setIsUserLoggedIn(true);
					props.setUsername(user);
					props.setUserType("");
					props.setAuthToken(response.data.authToken);
				} else alert("login failed");
			})
			.catch(reason => alert("login failed" + reason));
	};

	return (
		<div>
			<FacebookLogin
                appId="294417988222761"
                fields="name,email"
				autoLoad
				callback={responseFacebook}
				render={renderProps => (
					<button onClick={renderProps.onClick} className="facebook-btn">
						<div className="btn-container">
							<img
								src={facebookSvg}
								alt="facebookicon"
								width="30"
								height="30"
							/>
						</div>
						<span className="facebook-btn-text">Sign in via Facebook</span>
					</button>
				)}
			/>
		</div>
	);
};
