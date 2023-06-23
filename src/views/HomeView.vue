

<template>
    <div class="container">
      <img src="../assets/image/cover.jpg">
      <div class="name">
        Wellcome to, EISY Shopping Center...
      </div>
      <div class="name">
        <div class="name">
          Search our latest products available right now and get your delivery today.
        </div>
      </div>
      <!-- <div class="middle box">
       <div>HELLO</div>
       <div>HELLO</div>
       <div>HELLO</div>
       <div>HELLO</div>
      </div> -->
      <!-- --- -->
    </div>
  <div class="des">
      <div style="margin-top: 10px;">
       <form action="#">
          <img src="../assets/image/delivery.png">
          <input type="submit" value="Delivery" style="margin-top: 70px;">
        </form>
      </div>
      <div class="header-right">
        <!-- <input type="button" value="Shop Products Now" style="margin-top: 70px;"> -->
        <!-- <input type="search" id="Shop Now"> -->
        <form action="#">
          <RouterLink :to="{name:'Shop'}" >Shop Now</RouterLink> 
        </form> 
      </div>
      
      <div style="margin-top: 10px;">
        <form action="#">
          <img src="../assets/image/sales.png">
          <input type="submit" value="Hot Sale" style="margin-top: 70px;">
        </form>
      </div>
  </div>
  <!-- ///// -->
  
  
  


</template>
<script setup>
import {RouterLink} from 'vue-router'
</script>
<!-- <script>
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');
.container .name {
  width: 100%;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin-top: 1%;
  font-family: 'Noto Sans', sans-serif;
}
.container .middle{
  line-height: 32px;
  padding-left: 80px;
  text-align: center;
}
.container img{
  height: 100%;
  width: 116%;
  padding-top: 3%;
  margin-left: -10%;
  /* margin-right: 10%; */
}
/* --- */
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  
  
  .des {
    display: flex;
    margin-left: -15px;
    width: 80%;
    height: 130px;
    justify-content: space-around;
    /* justify-content: center; */
    margin-top: 10px;
  }
  .des p{
    width: 80%;
    height: 140px;
  }
  .des img{
    width: 130px;
    height: 120px;
    /* background-color: #FFCAF2; */
  }
  svg{
    color:black;
    
  }
  
  .des input[type=submit], input[type=reset] {
    background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
    background-color: white;
    border-color: black;
    color: black;
    font-size: 10px;
    padding: 10px 20px;
    margin: 4px 2px;
    cursor: pointer;
    float: right;
    font-family: Sofia; 
  }
  
  input[type="button"]{
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
  color: rgb(140, 82, 255);
  background-color: white;
  border-color: black;
  font-family: none;
}
/* /////////////////////////////////////////////////////////////// */

</style>

