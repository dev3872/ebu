import React, { useEffect, useState } from "react";
import ebuimg1 from "./ebuimg1.jpg";
import ebuimg2 from "./ebuimg2.jpg";
import ebuimg3 from "./ebuimg3.jpg";
import "./Landing.css";
import ProductBox from "./ProductBox";
const Landing = () => {
	const [carousalIndicator, setCarousalIndicator] = useState(0);
	const setCarousal = (item) => {
		setCarousalIndicator(item);
	};
	useEffect(() => {
		setTimeout(() => {
			changeCarousal(1);
		}, 2000);
	}, [carousalIndicator]);
	const changeCarousal = (step) => {
		var carousalIndicatorTemp = carousalIndicator + step;
		if (carousalIndicatorTemp < 0) {
			carousalIndicatorTemp = 2;
		}
		setCarousalIndicator(carousalIndicatorTemp % 3);
	};
	return (
		<div>
			{/* CAROUSAL */}
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						// eslint-disable-next-line
						className={carousalIndicator == 0 ? "active px-2" : "px-2"}
					>
						<i
							onClick={() => setCarousal(0)}
							className={
								// eslint-disable-next-line
								carousalIndicator == 0 ? "fas fa-circle" : "far fa-circle"
							}
						></i>
					</li>
					<li
						// eslint-disable-next-line
						className={carousalIndicator == 1 ? "active px-2" : "px-2"}
					>
						<i
							onClick={() => setCarousal(1)}
							className={
								// eslint-disable-next-line
								carousalIndicator == 1 ? "fas fa-circle" : "far fa-circle"
							}
						></i>
					</li>
					<li
						// eslint-disable-next-line
						className={carousalIndicator == 2 ? "active px-2" : "px-2"}
					>
						<i
							onClick={() => setCarousal(2)}
							className={
								//eslint-disable-next-line
								carousalIndicator == 2 ? "fas fa-circle" : "far fa-circle"
							}
						></i>
					</li>
				</ol>
				<div className="carousel-inner">
					<div
						className={
							carousalIndicator == 0 ? "carousel-item active" : "d-none"
						}
					>
						<img
							className="img-fluid mx-auto carousal-img"
							src={ebuimg1}
							alt="First slide"
						/>
					</div>
					<div
						className={
							carousalIndicator == 1 ? "carousel-item active" : "d-none"
						}
					>
						<img
							className="img-fluid mx-auto carousal-img"
							src={ebuimg2}
							alt="Second slide"
						/>
					</div>
					<div
						className={
							carousalIndicator == 2 ? "carousel-item active" : "d-none"
						}
					>
						<img
							className="img-fluid mx-auto carousal-img"
							src={ebuimg3}
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					onClick={() => changeCarousal(-1)}
				>
					<span className="fas fa-chevron-left fa-2x carousal-indicator-color"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					onClick={() => {
						changeCarousal(1);
					}}
				>
					<span className="fas fa-chevron-right fa-2x carousal-indicator-color"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>

			{/* FEATURED PRODUCT */}
			<div className="d-flex flex-column w-100 my-5">
				<div className="d-flex justify-content-center">
					<p className="h1 font-weight-bold product-header-text mb-4">
						FEATURED PRODUCTS
					</p>
				</div>
				<div className="product-list d-flex flex-row justify-content-center row">
					<ProductBox
						productName="Washing Machine"
						productImage="https://via.placeholder.com/468x540"
						productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					></ProductBox>
					<ProductBox
						productName="Refrigirator"
						productImage="https://via.placeholder.com/468x540"
						productDesc="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					></ProductBox>
					<ProductBox
						productName="Air Conditioner"
						productImage="https://via.placeholder.com/468x540"
						productDesc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
					></ProductBox>
				</div>
			</div>

			{/* Search md,lg */}
			<div className="d-none bg-light d-md-flex flex-column h-auto d-lg-flex align-items-center">
				<div>
					<p className="h2 mt-5 product-header-text">
						We can help you look for your dreams
					</p>
					<p className="h5 mt-3 text-center">Explore Possibilities</p>
				</div>
				<div className="input-group mb-3 w-75 my-4">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							<span className="fas fa-search fa-2x"></span>
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Example: FrontLoad Washing Machine"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>

			{/* copyright */}
			<div className="bg-light d-flex flex-column h-auto d-flex align-items-center">
				<div className="horizontal-line"></div>

				<div className="mt-3">
					<p>© Copyright 2021 EBU </p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
