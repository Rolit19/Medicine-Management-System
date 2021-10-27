import React, { useState } from "react";
// import "./about.css";
import MedicineStore from "../../assets/images/medicine-store.png";
import ClickAndCollect from "../../assets/images/ClickAndCollect.png";
import ScanOrder from "../../assets/images/ScanOrder.png";
import JatinImage from "../../assets/images/jatin_image_files/64748517_174385556912285_695364649589017995_n.jpg";
import RolitImage from "../../assets/images/rolit-image.jpg";
import IvanImage from "../../assets/images/ivan_image.jpeg";
import RishabImage from "../../assets/images/Rishab.jpeg";
import Discount from "../../assets/images/Discount.png";
import { Link as Link2 } from "react-scroll";
import Button from "@material-ui/core/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const About = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row mb-5" style={{ paddingTop: "230px" }}>
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
              Vision and Mission
            </h2>
          </div>
          <br />
          <div className="col-12 text-center">
            <p style={{ fontSize: "22px" }}>
              Control your medical needs like never before. <br></br>
              We link your orders with potential sellers to make your work easy.
              <br></br>
              <br></br>
              <Button class="MuiButtonBase-root MuiButton-root MuiButton-contained Green_Button MuiButton-containedPrimary">
                <Link2
                  to="features"
                  activeClass="active" spy={true} smooth={true} offset={-70} duration={100}
                  className="font-weight-bold"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  More
                </Link2>
              </Button>
            </p>
          </div>
        </div>
        <br />
        <div className="row mt-5 pt-5" name="features">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>Features</h2>
            <br />
          </div>
          {/* Cards */}
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={MedicineStore}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Connect Easily</h4>
                <p className="card-text text-justify">
                  Technology connects us to the whole world, we connect you to
                  the medicine store nearby you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={ClickAndCollect}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Click and Collect</h4>
                <p className="card-text text-justify">
                  Collect your medicine from the store as per your convenience
                  and forget shipping charges.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={Discount}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Buy more for less</h4>
                <p className="card-text text-justify">
                  Get upto 40% discounts on your first buy, and 20% off on next
                  three orders.{" "}
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-md-4 py-3 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={ScanOrder}
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Scan your Order</h4>
                <p className="card-text text-justify">
                  Just upload the clear picture of the doctor's prescription and
                  sumbit your order.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row mt-5 pt-5 text-center">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "40px", fontWeight: "500" }}>Our Thoughts</h2>
            <br />
          </div>
          <div className="col-12" >
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={JatinImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Jatin Bajaj</h4>
                    <p className="card-text text-justify">
                      Saving time of customers,is not an option, its a necassity
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={RishabImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Rishab Goyal</h4>
                    <p className="card-text text-justify">
                      Wasting a medicine is a crime, and sharing is a blessing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={IvanImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Ivan Ganatra</h4>
                    <p className="card-text text-justify">
                      Saving time and taking preventions are on the same path.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={RolitImage}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Rolit Trivedi</h4>
                    <p className="card-text text-justify">
                      Health precautions are now a top priority.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import {
//     selectUserData,
//     LOGOUT
// } from '../../reduxSlices/authSlice';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/Logo.PNG';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
// import IconButton from '@material-ui/core/IconButton';
// import './about.css';
// import Sidedrawer from '../Sidedrawer/Sidedrawer';
// import MedicineStore from '../../assets/images/medicine-store.png';
// import ClickAndCollect from '../../assets/images/ClickAndCollect.png';
// import ScanOrder from '../../assets/images/ScanOrder.png';
// import JatinImage from '../../assets/images/jatin_image_files/64748517_174385556912285_695364649589017995_n.jpg';
// import RolitImage from '../../assets/images/rolit-image.jpg';
// import IvanImage from '../../assets/images/ivan_image.jpeg';
// import RishabImage from '../../assets/images/Rishab.jpeg';
// import Discount from '../../assets/images/Discount.png';
// import { Link as Link1 } from "react-scroll";
// import {Element} from "react-scroll";
// import { Link as Link2 } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// class About extends React.Component{
//     constructor(){
//         super()
//         //state is a reserve keyword
//         this.state={
//             //message is a reserve keyword
//             ivan:
//                 { heading:"Saving time and taking preventions are on the same path.",
//                    reviews:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to wait for medicines to arrive at your place.",
//                    reviews_hidden:"When medicines required at cruitial moments, MedEasy pinpoints you the exact nearby store, preventing your risk of customer roaming around in search for medicines in this pandemic situation.",
//                    blog:"https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592",
//                    linkedin:"https://www.linkedin.com/in/ivan-ganatra/",
//                    writtenBy:"Ivan Ganatra",
//                    my_image:IvanImage,
//                 },
//             jatin:
//                 {  heading:"At present, saving time of customers,is not an option, its a necassity.",
//                    reviews:"The major concern of every bussiness was to save the precious time of their customers.",
//                    reviews_hidden:"Clicking an application and posting the prescription, hardly take 3-5 minutes.You can even contact to the medicine stores and ask them to confirm your order.MedEasy makes the process quick, reliable and efficient.",
//                    blog:"https://medeasyjatin.blogspot.com/2021/07/saving-time-and-taking-preventions-are.html",
//                    linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",
//                    writtenBy:"Jatin Bajaj",
//                    my_image:JatinImage,
//                 },
//             rolit:
//                 {
//                    heading:"Health precaution is now a top priority.",
//                    reviews:"We wanted to design a convenient way, to not only connect nearby store owners with the customer,",
//                    reviews_hidden:"but also to connect customers with the people who are having unused rare medicines at home.",
//                    blog:"https://medeasyjatin.blogspot.com/2021/07/health-precaution-is-top-priority.html",
//                    linkedin:"https://www.linkedin.com/in/rolit-trivedi-8b3700194/",
//                    writtenBy:"Rolit Trivedi",
//                    my_image:RolitImage,
//                 },
//             rishab:
//                 {
//                    heading:"Wasting a medicine is a crime, and sharing is a blessing.",
//                    reviews:"We wanted a application which was open for all those, who wish to donate the medicines.",
//                    reviews_hidden:"There are lots of kind people left in this world, and even if people wanna charge for their medicines, it will never be an issue. Getting medicines at right place and right time is the only thing that matters at the end.",
//                    blog:"https://medeasyjatin.blogspot.com/2021/07/we-wanted-application-which-was-open.html",
//                    linkedin:"https://www.linkedin.com/in/rolit-trivedi-8b3700194/",
//                    writtenBy:"Rishab Goyal",
//                    my_image:RishabImage,
//                 },
//             heading:"At present, saving time of customers,is not an option, its a necassity.",
//             writtenBy:"Jatin Bajaj",
//             reviews:"The major concern of every bussiness was to save the precious time of their customers.",
//             reviews_hidden:"Clicking an application and posting the prescription, hardly take 3-5 minutes.You can even contact to the medicine stores and ask them to confirm your order.MedEasy makes the process quick, reliable and efficient.",
//             count:1,
//             linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",
//             writtenBy:"Jatin Bajaj",
//             my_image:JatinImage,
//         }
//     }
//     changemessage(change){
//         this.setState((prevState)=>{
//             let name=[this.state.jatin, this.state.ivan,this.state.rolit,this.state.rishab];
//             let content=name[this.state.count];
//             // let name=["Ivan Ganatra","Jatin Bajaj","Rolit Trivedi"];
//             let blog=["https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592","https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592","https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592"];
//             let linkedin=[this.state.linkedin_ivan,this.state.linkedin_rolit,this.state.linkedin_jatin];
//             // const store=this.name[1]
//             console.log("1  "+this.state.count+" "+prevState.count+" "+change);
//             let x;
//             if(change==-1 && this.state.count==0)
//                 x=3;
//             else
//                 x=(prevState.count+change)%4;
//             return{
//                 count:x,
//                 writtenBy:content.writtenBy,
//                 reviews:content.reviews,
//                 heading:content.heading,
//                 reviews_hidden:content.reviews_hidden,
//                 blog:content.blog,
//                 linkedin:content.linkedin,
//                 my_image:content.my_image,
//             }
//         }
//         )
//     }
//     render(){
//         // return <h1>This is the class,component.</h1>;
//         return (
//             <div class="about">
//             <section class="visionbox_cards">
//                 <div class="vision_box">
//                 <div class="vision_content">
//                     <h2>Vision and Mission</h2>
//                     <p>
//                     Control your medical needs like never before.<br></br>
//                     We link your orders with potential sellers to make your work easy.
//                     <br></br>
//                     <br></br>
//                     <Button class="Green_Button">
//                         <Link2 to="About Us">Know Us
//                         </Link2>
//                         </Button>
//                     </p>
//                 </div>
//                 </div>
//                 <Element id="About Us" name="About Us">
//                 <div class="grid_layout">
//                         <div class="feature_card">
//                             <div class="flip-card">
//                                 <div class="flip-card-inner">
//                                     <div class="flip-card-front">
//                                     <img id="Easy-Connect-img" src={MedicineStore} alt="img" />
//                                     </div>
//                                     <div class="flip-card-back">
//                                     <p>Technology connects us to the whole world, we connect you to the medicine store nearby you.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                                  <h3>Easy connect</h3>
//                         </div>
//                         <div class="feature_card">
//                             <div class="flip-card">
//                                 <div class="flip-card-inner">
//                                     <div class="flip-card-front">
//                                     <img src={ClickAndCollect} alt="img" />
//                                     </div>
//                                     <div class="flip-card-back">
//                                     <p>Stop worrying for the shipping charges, book your medicine and collect from the closest store as per your convenience.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <h3>Click and Collect</h3>
//                         </div>
//                         <div class="feature_card">
//                             <div class="flip-card">
//                                 <div class="flip-card-inner">
//                                     <div class="flip-card-front">
//                                     <img src={Discount} alt="img"/>
//                                     </div>
//                                     <div class="flip-card-back">
//                                     <p>Get upto 40% discounts on your first buy, and 20% off on next three orders. </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <h3>Buy more  less</h3>
//                         </div>
//                         <div class="feature_card">
//                             <div class="flip-card">
//                                 <div class="flip-card-inner">
//                                     <div class="flip-card-front">
//                                     <img src={ScanOrder} alt="img"/>
//                                     </div>
//                                     <div class="flip-card-back">
//                                     <p>Just upload the clear picture of the doctor's prescription and sumbit your order.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <h3>Scan your Order</h3>
//                         </div>

//                     </div>
//                  </Element>
//             </section>
//             <section class="name_cards">
//                 <h2>Know our thoughts</h2>
//                 <div class="section_layout">
//                         <div className="Buttons">
//                             <button onClick={()=>this.changemessage(1)}><h1>&lt; </h1></button>
//                         </div>
//                         <div class="my_content">
//                             <a  href={this.state.blog} target="_blank"><h4> {this.state.heading}</h4></a>
//                             <p>
//                                 <div class="review">
//                                     {this.state.reviews}
//                                     <div class="dots">
//                                         ...
//                                     </div>
//                                     <div class="review_hidden">
//                                         {this.state.reviews_hidden}
//                                     </div>
//                                     <div class="blog">
//                                 </div>
//                                 <a class="my_name blog" href={this.state.blog} target="_blank">more.</a>
//                                 </div>

//                             </p>
//                             <a class="my_name " href={this.state.linkedin} target="_blank"><strong>{this.state.writtenBy}</strong></a>
//                         </div>
//                         <div class="my_image">
//                             <img  src={this.state.my_image} alt="img"/>
//                         </div>
//                         <div className="Buttons">
//                             <button onClick={()=>this.changemessage(1)}><h1>&gt; </h1></button>
//                         </div>
//                 </div>
//             </section>
//         </div>
//         )
//     }
// }
// export default About;
