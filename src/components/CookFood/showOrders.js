import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/style.css";
import axios from "axios";
import { API_BASE_URL } from "../Constants/constants";
import cookFoodJpg from "../../assets/images/cookfood.jpg";

export default props => {
	const [reloadData, setReloadData] = useState(true);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		axios({
			method: "POST",
			url: API_BASE_URL + "orders/",
			headers: {
				"Content-Type": "application/json",
				authToken: props.authToken,
			},
			data: { username: props.username },
		}).then(response => {
      console.log(response);
      const res = eval(response.data)
			setOrders(res);
		});
	}, [reloadData]);

	return (
		<div className="main-container">
			<img
				className="orderfood-image"
				src={cookFoodJpg}
				alt="orderFood-image"
			/>
			<div className="form-container">
				<Container fluid>
					<Row>
						<Col md={12}>
							<table>
								{orders.map(order => {
									return (
										<tr>
											<td>{JSON.stringify(order)}</td>
										</tr>
									);
								})}
							</table>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};
