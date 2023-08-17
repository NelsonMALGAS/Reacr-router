import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import VanDetail from "./Components/VanDetail.jsx";
import Vans from "./Components/Vans.jsx";
import Layout from "./Layout.jsx";
import Income from "./Components/Income.jsx";
import Review from "./Components/Review.jsx";
import HostLayout from "./Components/HostLayout.jsx";
import Dashboard from "./Components/Host.jsx";
import HostVans from "./Components/HostVans.jsx";
import HostVanDetail from "./Components/HostVanDetail.jsx";
import Contacts from "./Components/Contacts.jsx";
import HostVanInfo from "./Components/HostVanInfo.jsx";
import HostVanPhotos from "./Components/HostVanPhotos.jsx";
import HostVanPricing from "./Components/HostVanPricing.jsx";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="vans" element={<Vans />} />
						<Route path="contacts" element={<Contacts />} />
						<Route path="vans/:id" element={<VanDetail />} />

						<Route path="host" element={<HostLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="income" element={<Income />} />
							<Route path="review" element={<Review />} />
							<Route path="vans" element={<HostVans />} />
							<Route path="vans/:id" element={<HostVanDetail />}>
								<Route index element={<HostVanInfo />} />
								<Route path="pricing" element={<HostVanPricing />} />
								<Route path="photos" element={<HostVanPhotos />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
