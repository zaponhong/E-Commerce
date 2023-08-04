<template>
    <div class="link">
        <RouterLink :to="{name:'Home'}" ><h5> Home  > </h5></RouterLink>
        <RouterLink :to="{name:'Shop'}" ><h5> Shop  > </h5></RouterLink>
        <RouterLink :to="{name:'Area'}" ><h5> Area  > </h5></RouterLink>
        <RouterLink :to="{name:'Area1'}" ><h5> Vintage Top  > </h5></RouterLink>
        <RouterLink :to="{name:'Area11'}" ><h5> Cart > </h5></RouterLink>
        <RouterLink :to="{name:'Area111'}" ><h5> Customer Information > </h5></RouterLink>
        <RouterLink :to="{name:'Area1111'}" ><h5> Shipping > </h5></RouterLink>
    </div>
    <div class="row">
      <div class="col-50">
        <div class="containercinfor">
          <div class="row">
            <h3>Address Information</h3>
            <label for="city"><i class="fa fa-institution"></i> Address</label>
            <p>Phnom Penh Thmey, Sensok</p>
            <p>Phnom penh</p>  
          </div>
          <RouterLink :to="{name:'Area111'}" >EDIT</RouterLink>
          <legend>Select a Shipping Method:</legend>
          <div class="d-flex" >
            <input type="radio" id="huey" name="drone" value="huey"  /> 
            <label class="mt-2 mx-2" for="huey">UPS 3 Days Ground = 2$</label>
          </div>
          <div class="d-flex">
            <input type="radio" id="huey" name="drone" value="huey"  /> 
            <label class="mt-2 mx-2" for="huey">UPS 2 Days Select = 4$</label>
          </div>
          <div class="d-flex">
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label class="mt-2 mx-2" for="dewey">UPS 1 Day Air = 7$</label>
          </div>
          <RouterLink :to="{name:'Area11111'}" ><input type="submitt" value="Continue to checkout" class="btn"></RouterLink>
        </div>
      </div>

      <div class="col-50">
        <div class="containercinfor">
          <h4>Cart
            <span class="price" style="color:black">
              <i class="fa fa-shopping-cart"></i>
              <b>1</b>
            </span>
          </h4>
          <p>Vintage Top <span class="price">700$</span></p>
          <p>Vat <span class="price">70$</span></p>
        <hr>
        <p>Total <span class="price" style="color:black"><b>700$</b></span></p>
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

.containercinfor {
  background-color: lavender;
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