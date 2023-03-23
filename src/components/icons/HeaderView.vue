<template>
  <div class="title">
    <div class="name">
      UNICORN SHOPPING EXPRESS
   </div> 
    <div>
      <input type="submit" value="Account">
    <a href="cart">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style="height: 60px; height: 45px; color: black; float: right;">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </a>
    </div>
  </div>
    <div class="header">
      <a class="active" href="#celine">CELNE</a>
      <a href="#channel">CHANNEL</a>
      <a href="#versace">VERSACE</a>
      <a href="#hermes">HERMES</a>
    <div class="header-right">
      <input type="submit" value="Search Product">
    </div>
  </div>
  <!-- ------ -->
  
</template>

<style>
.title {
  width: 80%;
  font-size: 30px;
  font-weight: 1000;
  font-style: Acme;
  text-align: center;
  color: #B8DF87;
  justify-content: space-between;
  display: flex;

}
.name{
  margin-left: 30%;
}
input[type=button], input[type=submit], input[type=reset] {
  background-color: gainsboro;
  border-color: black;
  color: black;
  font-size: 10px;
  padding: 13px 25px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
  font-family: Sofia; 
}
.header {
  width: 80%;
  margin-top: 30px;
  overflow: hidden;
  background-color: #B8DF87;
  padding: 20px 10px;
}
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  
}
.header a.logo {
  font-size: 25px;
  font-weight: bold;

}
.header a:hover {
  background-color: #ddd;
  color: black;
  font-family: Siemreap;
}
.header a.active {
  background-color: #ddd;
  color: black;
  font-family: Siemreap;
}
.header-right {
  float: right;
  
}
/* ------------------------------------------------------------------------------------- */
















@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>