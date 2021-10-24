import React from "react";
import vivekanand from "./swami-vivekananda.png";
import teamwork from "./teamwork2.svg";
const AboutUs = () => {
	return (
		<div className="footer-height">
			<div className="d-flex flex-column about-us-extra align-items-start">
				<span className="about-us-padding display-5 fw-bold">About EBU</span>
				<span className="hr-line"></span>
				<div className="row">
					<div className=""></div>
					<div className="col-12 col-sm-11 col-md-10 col-lg-8">
						<p className="fs-4 w-100 ps-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							condimentum facilisis urna. Nunc mattis ornare massa nec
							porttitor. Donec nec diam leo. Fusce eu nisi a leo faucibus
							viverra eleifend non est. Vestibulum mattis velit ex, semper
							tempus quam bibendum vel. Pellentesque efficitur quam non tempus
							rhoncus. Phasellus finibus nisi et hendrerit rhoncus. Etiam ligula
							est, cursus ut ligula nec, ornare imperdiet sapien.
						</p>
					</div>
					<div className=""></div>
				</div>
				<div className="btn btn-primary btn-about-us">
					<span className="fs-5 fw-bold">Book Appointment</span>
				</div>
			</div>
			<div className="d-none">
				<a href="https://icons8.com/icon/77168/quality">
					Quality icon by Icons8
				</a>
			</div>
			<div className="row my-5 py-5">
				<div className="col-6 col-md-3 my-3 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/dotty/160/000000/project.png" />
					<span className="fw-bold fs-1">100+</span>
					<span className="fs-4">Projects delivered</span>
				</div>
				<div className="col-6 col-md-3 my-3 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/160/000000/external-client-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png" />
					<span className="fw-bold fs-1">10+</span>
					<span className="fs-4">Clients connected</span>
				</div>
				<div className="col-6 col-md-3 my-3 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/dotty/160/000000/warranty-card.png" />
					<span className="fw-bold fs-1">A++</span>
					<span className="fs-4">Quality Delivered</span>
				</div>
				<div className="col-6 col-md-3 my-3 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/ios/160/000000/18-plus.png" />
					<span className="fw-bold fs-1">18+</span>
					<span className="fs-4">Years of Experience</span>
				</div>
			</div>
			<div className="row py-4 bg-light">
				<div className="col-12 px-4">
					<p className="fs-1 fw-bold text-center text-capitalize">
						3 generation of ideals with 1 shared vision
					</p>
					<div className="offset-md-2 col-md-8">
						<hr />
						<p className="fs-3 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque ullamcorper lacus non scelerisque ultricies.
							Curabitur quis commodo augue. Etiam dictum leo in varius blandit.
							Maecenas mattis molestie dolor. Morbi metus est, consequat vitae
							commodo ut, rutrum vel mauris.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="row py-4">
					<p className="fs-1 fw-bold text-center">Our Shared Vision</p>
				</div>
				<div className="offset-1 col-10 offset-md-0 col-md-3 my-4 d-flex flex-column align-items-center">
					<img src={vivekanand} className="img-vision" />
					<span className="pt-2 fs-4 fw-bold text-center">Vasudeva Kutumbakam</span>
					<blockquote className="text-center blockquote text-capitalize pt-2 ps-2">
						the differences in this world are of degree, and not of kind,
						because oneness is the secret of everything
					</blockquote>
				</div>
				<div className="offset-1 col-10 offset-md-0 col-md-3 my-4 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/clouds/160/000000/satisfaction.png" className="img-vision"/>
					<span className="pt-2 fs-3 fw-bold text-center">Customer Satisfaction</span>
					<blockquote className="text-center blockquote text-capitalize pt-2 ps-2">
						We believed since the inception that our happiness is measured by our clients satisfaction
					</blockquote>
				</div>
				<div className="offset-1 col-10 offset-md-0 col-md-3 my-4 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/160/000000/external-success-success-flatart-icons-lineal-color-flatarticons-3.png" className="img-vision"/>
					<span className="pt-2 fs-3 fw-bold text-center">Continuous Growth</span>
					<blockquote className="text-center blockquote text-capitalize pt-2 ps-2">
						We are taught to never settle with success. success is a good night sleep after hard labour.
					</blockquote>
				</div>
				<div className="offset-1 col-10 offset-md-0 col-md-3 my-4 d-flex flex-column align-items-center">
					<img src="https://img.icons8.com/external-wanicon-flat-wanicon/160/000000/external-trust-training-and-coaching-wanicon-flat-wanicon.png" className="img-vision"/>
					<span className="pt-2 fs-3 fw-bold text-center">Trust & Partnership</span>
					<blockquote className="text-center blockquote text-capitalize pt-2 ps-2">
						It takes 2 to make a bond. We build a bond with our partnership and your trust
					</blockquote>
				</div>
			</div>
			<div className="row py-5">
				<div className="col-12 col-md-6">
					<img src={teamwork} style={{maxHeight:'300px'}}/>
				</div>
				<div className="col-12 col-md-6"></div>
			</div>
		</div>
	);
};

export default AboutUs;
