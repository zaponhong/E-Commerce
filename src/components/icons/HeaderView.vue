<template>
  <div class="title">
    <div class="logo">
      <RouterLink :to="{name:'Home'}" ><img src="../../assets/image/_shoplogopng.png"></RouterLink>
      
    </div>
    <div class="sub_title">
      <div class="name">
      EISY SHOPPING CENTER
    </div>
    <div class="acc">
      <form action="#">
            <a href="cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-6" style=" height: 45px; color: black; float: right; padding-top: 1%; ">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </a>
            <input type="submit" value="Account">
      </form>
    </div>
    </div>
  </div>
  <!-- ----- -->
<!-- <div class="des">
    <div style="margin-top: 10px;">
      <form action="#">
        <img src="../../assets/image/delivery.png">
        <input type="submit" value="Delivery" style="margin-top: 70px;">
      </form>
    </div>
    <div style="margin-top: 10px;">
      <form action="#">
        <img src="../../assets/image/sales.png">
        <input type="submit" value="Hot Sale" style="margin-top: 70px;">
      </form>
    </div>  
  </div> -->
  <!-- ----- -->
    
  <!-- <div class="header">
    <form action="#">
      <RouterLink :to="{name:'Celine'}" >CELINE</RouterLink> 
      <RouterLink :to="{name:'Chanel'}" >CHANEL</RouterLink> 
      <RouterLink :to="{name:'Zimmermann'}" >ZIMMERMANN</RouterLink> 
      <RouterLink :to="{name:'Area'}" >AREA</RouterLink> 
      <RouterLink :to="{name:'Jimmychoo'}" >JIMMYCHOO</RouterLink> 
      <RouterLink :to="{name:'Mach&Mach'}" >MACH&MACH</RouterLink>
      <div class="header-right">
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search the products.">
      </div>
    </form> 
  </div> -->

  
  <!-- ------ -->
</template>


<script setup>
import {RouterLink} from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.sub_title {
  width: 100%;
  font-size: 40px;
  font-weight: 1000;
  text-align: center;
  justify-content: space-between;
  display: flex;
  margin-top: 1%;
  background: linear-gradient(to right, #FFCAF2, #FFB2B1, #FFB2B1, #C9B1FF, #FFF3AD, #BCFFBC, #A2EDFF, #FFB2B1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
.title img {
  width: 400px;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.acc {
  padding: 10px 20px;
  margin: 4px 2px;
  float: right;
  margin-top: 3%;

}
.name {
  margin-top: 3%;
  text-align: center;
}

input[type=submit]{
  -webkit-text-fill-color: black;
  /* all:unset; */
  background-color: gainsboro;
  border-color: black;
  color: black;
  font-size: 10px;
  padding: 10px 20px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
  font-family: Sofia;
  padding-top: 7px;
}
input[type="text"]{
  height: 45px;
  width: 100%;
  outline: none;
  color: #222;
  background: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
  color: rgb(140, 82, 255);
}

.header {
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  padding: 10px 10px;
}

.header a {
  float: left;
  margin-left: 85px;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 25px;
  line-height: 25px;
  border-radius: 4px;

}

.header a.logo {
  font-size: 25px;
  font-weight: bold;

}

.header a:hover {
  background-color: white;
  color: black;
  font-family: Siemreap;
}

.header a.active {
  background-color: white;
  color: rgb(0, 0, 0);
  font-family: Siemreap;
}

.header-right {
  float: right;

}
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
  img{
    width: 130px;
    height: 120px;
    /* background-color: #FFCAF2; */
  }
  svg{
    color:black;
    
  }
  
  .des input[type=button], input[type=submit], input[type=reset] {
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

</style>
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