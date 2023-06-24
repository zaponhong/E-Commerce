<template>
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
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel2.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel3.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel4.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel5.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
     
  
    </div>
    <div class="celine">
      <div>
        <img src="../assets/image/chanel6.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel7.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel8.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel9.jpg">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/chanel10.jpg">
        <h2 class="pic-name">Celine</h2>
      
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