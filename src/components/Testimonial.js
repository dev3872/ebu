import React from "react";
import "./Landing.css";
const Testimonial = (props) => {
	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="testimonial-size mx-1 my-4">
				<div className="fs-5 px-3 pt-4 text-muted">{props.text}</div>
				<div>
					<figure class="figure round-image p-3 mt-5">
						<img src={props.photo} class="figure-img img-fluid testimonial-image" alt={props.name} />
						<figcaption class="figure-caption fs-4 fw-bold mt-4">
							{props.name}
                            <p className="fs-5 fw-normal">{props.post}</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
