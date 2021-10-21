import "./Landing.css";
const Contact = () => {
	return (
		<div className="footer-height">
			<div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
				<div className="d-flex mt-3 bg-light flex-column align-items-start justify-content-start width-90 width-md-50">
					<p className="fs-1 mt-2 ms-2 text-start">Contact Us</p>
					<p className="fs4 mt-1 mx-3 text-uppercase">Full Name</p>
					<div class="input-group mb-2 px-4">
						<input
							type="text"
							class="form-control"
							placeholder="Full Name"
							aria-label="Full Name"
							aria-describedby="basic-addon1"
						/>
					</div>
					<p className="fs4 mt-1 mx-3 text-uppercase">Email Address</p>
					<div class="input-group mb-2 px-4">
						<input
							type="email"
							class="form-control"
							placeholder="Email"
							aria-label="Email"
							aria-describedby="basic-addon1"
						/>
					</div>
					<p className="fs4 mt-1 mx-3 text-uppercase">Subject</p>
					<div class="input-group mb-2 px-4">
						<input
							type="text"
							class="form-control"
							placeholder="Subject"
							aria-label="Subject"
							aria-describedby="basic-addon1"
						/>
					</div>
					<p className="fs4 mt-1 mx-3 text-uppercase">Message</p>
					<div class="input-group mb-2 px-4">
						<textarea
							class="form-control"
							placeholder="Message"
							aria-label="Message"
							rows="4"
						></textarea>
					</div>
					<button type="button" class="btn btn-primary mt-1 mx-3 mb-4">
						Send Message
					</button>
				</div>
				<div className="d-flex mt-3 bg-light flex-column align-items-start justify-content-start width-90 width-md-50 overflow-hidden-map">
					<div className="mt-2 map-class">
						<iframe
							width="568px"
							height="500px"
							frameborder="0"
							src="https://www.bing.com/maps/embed?h=400&w=500&cp=25.72504667351231~85.51530629882814&lvl=6&typ=s&sty=r&src=SHELL&FORM=MBEDV8"
							scrolling="no"
						/>
					</div>
					<div
						style={{
							whiteSpace: "nowrap",
							textAlign: "center",
							width: "100%",
						}}
					>
						<a
							id="largeMapLink"
							target="_blank"
							href="https://www.bing.com/maps?cp=25.72504667351231~85.51530629882814&amp;sty=r&amp;lvl=6&amp;FORM=MBEDLD"
						>
							View Larger Map
						</a>{" "}
						&nbsp; | &nbsp;
						<a
							id="dirMapLink"
							target="_blank"
							href="https://www.bing.com/maps/directions?cp=25.72504667351231~85.51530629882814&amp;sty=r&amp;lvl=6&amp;rtp=~pos.25.72504667351231_85.51530629882814____&amp;FORM=MBEDLD"
						>
							Get Directions
						</a>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column flex-md-row align-items-center justify-content-md-center mt-5">
				<div className="d-flex d-md-flex flex-column flex-md-column align-items-center align-items-md-center px-4">
					<div className="icon-contact-holder d-flex justify-content-center align-items-center">
						<i className=" icon-contact fas fa-map-marker-alt fa-2x"></i>
					</div>
					<p>
						<span className="text-dark legend">Address:</span>{" "}
						<span className="text-muted">Khanpur, New Delhi, 110080</span>
					</p>
				</div>
				<div className="d-flex flex-column align-items-center px-4">
					<div className="icon-contact-holder d-flex justify-content-center align-items-center">
						<i className="icon-contact fas fa-phone fa-2x"></i>
					</div>
					<p>
						Phone: <a href="tel://+919582184466"> +91 958 2184 466</a>
					</p>
				</div>
				<div className="d-flex flex-column align-items-center px-4">
					<div className="icon-contact-holder d-flex justify-content-center align-items-center">
						<i className="icon-contact fas fa-paper-plane fa-2x"></i>
					</div>
					<p>
						Email:{" "}
						<a href="mailto://ebuelectronics@gmail.com">
							ebuelectronics@gmail.com
						</a>
					</p>
				</div>
				<div className="d-flex flex-column align-items-center px-4">
					<div className="icon-contact-holder d-flex justify-content-center align-items-center">
						<i className="icon-contact fas fa-globe-asia fa-2x"></i>
					</div>
					<p>
						Website: <a href="www.ebu.com">www.ebu.com</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
