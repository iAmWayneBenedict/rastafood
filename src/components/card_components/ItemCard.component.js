import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating.component";
import AddOnSection from "../shop_components/AddOnSection.component";

const ItemCard = ({ data }) => {
	const [conHeight, setConHeight] = useState(0);
	const heartBtn = (event) => {
		console.log(event.target);
	};

	const itemCard = useRef();
	useEffect(() => {
		setConHeight(itemCard.current.clientHeight - 100);
	}, []);
	window.onresize = () => {
		setConHeight(itemCard.current.clientHeight - 100);
	};
	return (
		<div
			ref={itemCard}
			className="fixed max-h-[80%] h-full bottom-0 left-[50%] translate-x-[-50%] z-50 cursor-auto w-[50rem] p-10 pb-5 bg-white shadow-xl rounded-tl-2xl rounded-tr-2xl"
		>
			<div className="relative p-10 pb-0 h-full">
				<div
					onClick={() => window.history.back()}
					className="close-btn fixed top-10 right-10 cursor-pointer"
				>
					<i class="bi bi-x-lg text-xl"></i>
				</div>
				<div className="con overflow-y-scroll px-2" style={{ height: conHeight + "px" }}>
					<div className="details">
						<div className="top w-full h-[10rem] flex gap-10">
							<div className="left h-full max-w-[13rem] flex-1">
								<img
									src="/img/eggs-breakfast-avocado-1296x728-header.webp"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="right flex flex-1 flex-col py-5 justify-between h-full">
								<div className="top flex justify-between items-center mr-10">
									<div className="price">
										<h3 className="font-bold text-sm sm:text-2xl">₱105</h3>
									</div>
									<div className="heart">
										<i
											className="bi bi-suit-heart mt-1 text-primary text-2xl"
											onClick={heartBtn}
										></i>
									</div>
								</div>
								<div className="bot flex flex-col gap-2">
									<div className="name font-bold text-2xl">Vegetable Salad</div>
									<Rating size="w-4" />
								</div>
							</div>
						</div>
						<div className="bottom mt-10 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
							labore? Itaque earum, porro excepturi perspiciatis harum vitae, expedita
							quaerat possimus fugit aliquid eaque aliquam provident molestiae
							necessitatibus tempora ad voluptas!
						</div>
					</div>

					<form action="">
						<div className="add-ons">
							{Object.entries(data).map(([key, value]) => {
								return <AddOnSection data={value} key={key} />;
							})}
						</div>
						<div className="item-counter flex my-14">
							<button type="button" className="w-8 h-8 bg-gray-300 rounded">
								<i className="bi bi-dash-lg"></i>
							</button>
							<input
								type="text"
								name=""
								id=""
								value="1"
								className="w-[1rem] text-center mx-5 font-bold text-lg"
							/>
							<button type="button" className="w-8 h-8 bg-primary text-white rounded">
								<i className="bi bi-plus-lg font-bold"></i>
							</button>
						</div>
						<button
							type="submit"
							className="mb-10 font-semibold text-center w-full bg-primary text-white py-2 rounded-md"
						>
							Add to Cart
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
