<template>
    <div class="link">
        <RouterLink :to="{name:'Home'}" ><h5> Home  > </h5></RouterLink>
        <RouterLink :to="{name:'Shop'}" ><h5> Shop  > </h5></RouterLink>
        <RouterLink :to="{name:'Area'}" ><h5> Area  > </h5></RouterLink>
        <RouterLink :to="{name:'Area'}" ><h5> Black Ordinary Top  > </h5></RouterLink>
    </div>
    <div class="pro">
        <div class="product">
            <img src="../assets/image/area1.jpg">
        </div>
        <div class="other">
            <h5>Other Area Products</h5>
            <img src="../assets/image/area2.jpg">
            <img src="../assets/image/area3.jpg">
            <img src="../assets/image/area4.jpg">
            <img src="../assets/image/area5.jpg">
            <img src="../assets/image/area6.jpg">
            <img src="../assets/image/area7.jpg">
            <img src="../assets/image/area8.jpg">

        </div>
    </div>
</template>

<style>
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
    
 }
 .other h5{
    margin-top: 20px;
    margin-top: 20px;
 }
 .other img{
    width: 200px;
    height: 100px;
    padding-left: 5%;
    margin-top: 20px;
 }
</style>