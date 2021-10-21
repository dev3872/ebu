import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Mainbar.css";
const Mainbar = () => {
	const [navToggle1, setNavToggle1] = useState(0);
	const [navToggleSm, setNavToggleSm] = useState(0);
	const [navToggle2, setNavToggle2] = useState(0);
	const productToggle = () => {
		setNavToggle1((navToggle1) => !navToggle1);
	};
	const menuToggle = () => {
		setNavToggleSm((navToggleSm) => !navToggleSm);
	};
	const productToggleSm = () => {
		setNavToggle2((navToggle2) => !navToggle2);
	};
	return (
		<div>
			<div className="bg-light d-flex justify-content-between">
				<div className="py-2 collapsing-nav">
					<button className="btn btn-light" onClick={menuToggle}>
						<i className="fas fa-bars fa-2x"></i>
					</button>
				</div>
				<div className="pt-2">
					<div>
						<Link to="/">
							<img src={logo} alt="logo" className="logo mt-2 ms-3" />
						</Link>
					</div>
				</div>
				<div className="expanding-nav">
					<div className="d-flex justify-content-between">
						<div className=" d-flex navs-item mx-3 py-3">
							<div
								className="dropdown"
								onMouseEnter={() => setNavToggle1(1)}
								onMouseLeave={() => setNavToggle1(0)}
							>
								<button
									onClick={productToggle}
									className="btn dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									PRODUCTS
								</button>
								<ul
									className={
										// eslint-disable-next-line
										navToggle1 == 0 ? "dropdown-menu" : "dropdown-menu show"
									}
									aria-labelledby="dropdownMenuButton1"
								>
									<li>
										<a className="dropdown-item" href="#home">
											PRODUCTS1
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#home">
											PRODUCTS2
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#home">
											PRODUCTS3
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="navs-item mx-3 py-4">ABOUT US</div>
						<div className="navs-item mx-3 py-4">TESTIMONIALS</div>
						<div className="navs-item mx-3 py-4">
							<Link className="ebu-link" to="/contact-us">
								CONTACT
							</Link>
						</div>
					</div>
				</div>
				<div className=" d-flex py-2">
					<div className="nav-item me-1 ">
						<a className="nav-link mr-auto" href="#home">
							<i className="fas fa-shopping-bag fa-2x"></i>{" "}
							<span
								className="d-none d-md-inline font-weight-bold cart-text navbar-text"
								href="#home"
							>
								0 Items
							</span>
						</a>
					</div>
					<div className="nav-item me-lg-4">
						<a className="nav-link" href="#home">
							<i className="fas fa-user fa-2x"></i>
						</a>
					</div>
					{/* <div className="nav-item me-lg-4 collapsing-nav">
						<a className="nav-link" href="#home">
							<i className="fas fa-search fa-2x"></i>
						</a>
					</div> */}
				</div>
			</div>
			<div
				className={
					// eslint-disable-next-line
					navToggleSm == 0 ? "collapsing-nav d-none" : "collapsing-nav"
				}
			>
				<div className="d-flex flex-column w-100">
					<div className="d-flex mt-4 justify-content-center nav-icon">
						<input
							placeholder=" Need some help?"
							className="w-75 h-100 border-1 border-primary rounded-3"
							type="text"
						/>
					</div>
					<div className="d-flex flex-row ps-2 pt-2 mt-2 nav-icon border fw-bolder">
						<p>PRODUCTS</p>
						<i
							onClick={productToggleSm}
							className={
								// eslint-disable-next-line
								navToggle2 == 0
									? "fas fa-angle-double-down ms-auto me-4 pt-1"
									: "fas fa-angle-double-up ms-auto me-4 pt-1"
							}
						></i>
					</div>
					<div
						className={
							// eslint-disable-next-line
							navToggle2 == 0
								? "d-none d-flex bg-light mt-1 ps-2 pt-2 nav-icon border fw-bolder"
								: "d-flex bg-light mt-1 ps-2 pt-2 nav-icon border fw-bolder"
						}
					>
						<p className="ms-3">PRODUCT1</p>
					</div>
					<div
						className={
							// eslint-disable-next-line
							navToggle2 == 0
								? "d-none d-flex bg-light ps-2 pt-2 nav-icon border fw-bolder"
								: "d-flex bg-light ps-2 pt-2 nav-icon border fw-bolder"
						}
					>
						<p className="ms-3">PRODUCT2</p>
					</div>
					<div
						className={
							// eslint-disable-next-line
							navToggle2 == 0
								? "d-none d-flex bg-light ps-2 pt-2 nav-icon border fw-bolder"
								: "d-flex bg-light ps-2 pt-2 nav-icon border fw-bolder"
						}
					>
						<p className="ms-3">PRODUCT3</p>
					</div>
					<div className="d-flex mt-1 ps-2 pt-2 nav-icon border fw-bolder">
						<p>ABOUT US</p>
					</div>
					<div className="d-flex mt-1 ps-2 pt-2 nav-icon border fw-bolder">
						<p>TESTIMONIALS</p>
					</div>
					<div className="d-flex mt-1 ps-2 pt-2 nav-icon border fw-bolder">
						<Link className="ebu-link" to="/contact-us">
							CONTACT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mainbar;
