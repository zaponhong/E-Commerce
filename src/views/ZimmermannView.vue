<template>
  <div class="link">
    <RouterLink :to="{name:'Home'}" ><h5> Home ->  </h5></RouterLink>
    <RouterLink :to="{name:'Shop'}" ><h5> Shop -> </h5></RouterLink>
    <RouterLink :to="{name:'Zimmermann'}" ><h5> Zimmermann -> </h5></RouterLink>
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
          <img src="../assets/image/zim1.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim2.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim3.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim4.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim5.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
       
    
      </div>
      <div class="celine">
        <div>
          <img src="../assets/image/zim6.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim7.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim8.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim9.jpg">
          <h2 class="pic-name">Celine</h2>
        
              <div class="pic-price">
                  <div>Price: $10.00$</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim10.jpg">
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