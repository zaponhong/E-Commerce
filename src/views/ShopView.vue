<template>
  <div class="link">
    <RouterLink :to="{name:'Home'}" ><h5> Home ->  </h5></RouterLink>
    <RouterLink :to="{name:'Shop'}" ><h5> Shop -> </h5></RouterLink>
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
    <div class="header-right">
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search the products.">
    </div>
    
   <!-- celine -->
   <div class="celine">
      <div>
        <img src="../assets/image/celine1.jpg">
        <h4 class="pic-name">Square Triomphe</h4>
      
		    <div class="pic-price">
			    <div>Price: 2500</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine2.jpg">
        <h4 class="pic-name">Black Royal</h4>
      
		    <div class="pic-price">
			    <div>Price: 2750</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine3.jpg">
        <h4 class="pic-name">Celine Necklace</h4>
      
		    <div class="pic-price">
			    <div>Price: 750</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine4.jpg">
        <h4 class="pic-name">Gray Bay</h4>
      
		    <div class="pic-price">
			    <div>Price: 2000</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/celine5.jpg">
        <h4 class="pic-name">Mini Celine</h4>
      
		    <div class="pic-price">
			    <div>Price: 1800</div>
	      </div>
      </div>
     </div>

     <!-- chanel -->
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

    <!-- zim -->
    <div class="celine">
        <div>
          <img src="../assets/image/zim1.jpg">
          <h4 class="pic-name">Orange lace</h4>
        
              <div class="pic-price">
                  <div>Price: 1660</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim2.jpg">
          <h4 class="pic-name">Pink V-Leg</h4>
        
              <div class="pic-price">
                  <div>Price: 1780</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim3.jpg">
          <h4 class="pic-name">Golden Night</h4>
        
              <div class="pic-price">
                  <div>Price: 2470</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim4.jpg">
          <h4 class="pic-name">Drib Dress</h4>
        
              <div class="pic-price">
                  <div>Price: 3000</div>
            </div>
        </div>
        <div>
          <img src="../assets/image/zim5.jpg">
          <h4 class="pic-name">Starry Night</h4>
        
              <div class="pic-price">
                  <div>Price: 2400</div>
            </div>
        </div>
      </div>



</template>
<script setup>
import {RouterLink} from 'vue-router'
</script>

<style scoped>
input[type="text"]{
  margin-top: 3%;
  height: 45px;
  width: 100%;
  outline: none;
  color: #222;
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
  color: rgb(140, 82, 255);
}
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