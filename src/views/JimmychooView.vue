<template>
  <div class="link">
    <RouterLink :to="{name:'Home'}" ><h5> Home ->  </h5></RouterLink>
    <RouterLink :to="{name:'Shop'}" ><h5> Shop -> </h5></RouterLink>
    <RouterLink :to="{name:'Jimmychoo'}" ><h5> Jimmychoo -> </h5></RouterLink>
  </div>
  <div class="header">
    <form action="#">
      <RouterLink :to="{name:'Celine'}" >CELINE</RouterLink> 
      <RouterLink :to="{name:'Chanel'}" >CHANEL</RouterLink> 
      <RouterLink :to="{name:'Zimmermann'}" >ZIMMERMANN</RouterLink> 
      <RouterLink :to="{name:'Area'}" >AREA</RouterLink> 
      <RouterLink :to="{name:'Jimmychoo'}" >JIMMYCHOO</RouterLink> 
      <RouterLink :to="{name:'Mach&Mach'}" >MACH&MACH</RouterLink>
      
    </form> 
  </div>
    <div class="celine">
      <div>
        <img src="../assets/image/jim1.jpg">
        <h4 class="pic-name">Bride Day</h4>
      
		    <div class="pic-price">
			    <div>Price: 2000</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim2.jpg">
        <h4 class="pic-name">Office Shoes</h4>
      
		    <div class="pic-price">
			    <div>Price: 1200</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim3.jpg">
        <h4 class="pic-name">Wedding BB</h4>
      
		    <div class="pic-price">
			    <div>Price: 1900</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim4.jpg">
        <h4 class="pic-name">Sky Blink</h4>
      
		    <div class="pic-price">
			    <div>Price: 1700</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim5.jpg">
        <h4 class="pic-name">Bow Back</h4>
      
		    <div class="pic-price">
			    <div>Price: 1990</div>
	      </div>
      </div>
    </div> 
  </template>
  <script setup>
  import {RouterLink} from 'vue-router'
  </script>
  <style>
  .link {
  width: 100%;
  margin-top: 10px;
  display: flex;
 }
  .celine{
    margin-top: 20px;
    width: 100%;
    display: flex;
    
  }
  .celine img {
    height: 200px;
    width: 300px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .pic-price {
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-left: 8%;
  }
  .pic-name{
    padding-left: 11%;
  }
  
  
  </style>