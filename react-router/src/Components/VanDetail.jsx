import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import vansData from "./server";

export default function VanDetail() {
	const params = useParams();
	const [selectedVan, setSelectedVan] = useState(null);

	useEffect(() => {
		const vanId = params.id;
		const foundVan = vansData.find((van) => van.id === vanId);
		setSelectedVan(foundVan);
	}, [params.id]);

	return (
		<div className="van-detail-container">
			{selectedVan ? (
				<div className="van-detail">
					<img src={selectedVan.imageUrl} alt={selectedVan.name} />
					<i className={`van-type ${selectedVan.type} selected`}>
						{selectedVan.type}
					</i>
					<h2>{selectedVan.name}</h2>
					<p className="van-price">
						<span>${selectedVan.price}</span>/day
					</p>
					<p>{selectedVan.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}
