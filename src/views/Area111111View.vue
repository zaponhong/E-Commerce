<template>
    <div class="link">
        <RouterLink :to="{name:'Home'}" ><h5> Home  > </h5></RouterLink>
        <RouterLink :to="{name:'Shop'}" ><h5> Shop  > </h5></RouterLink>
        <RouterLink :to="{name:'Area'}" ><h5> Area  > </h5></RouterLink>
        <RouterLink :to="{name:'Area1'}" ><h5> Vintage Top  > </h5></RouterLink>
        <RouterLink :to="{name:'Area11'}" ><h5> Cart > </h5></RouterLink>
        <RouterLink :to="{name:'Area111'}" ><h5> Customer Information > </h5></RouterLink>
        <RouterLink :to="{name:'Area1111'}" ><h5> Shipping > </h5></RouterLink>
        <RouterLink :to="{name:'Area11111'}" ><h5> Checkout > </h5></RouterLink>
        <RouterLink :to="{name:'Area111111'}" ><h5> Order > </h5></RouterLink>
    </div>
    <div class="row">
      <div class="col-50">
        <div class="containercinforr">
          <div class="row">
            <div class="col-75">
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
            style=" height: 100px; color: black;  padding-top: 1%; ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>Your order is confirmed.</p>
            <p>Order 123456789</p>
            <p>Thank you, Hong Zapon</p>
            <label for="city"><i class="fa fa-institution"></i> Address</label>
            <p>Phnom Penh Thmey, Sensok, Phnom penh</p>
            <label for="city"><i class="fa fa-shipping-fast"></i> Shipping Method</label>
            <p>UPS 1 Day Air</p>
          </div>
          </div>
          <RouterLink :to="{name:'Area1111111'}" ><button type="button" class="button cart_button_checkout">Done</button></RouterLink>
        </div>
      </div>

      <div class="col-25">
        <div class="containercinforrr">
          <h4>Order
            <span class="price" style="color:black">
              <i class="fa fa-shopping-cart"></i>
              <b>1</b>
            </span>
          </h4>
        <p>Vintage Top <span class="price">700$</span></p>
        <p>Shipping  <span class="price">7$</span></p>
        <p>Shipping  <span class="price">70.7</span></p>
        <hr>
        <p>Total <span class="price" style="color:black"><b>780.4$</b></span></p>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
 .link {
  width: 100%;
  margin-top: 10px;
  display: flex;
 }
 input[type=radio] {
  display: inline-blockk;
 }
 .row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
  margin-top: 30px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}
.containercinforrr {
  background-color: white;
  border: 1px solid lightgrey;
  padding: 5px 20px 15px 20px;
  border-radius: 3px;
  margin-top: 20pt;
}
.containercinforr {
  background-color: white;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  color: black;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
/* @media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
} */
 
</style>