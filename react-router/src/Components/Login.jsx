import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import "../App.css";

const StyledForm = styled("form")({
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	maxWidth: "300px",
	margin: "0 auto",
});

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(loginFormData);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			<StyledForm onSubmit={handleSubmit} className="login-form">
				<TextField
					name="email"
					label="Email address"
					variant="outlined"
					onChange={handleChange}
					value={loginFormData.email}
				/>
				<TextField
					name="password"
					label="Password"
					type="password"
					variant="outlined"
					onChange={handleChange}
					value={loginFormData.password}
				/>

				<Button
					variant="contained"
					type="submit"
					color="primary"
					onClick={() => console.log(loginFormData)}
				>
					Log in
				</Button>
			</StyledForm>
		</div>
	);
}
