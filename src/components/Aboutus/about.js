import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    selectUserData,
    LOGOUT
} from '../../reduxSlices/authSlice';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.PNG';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import './about.css';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import MedicineStore from '../../assets/images/medicine-store.png';
import ClickAndCollect from '../../assets/images/ClickAndCollect.png';
import ScanOrder from '../../assets/images/ScanOrder.png';
import JatinImage from '../../assets/images/jatin_image_files/64748517_174385556912285_695364649589017995_n.jpg';
import RolitImage from '../../assets/images/rolit-image.jpg';
import IvanImage from '../../assets/images/ivan_image.jpeg';
import Discount from '../../assets/images/Discount.png';
import { Link as Link1 } from "react-scroll";
import {Element} from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import Button from '@material-ui/core/Button';
class About extends React.Component{
    constructor(){
        super()
        //state is a reserve keyword
        this.state={
            //message is a reserve keyword
            ivan:
                { heading:"Health precaution is now a top priority.",
                   reviews:"We wanted to design a convenient way, to not only connect nearby store owners with the customer,",
                   reviews_hidden:"but also to connect customers with the people who are having unused rare medicines at home.",
                   blog:"https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592",
                   linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",
                   writtenBy:"Ivan Ganatra",
                },
            jatin:
                { heading:"Saving time and taking preventions are on the same path.",
                   reviews:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to wait for medicines to arrive at your place.",
                   reviews_hidden:"When medicines required at cruitial moments, MedEasy pinpoints you the exact nearby store, preventing your risk of customer roaming around in search for medicines in this pandemic situation.",
                   blog:"https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592",
                   linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",
                   writtenBy:"Jatin Bajaj",
                },
            rolit:
                { heading:"At present, saving time of customers,is not an option, its a necassity.",
                   reviews:"The major concern of every bussiness was to save the precious time of their customers.",
                   reviews_hidden:"Clicking an application and posting the prescription, hardly take 3-5 minutes.You can even contact to the medicine stores and ask them to confirm your order.MedEasy makes the process quick, reliable and efficient.",
                   blog:"https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592",
                   linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",
                   writtenBy:"Rolit Trivedi",
                },
            heading:"Health precaution is now a top priority.",
            writtenBy:"Ivan Ganatra",
            reviews:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money.",
            reviews_hidden:"You can even contact to the medicine stores and ask them to confirm your order.MedEasy makes the process quick, reliable and efficient",
            count:0,
            blog:"https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592",
            linkedin:"https://www.linkedin.com/in/jatin-bajaj-0053661a4/",

        }
    }
    changemessage(change){
        this.setState((prevState)=>{
            let name=[this.state.ivan,this.state.jatin,this.state.rolit];
            let content=name[this.state.count];
            let review=[this.state.Ivan,this.state.Jatin,this.state.Rolit]
            let review_hidden=[this.state.Ivan_hidden,this.state.Jatin_hidden,this.state.Rolit_hidden]
            let title=[this.state.heading1,this.state.heading2,this.state.heading3]
            // let name=["Ivan Ganatra","Jatin Bajaj","Rolit Trivedi"];
            let blog=["https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592","https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592","https://www.blogger.com/blog/post/edit/preview/1940794270597791638/3630573492414862592"];
            let linkedin=[this.state.linkedin_ivan,this.state.linkedin_rolit,this.state.linkedin_jatin];
            // const store=this.name[1]
            console.log("1  "+this.state.count+" "+prevState.count+" "+change);
            let x;
            if(change==-1 && this.state.count==0)
                x=2;
            else
                x=(prevState.count+change)%3;
            return{
                count:x,
                writtenBy:content.writtenBy,
                reviews:content.reviews,
                heading:content.heading,
                reviews_hidden:content.reviews_hidden,
                blog:content.blog,
                linkedin:content.linkedin,
            }
        }
        )
    }
    render(){
        // return <h1>This is the class,component.</h1>;
        return (
            <div class="about">
            <section class="visionbox_cards">
                <div class="vision_box">
                <div class="vision_content">
                    <h2>Vision and Mission</h2>
                    <p>
                    Control your medical needs like never before.<br></br>
                    We link your orders with potential sellers to make your work easy.
                    <br></br>
                    <br></br>
                    <Button class="Green_Button">
                        <Link2 to="About Us">Know Us
                        </Link2>
                        </Button>
                    </p>
                </div>
                </div>
                <Element id="About Us" name="About Us">
                <div class="grid_layout">
                        <div class="feature_card">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                    <img id="Easy-Connect-img" src={MedicineStore} alt="img" />
                                    </div>
                                    <div class="flip-card-back">
                                    <p>Technology connects us to the whole world, we connect you to the medicine store nearby you.</p>
                                    </div>
                                </div>
                            </div>
                                 <h3>Easy connect</h3>
                        </div>
                        <div class="feature_card">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                    <img src={ClickAndCollect} alt="img" />
                                    </div>
                                    <div class="flip-card-back">
                                    <p>Stop worrying for the shipping charges, book your medicine and collect from the closest store as per your convenience.</p>
                                    </div>
                                </div>
                            </div>
                            <h3>Click and Collect</h3>
                        </div>
                        <div class="feature_card">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                    <img src={Discount} alt="img"/>
                                    </div>
                                    <div class="flip-card-back">
                                    <p>Get upto 40% discounts on your first buy, and 20% off on next three orders. </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Buy more  less</h3>
                        </div>
                        <div class="feature_card">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                    <img src={ScanOrder} alt="img"/>
                                    </div>
                                    <div class="flip-card-back">
                                    <p>Just upload the clear picture of the doctor's prescription and sumbit your order.</p>
                                    </div>
                                </div>
                            </div>
                            <h3>Scan your Order</h3>
                        </div>

                    </div>
                 </Element>
            </section>
            <section class="name_cards">
                <h2>Know our thoughts</h2>
                <div class="section_layout">
                        <div className="Buttons">
                            <button onClick={()=>this.changemessage(1)}><h1>&lt; </h1></button>
                        </div>
                        <div class="my_content">
                            <h4>{this.state.heading}</h4>
                            <p>
                                <div class="review">
                                    {this.state.reviews}
                                    <div class="dots">
                                        ...
                                    </div>
                                    <div class="review_hidden">
                                        {this.state.reviews_hidden}
                                    </div>
                                    <div class="blog">
                                </div>
                                <a class="my_name blog" href={this.state.blog} target="_blank">more.</a>
                                </div>

                            </p>
                            <a class="my_name " href={this.state.linkedin} target="_blank"><strong>{this.state.writtenBy}</strong></a>
                        </div>
                        <div class="my_image">
                            <img  src={JatinImage} alt="img"/>
                        </div>
                        <div className="Buttons">
                            <button onClick={()=>this.changemessage(1)}><h1>&gt; </h1></button>
                        </div>
                </div>
            </section>
        </div>
        )
    }
}
export default About;