<template>
  <div class="link">
    <RouterLink :to="{name:'Home'}" ><h5> Home ->  </h5></RouterLink>
    <RouterLink :to="{name:'Shop'}" ><h5> Shop -> </h5></RouterLink>
    <RouterLink :to="{name:'Celine'}" ><h5> Celine -> </h5></RouterLink>
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
        <img src="../assets/image/celine1.jpg">
        <h4 class="pic-name">Square Triomphe</h4>
      
		    <div class="pic-price">
			    <div>Price: $2500$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine2.jpg">
        <h4 class="pic-name">Black Royal</h4>
      
		    <div class="pic-price">
			    <div>Price: $2750$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine3.jpg">
        <h4 class="pic-name">Celine Necklace</h4>
      
		    <div class="pic-price">
			    <div>Price: $750$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine4.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine5.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
     
  
    </div>
    <div class="celine">
      <div>
        <img src="../assets/image/celine6.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine7.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine8.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine9.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine10.jpg">
        <h4 class="pic-name">Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
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