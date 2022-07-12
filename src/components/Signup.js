import { Link, useSearchParams } from "react-router-dom";
import InputField from "./form_components/InputField.component";

const Signup = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	let searchValues = Object.fromEntries([...searchParams]);
	console.log(searchValues);
	return (
		<div className="md:mx-10 mt-24 md:mt-32 lg:mt-40 mb-80 flex flex-col gap-32 justify-center items-center">
			<div className="login-con w-[30rem] flex flex-col">
				<div className="title text-primary font-bold text-lg mb-10">RastaFoods</div>
				<div className="error text-sm font-semibold py-2 text-center rounded-md hidden">
					Incorrect email or password
				</div>
				<form action="" className="w-full flex mt-10">
					<div className="relative flex flex-col w-full">
						<div className="flex flex-col gap-10">
							<InputField
								type="text"
								id="first-name"
								name="first-name"
								label="First Name"
								placeholder="Manuel"
								icon="bi bi-person"
							/>

							<InputField
								type="text"
								id="last-name"
								name="last-name"
								label="Last Name"
								placeholder="Roxas"
								icon="bi bi-person"
							/>

							<InputField
								type="text"
								id="email"
								name="email"
								label="Email"
								placeholder="example@gmail.com"
								icon="bi bi-envelope"
							/>
							{/*
							<InputField
								type="password"
								id="password"
								name="password"
								label="Password"
								placeholder="●●●●●●●●●●"
								icon="bi bi-lock"
							/>

							<InputField
								type="password"
								id="confirm-password"
								name="confirm-password"
								label="Confirm Password"
								placeholder="●●●●●●●●●●"
								icon="bi bi-lock"
							/> */}
						</div>
						{/* <div className="flex justify-between mt-2">
							<div>
								<input
									type="checkbox"
									name="show-password"
									id="show-password"
									className="accent-primary select-none"
								/>
								<label htmlFor="show-password" className="text-sm ml-2">
									Show Password
								</label>
							</div>
						</div> */}
						<button
							type="submit"
							className="mt-10 bg-primary text-white text-sm md:text-base font-semibold py-3 rounded-md"
						>
							Next
						</button>
						<span className="text-sm text-center mt-3">
							Don't have an account?
							<Link to={"/"} className="ml-2 text-primary font-medium">
								Sign in
							</Link>
						</span>
						<span className="text-sm text-center my-10 text-slate-700 relative after:absolute before:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1/3 after:h-[1px] after:bg-slate-400 before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1/3 before:h-[1px] before:bg-slate-400">
							or Sign up with
						</span>
						<div className="flex justify-evenly">
							{[
								["social-google-btn", "/img/search.png"],
								["social-facebook-btn", "/img/facebook.png"],
								["social-twitter-btn", "/img/twitter.png"],
							].map(([socialsClass, src]) => {
								return (
									<button
										className={`${socialsClass} w-[2.5rem] sm:w-[3rem] rounded-md`}
										key={socialsClass}
									>
										<img
											src={src}
											className="w-full h-full object-contain"
											alt=""
										/>
									</button>
								);
							})}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;