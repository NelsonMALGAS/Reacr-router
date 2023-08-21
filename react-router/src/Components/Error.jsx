import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
	const error = useRouteError();

	return (
		<div className="error">
			<h1>Error :{error.message}</h1>
			<pre>
				Status : {error.status} - {error.statusText}
			</pre>
		</div>
	);
};

export default ErrorComponent;
