import React from "react";
import "./Landing.css";
import Testimonial from "./Testimonial";
import indianFace1 from "./indian_face.jpg"
import indianFace2 from "./indian_face_2.jpg"
import indianFace3 from "./indian_face_3.jpg"
import { Link } from "react-router-dom";
const Testimonials = () => {
	return (
		<div className="footer-height">
			<div className="row mt-5 testimonials-box-height">
                <div className="col-1"></div>
                <div className="col-10"><p className="display-4 fw-bold mt-5 pt-3 font-monospace">What do our users say?</p></div>
                <div className="col-1"></div>
            </div>
			<div className="row margin-negative">
				<div className="col-1"></div>
				<div className="col-10">
					<div className="row">
						<Testimonial
							text="Sample text. Click to select the text box. Click again or double click to start editing the text."
							name="Bob Roberts"
							photo={indianFace1}
							post="Sales Manager"
						/>
						<Testimonial
							text="Sample text. Click to select the text box. Click again or double click to start editing the text."
							name="Celia Almeda"
							photo={indianFace2}
							post="Secretary"
						/>
						<Testimonial
							text="Sample text. Click to select the text box. Click again or double click to start editing the text."
							name="Nat Reynolds"
							photo={indianFace3}
							post="Chief Accountant"
						/>
					</div>
				</div>
				<div className="col-1"></div>
			</div>
            <div className="row testimonials-footer">
                <div className="col-1"></div>
                <div className="col-10">
                    <p className="display-6 fw-bold text-normal text-center pt-5">Your words bring Joy and Inspiration</p>
                    <Link className="pt-0" to="/contact-us"><p className="fs-4 text-center">Share with us your story</p></Link>
                </div>
                <div className="col-1"></div>
            </div>
		</div>
	);
};

export default Testimonials;
