import React, { useState } from "react";
import "../../assets/css/style.css";
import axios from "axios";
import { API_BASE_URL } from "../Constants/constants";
import cookFoodJpg from "../../assets/images/cookfood.jpg";
import Orders from "./showOrders";

export default props => {
	const [tfn, setTfn] = useState("");
	const [abn, setAbn] = useState("");
	const [showOrders, setShowOrders] = useState(true);
	const [licenseNum, setLicenseNum] = useState("");

	const saveCookDetails = () => {
		axios({
			method: "POST",
			url: API_BASE_URL + "cookfood/",
			headers: {
				"Content-Type": "application/json",
				authToken: props.authToken,
			},
			data: {
				tfn: tfn,
				abn: abn,
				licenseNum: licenseNum,
			},
		}).then(response => {
			if (response.data == "cooking details saved") {
				alert("Your details saved successfully");
			} else {
				alert("Details not saved. Please enter again");
			}
		});
	};

	return (
		<div className="main-container">
			<img
				className="orderfood-image"
				src={cookFoodJpg}
				alt="orderFood-image"
			/>
			{showOrders && <Orders authToken={props.authToken} />}

			{!showOrders && (
				<div className="form-container">
					<h2 className="form-title">Wanna Start Cooking?</h2>
					<input
						type="text"
						className="form-input-text-input"
						name="tfn"
						placeholder="Enter Tax File Number(TFN)"
						onChange={evnt => setTfn(evnt.target.value)}
						required
					/>

					<input
						type="text"
						className="form-input-text-input"
						name="abn"
						placeholder="Enter ABN"
						onChange={evnt => setAbn(evnt.target.value)}
						required
					/>

					<input
						type="text"
						className="form-input-text-input"
						name="licenseNum"
						placeholder="Cooking License Number"
						onChange={evnt => setLicenseNum(evnt.target.value)}
						required
					/>

					<button
						className="signup-btn"
						type="button"
						onClick={saveCookDetails}
					>
						Save
					</button>
				</div>
			)}
		</div>
	);
};
