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
    
    <div class="celine">
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
     
  
    </div>
    <div class="celine">
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
        <h2 class="pic-name">Celine</h2>
      
		    <div class="pic-price">
			    <div>Price: $10.00$</div>
	      </div>
      </div>
      <div>
        <img src="../assets/image/jim1.png">
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