import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import db from '../../firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import OrderImg from "../../assets/images/Orders/list11.jpeg";
import "./viewOrders.css";

const getDate = (sec) => {
  const newDate = new Date(sec * 1000);
  let day = newDate.getDate().toString();
  if (day.length === 1) day = "0" + day;
  let month = (newDate.getMonth() + 1).toString();
  if (month.length === 1) month = "0" + month;
  let year = newDate.getFullYear();
  return day + "-" + month + "-" + year;
}

const getTime = (sec) => {
  const newDate = new Date(sec * 1000);
  let hours = newDate.getHours().toString();
  if (hours.length === 1) hours = "0" + hours;
  let minutes = newDate.getMinutes().toString();
  if (minutes.length === 1) minutes = "0" + minutes;
  let seconds = newDate.getSeconds().toString();
  if (seconds.length === 1) seconds = "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
}

const ViewOrders = (props) => {
  const orderId = props.match.params.orderId;
  const [loading, setLoading] = useState(true);
  const [orderDetail, setOrderDetails] = useState({});
  const [shopDetail, setShopDetails] = useState({});

  const getOrderDetails = () => {
    window.scrollTo(0, 0); 
    setLoading(true);
    let Order;
    db.collection('orders').doc(orderId).get().then(doc => {
      if (doc.exists) {
        Order = doc.data();
        console.log(Order);
        let createrId = Order.created_by;
        return db.collection('profiles').doc(createrId).get().then(doc2 => {
          setOrderDetails({
            ...doc2.data(),
            ...Order
          });
          console.log(doc2.data());
        })
      }
    })
    .then(result => {
      if ((Order.status === "confirmed" || Order.status === "collected" || Order.status === "cancelled") && Order.accepted_by) {
        return db.collection('profiles').doc(Order.accepted_by).get().then(doc2 => {
          setShopDetails(doc2.data());
          setLoading(false);
        })  
      } else {
        setLoading(false);
      }
      
    })
  }

  useEffect(() => {
    getOrderDetails();
  }, [])

  let statusClass = "";
  if (orderDetail.status === "collected") {
    statusClass = "text-success";
  } else if (orderDetail.status === "confirmed") {
    statusClass = "text-primary";
  } else if (orderDetail.status === "pending") {
    statusClass = "text-warning";
  } else if (orderDetail.status === "cancelled") {
    statusClass = "text-danger";
  }

  const orderCollectedHandler = () => {
    db.collection('orders').doc(orderId).update({
      status: 'collected'
    }).then(result => {
      getOrderDetails();
    })
  }

  const orderCancelHandler = () => {
    db.collection('orders').doc(orderId).update({
      status: 'cancelled'
    }).then(result => {
      getOrderDetails();
    })
  }

  const postAgainOrderHandler = () => {
    db.collection('orders').doc(orderId).update({
      status: "pending",
      accepted_by: null
    })
    getOrderDetails();
  }

  const OrderOptions = () => {
    if (props.category === "customer") {
      if (orderDetail.status === "confirmed") {
        return (
          <div className="d-flex justify-content-center align-items-center py-3">
            <span>
              <button onClick={orderCollectedHandler} type="button" class="btn btn-lg btn-primary mx-3">Confirm Pickup</button>
            </span>
            <span>
              <button onClick={orderCancelHandler} type="button" class="btn btn-lg btn-danger mx-3">Cancel Order</button>
            </span>
            <span>
              <button onClick={postAgainOrderHandler} type="button" class="btn btn-lg btn-warning mx-3">Cancel &amp; Re-Post Order</button>
            </span>
          </div>
        );
      }
      else if (orderDetail.status === "cancelled") {
        return (
          <div className="d-flex justify-content-center align-items-center py-3">
            <span>
              <button onClick={postAgainOrderHandler} type="button" class="btn btn-lg btn-primary mx-3">Repost Order</button>
            </span>
          </div>
        );
      }
      else if (orderDetail.status === "pending") {
        return (
          <div className="d-flex justify-content-center align-items-center py-3">
            <span>
              <button onClick={orderCancelHandler} type="button" class="btn btn-lg btn-danger mx-3">Cancel Order</button>
            </span>
          </div>
        );
      }
      else {
        return (
          <div></div>
        );
      }
    }
    else if (props.category === "owner") {
      if (orderDetail.status === "confirmed") {
        return (
          <div className="d-flex justify-content-center align-items-center py-3 order-number">
            Keep the order ready to be collected !!
          </div>
        );
      }
      else if (orderDetail.status === "cancelled") {
        return (
          <div className="d-flex justify-content-center align-items-center py-3 order-number">
            Sorry the order was cancelled :(
          </div>
        );
      }
    }
  }

  if (loading) {
    return (
      <div className="text-center" style={{marginTop: "120px", minHeight: '100vh'}}>
        <CircularProgress size={70} />
      </div>
    )
  }
  return (
    <div className="main-container" style={{ paddingTop: "95px" }}>
      <div className="container">
        <div className="row p-3">
          <div className="col-12">
            <h1 className="main-heading">Order Details</h1>
          </div>
        </div>
        <div className="order-container py-4">
          <div className="row p-3 mx-2">
            <div className="col-12 col-md-7 order-number px-0 px-md-4">
              <span className="fw-bold">Order Number : </span>{orderId}
            </div>
            <div className="col-12 col-md-5 timeStamp text-md-end order-first order-md-last px-0 px-md-4">
              Posted at <span>{getTime(orderDetail.created_at.seconds)}</span> on <span>{getDate(orderDetail.created_at.seconds)} </span>
            </div>
          </div>
          <div className="row p-3 mx-2">
            <div className="col-12 col-md-6 field-text px-0 px-md-4">
              <div><span className="fw-bold">Name : </span>{orderDetail.name}</div>
              <div><span className="fw-bold">Contact No. : </span>{orderDetail.phone}</div>
              <div><span className="fw-bold">Address : </span>{orderDetail.address}</div>
              <div><span className="fw-bold">City : </span>{orderDetail.city}</div>
              <div><span className="fw-bold">State : </span>{orderDetail.state}</div>
            </div>
            <div className="col-12 col-md-6 field-text px-0 px-md-4">
              <div className="order-number fw-bold">
                Description
              </div>
              <p>{orderDetail.description}</p>
            </div>
            
          </div>
          {
            (orderDetail.status === "confirmed" || orderDetail.status === "cancelled" || orderDetail.status === "collected") && shopDetail.shop_name ? (
              <div className="row p-3 mx-2 pt-0">
                <div className="col-12 px-0 px-md-4">
                  <hr />
                </div>
                <div className="col-12 field-text px-0 px-md-4">
                  <div className="order-number fw-bold pb-3">
                    Accepted By : <span className="fw-normal">{shopDetail.name}</span>
                  </div>
                  <div><span className="fw-bold">Shop Name : </span>{shopDetail.shop_name}</div>
                  <div><span className="fw-bold">Contact No. : </span>{shopDetail.shop_phone}</div>
                  <div><span className="fw-bold">Address : </span>{shopDetail.shop_address}</div>
                  <div><span className="fw-bold">City : </span>{shopDetail.city}</div>
                  <div><span className="fw-bold">State : </span>{shopDetail.state}</div>
                </div>
              </div>
            ) : (
                <div className=""></div>
            )
          }
          
          <div className="row p-3 mx-2">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center px-0 px-md-4">
              <div className="order-number fw-bold pb-4">
                Prescription Preview
              </div>
              <a href={orderDetail.img_url} className="preview-container" download="Prescription.jpg">
                <img src={orderDetail.img_url} alt="Prescription Preview" width="100%" />
              </a>
            </div>
          </div>
          <div className="row p-3 mx-2">
            <div className="col-12 px-0 px-md-4 d-flex flex-column justify-content-center align-items-center">
              <div><span className="order-number fw-bold pb-4">Order Status : </span>
                <span className={statusClass + " text-capitalize order-number fw-bold"}>{orderDetail.status}</span>
              </div>
            </div>
            <div className="col-12 px-0 px-md-4 order-options">
              <OrderOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    category: state.auth.category
  }
}

export default connect(mapStateToProps)(withRouter(ViewOrders));