import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
	const { currentVan } = useOutletContext();

	if (!currentVan) {
		return <p>No current van available.</p>;
	}
	return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
