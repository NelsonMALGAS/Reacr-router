import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import VanDetail, {
	loader as vanDetailLoader,
} from "./Components/VanDetail.jsx";
import Vans, { loader as vansLoader } from "./Components/Vans.jsx";
import Layout from "./Layout.jsx";
import Income from "./Components/Income.jsx";
import Review from "./Components/Review.jsx";
import HostLayout from "./Components/HostLayout.jsx";
import Dashboard from "./Components/Host.jsx";
import HostVans, { loader as hostVansLoader } from "./Components/HostVans.jsx";
import HostVanDetail, {
	loader as hostVanDetailLoader,
} from "./Components/HostVanDetail.jsx";
import Contacts from "./Components/Contacts.jsx";
import HostVanInfo from "./Components/HostVanInfo.jsx";
import HostVanPhotos from "./Components/HostVanPhotos.jsx";
import HostVanPricing from "./Components/HostVanPricing.jsx";
import NotFound from "./Components/PageNotFound.jsx";
import ErrorComponent from "./Components/Error.jsx";
import Login from "./Components/Login.jsx";
import { requireAuth } from "./Components/Utils.jsx";
import "./App.css";
import "./server.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} errorElement={<ErrorComponent />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="login" element={<Login />} />
			<Route path="vans" element={<Vans />} loader={vansLoader} />
			<Route path="contacts" element={<Contacts />} />
			<Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

			<Route path="host" element={<HostLayout />}>
				<Route
					index
					element={<Dashboard />}
					loader={async () => {
						await requireAuth();
						return null;
					}}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async () => {
						await requireAuth();
						return null;
					}}
				/>
				<Route
					path="review"
					element={<Review />}
					loader={async () => {
						await requireAuth();
						return null;
					}}
				/>
				<Route path="vans" element={<HostVans />} loader={hostVansLoader} />
				<Route
					path="vans/:id"
					element={<HostVanDetail />}
					loader={hostVanDetailLoader}
				>
					<Route
						index
						element={<HostVanInfo />}
						loader={async () => {
							await requireAuth();
							return null;
						}}
					/>
					<Route
						path="pricing"
						element={<HostVanPricing />}
						loader={async () => {
							await requireAuth();
							return null;
						}}
					/>
					<Route
						path="photos"
						element={<HostVanPhotos />}
						loader={async () => {
							await requireAuth();
							return null;
						}}
					/>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>,
	),
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
