import React, { Component } from 'react'
import './Footer.css'
import { Link as Link2 } from "react-router-dom";
// import { createPortal } from 'react-dom'
// // npm install --save-dev @iconify/react @iconify-icons/bx
// import { Icon, InlineIcon } from '@iconify/react';
// import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
// import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
// import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
// import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
// import { Link as Link1 } from "react-scroll";
// import { useLocation } from 'react-router-dom';
// import { matchPath } from "react-router";
// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
// import Number from '../../assets/images/phone.png';
// import Email from '../../assets/images/white-email (2).png';
// let location;
const Footer=()=> {
	return (
		<footer className="mt-5"><br/>
    	    <div class="footer-top">
	        	<div class="container">
	        		<div class="row">
	        			<div class="col-md-4 footer-about wow fadeInUp">
	        				<h2>MedEasy</h2>
	        				<p>
                    	    Join millions of people who wish to have a safe and secure society.
	        				</p>
	                	</div>
	                	<div class="col-md-4 offset-md-1 footer-links wow fadeInUp">
	                		<div class="row">
	                			<div class="col">
	                				<h3>Links</h3>
	                			</div>
	                		</div>
	                		<div class="row">
	                			<div class="col-md-4">
	                				<p><Link2 class="scroll-link" to="/" className="text-decoration-none">Home</Link2></p>
	                				<p><Link2 to="about" className="text-decoration-none">About</Link2></p>
									<p><Link2 to="orders" className="text-decoration-none">Orders</Link2></p>
	                			</div>
	                			<div class="col-md-4">
									<p><Link2 to="profile" className="text-decoration-none">Profile</Link2></p>
	                			</div>
	                		</div>
	                	</div>
                    	<div class="col-md-3  footer-contact wow fadeInDown">
	        				<h3>Contact</h3>
	                		<p><i class="fas fa-map-marker-alt"></i>SGSITS, 23 Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003</p>
	                		<p><i class="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">medeasy45@gmail.com</a></p>
	                	</div>
	            	</div>
	        	</div>
	    	</div>
	        <div class="footer-bottom">
	    		<div class="container">
	    			<div class="row">
	       				<div class="col-5 col-md-6 footer-copyright">
	        	        	&copy; MedEasy 2021
	        	        </div>
	       				<div class="col-7 col-md-6 footer-social">
	        	        	<a href="#"><i class="fab fa-facebook-f ml-0"></i></a> 
							<a href="#"><i class="fab fa-twitter"></i></a> 
							<a href="#"><i class="fab fa-google-plus-g"></i></a> 
							<a href="#"><i class="fab fa-instagram"></i></a> 
	        	        </div>
	       			</div>
	    		</div>
	    	</div>
    	</footer>
	);
    // location=useLocation().pathname;
    // const list_creator=(classname,header,name,id_code,link)=>{
    //     let loop=0;
    //     let list_feature=name.map((name)=>{
    //         let abc="/"+ name.toLowerCase();
    //         loop+=1;
    //         let id='item-'+id_code+loop;
    //         // '/' will be considered 'home' here
    //         if(classname=="Resource-list")
    //         {
    //             //if the current page is the same page of the button which we are clicking
    //             if(abc==location || (location=="/" && abc=="/home"))
    //             {
    //                 //Then scroll the page to the top
    //                 return(
    //                     <div key={id} id={id}>
    //                         <Link2 to="Header" activeClass="active" spy={true} smooth={true} offset={-15000} duration={100}>
	// 							{name}
    //                         </Link2>
    //                     </div>
    //                 );
    //             }
    //             //Else move to the link
    //             else{
    //                 if(abc=="/home"){
    //                     return(
    //                         <Link2 to="/">{name}<br></br></Link2>
    //                     );
    //                 }
    //                 return(
    //                     <Link2 to={abc}>{name}<br></br></Link2>
    //                 );
    //             }
    //         }
    //         else
    //         {
    //             return(
    //             <div key={id} id={id}>
    //                 <Link1 to={link} activeClass="active" spy={true} smooth={true} offset={-70} duration={100}>
	// 					{name}
    //                 </Link1>
    //             </div>
    //             );
    //         }
    //     });
    //     return (
    //         <div className={classname}>
    //             {/* <h3>{header}</h3> */}
    //             {list_feature}
    //         </div>
    //         );
    // }
    // const create_Icon=(name_icon)=>{
    //     return(
    //         <Icon icon={name_icon} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
    //     );
    // }
    // let resources=["Home","About","Orders","Profile","Dashboard"];
    // let list_resource=list_creator("Resource-list","Links",resources,"r","Home_Header");
    // return (
    	// <div className="Footer">
    	//     <div className="list-section">
    	//     <div id="statement">
    	//         <h1 >MedEasy</h1>
    	//         <h4>Join millions of people who wish to have a safe and secure society.</h4>
    	//     </div>
    	//     {list_resource}
    	//     <div class="our-info">
    	//             <h3>Address</h3>
    	//         <p>
    	//             <h7>SGSITS INDORE</h7>
    	//             <p>23, Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003</p>
    	//         </p>
    	//     </div>
    	//     </div>
    	//     <div class="social-network margin-space">
    	//             <div class="before-hline">
    	//                 <h4>Contact</h4>
    	//                 <h4>Our Social Networks</h4>
    	//             </div>
    	//             <hr></hr>
    	//             <div class="after-hline">
    	//                 <div class="contact-details">
    	//                     <div class="contact-number">
    	//                         <img src={Number}></img>
    	//                         <span id="number">+918839848727</span>
    	//                     </div>
    	//                     <div class="contact-mail">
    	//                         <img src={Email}></img>
    	//                         <span id="mail">medeasy45@gmail.com</span>
    	//                     </div>
    	//                 </div>
    	//                 <div className="social-links ">
    	//                 {create_Icon(bxlTwitter)}
    	//                 {create_Icon(bxlFacebook)}
    	//                 {create_Icon(bxlInstagram)}
    	//                 {create_Icon(bxlLinkedin)}
    	//                 </div>
    	//             </div>
    	//     </div>
    	// </div>
    // );
}
export default Footer