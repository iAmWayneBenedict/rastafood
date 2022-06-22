import Rating from "../rating/Rating.component";

const FoodCard = () => {
	return (
		<div className="sm:max-w-[12rem] sm:min-w-[9.15rem] md:max-w-[15rem] md:min-w-[13rem] min-w-[9rem] max-w-[9.15rem] w-full p-1 rounded-lg min-h-[14.25rem] relative mb-7">
			<div className="top h-1/2 md:h-2/3 w-full">
				<img
					src="/img/eggs-breakfast-avocado-1296x728-header.webp"
					className="rounded-tl-lg rounded-tr-lg object-cover w-full h-full"
					alt=""
				/>
			</div>
			<div className="bot p-2">
				<div id="prev-price" className=" flex justify-between">
					<span className="order-2 md:order-1 text-xs text-slate-600 bg-green-300 px-3 rounded font-semibold mr-0 md:mr-1">
						special deal
					</span>
					<span className="order-1 md:order-2 text-xs text-slate-500 line-through font-semibold">
						₱123
					</span>
				</div>
				<div className="food-name flex flex-col md:flex-row md:justify-between md:items-center">
					<h1 className="order-2 md:order-1 font-semibold text-base sm:text-lg">
						Vegetable Salad
					</h1>
					<h3 className="order-1 md:order-2 font-semibold text-sm sm:text-base">₱105</h3>
				</div>
				<div className="flex items-center mt-1">
					<Rating />
					<span className="text-xs md:text-sm text-slate-500 ml-2">(123)</span>
				</div>
				<div className="des flex justify-between items-center mt-2">
					<div className="des-info">
						<span className="text-xs">Salad, Vegetables</span>
					</div>
					<div className="heart">
						<i className="bi bi-suit-heart mt-1 text-black"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
