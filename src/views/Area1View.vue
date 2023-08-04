<template>
    <div class="link">
        <RouterLink :to="{name:'Home'}" ><h5> Home  > </h5></RouterLink>
        <RouterLink :to="{name:'Shop'}" ><h5> Shop  > </h5></RouterLink>
        <RouterLink :to="{name:'Area'}" ><h5> Area  > </h5></RouterLink>
        <RouterLink :to="{name:'Area1'}" ><h5> Vintage Top  > </h5></RouterLink>
    </div>
    <div class="pro">
        <div class="product">
            <img src="../assets/image/area1.jpg">
            <div class="detail">
                <h3>Name:  Vintage Top</h3>
                <h3>Brand:  Area </h3>
                <h3>Colos:  Black</h3>
                <h3 for="size">Select list:</h3>
                <select class="form-control" id="size">
                    <option>small</option>
                    <option>midium</option>
                    <option>big</option>
                </select>
                <h3>Price: 350</h3>
                <h3 for="qun">Qunity:</h3>
                <select class="form-control" id="qun">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <RouterLink :to="{name:'Area11'}" ><h3>Add To Cart</h3></RouterLink> 
            </div>
        </div>
        <div class="other">
            <h4>Other Area Products</h4>
            <img src="../assets/image/area2.jpg">
            <img src="../assets/image/area3.jpg">
            <img src="../assets/image/area4.jpg">
            <img src="../assets/image/area5.jpg">
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
 .pro{
    margin-top: 20px;
    width: 100%;
    
 }
 .product img{
    width: 550px;
    height: 400px;
    padding-left: 5%;
    margin-top: 20px;
    display:inline-block;
    vertical-align:top;
 }
 .detail{
    display: block;
    display:inline-block;
    padding-left: 5%;
    margin-top: 20px;
    font-family: 'Inconsolata', monospace;
    
 }
 .other h4{
    margin-top: 40px;
    
 }
 .other img{
    width: 350px;
    height: 200px;
    padding-left: 10%;
    margin-top: 20px;
 }
</style>