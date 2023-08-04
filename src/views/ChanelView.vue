<template>
  <div class="link">
    <RouterLink :to="{name:'Home'}" ><h5> Home ->  </h5></RouterLink>
    <RouterLink :to="{name:'Shop'}" ><h5> Shop -> </h5></RouterLink>
    <RouterLink :to="{name:'Chanel'}" ><h5> Chanel -> </h5></RouterLink>
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
        <img src="../assets/image/chanel1.jpg">
        <h4 class="pic-name">Mintty pink</h4>
      
		    <div class="pic-price">
			    <div>Price: 2400</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel2.jpg">
        <h4 class="pic-name">Black Oval</h4>
      
		    <div class="pic-price">
			    <div>Price: 3000</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel3.jpg">
        <h4 class="pic-name">Golden Twin</h4>
      
		    <div class="pic-price">
			    <div>Price: 3700</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel4.jpg">
        <h4 class="pic-name">Classic CC</h4>
      
		    <div class="pic-price">
			    <div>Price: 3500</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel5.jpg">
        <h4 class="pic-name">Mini Box</h4>
      
		    <div class="pic-price">
			    <div>Price: 2100</div>
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