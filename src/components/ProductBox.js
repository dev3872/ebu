import React from "react";
import PropTypes from "prop-types";
import "./Landing.css";
const ProductBox = (props) => {
	return (
		<div className="card border-light d-flex flex-wrap col-8 my-2 col-sm-5 col-md-3 mx-md-3">
			<img
				src={props.productImage}
				className="card-img-top"
				alt="placeholder"
			/>
			<div className="card-body">
				<h5 className="card-title text-center py-4">{props.productName}</h5>
				<p className="card-text mb-3 lead card-desc">{props.productDesc}</p>
				<div className="d-flex justify-content-center">
					<a href="#" className="btn rounded-pill text-center card-more">
						More
					</a>
				</div>
			</div>
			<hr/>
		</div>
	);
};

ProductBox.propTypes = {
	productName: PropTypes.string.isRequired,
	productImage: PropTypes.string.isRequired,
	productDesc: PropTypes.string.isRequired,
};

export default ProductBox;
