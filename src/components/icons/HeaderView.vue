<template>
  <div class="title">
    <!-- <div>
      <img src="../assets/image/unicornLOGO">
    </div> -->
    <div class="name">
      UNICORN SHOPPING EXPRESS
    </div>
    <div class="acc">
      <a href="cart">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6" style="height: 60px; height: 45px; color: black; float: right; padding-top: 1%; ">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </a>
      <input type="submit" value="Account">
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
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.title {
  width: 100%;
  font-size: 40px;
  font-weight: 1000;
  text-align: center;
  /* color: #B8DF87; */
  justify-content: space-between;
  display: flex;
  margin-top: 1%;
  /* font-family: Pacifico; */
  /* margin-top: 0px;
  margin-bottom: 10px; */
  /* font-family: sans-serif; */
  /* font-size: 6rem; */
  /* background: linear-gradient(to right, #dc3ca4, #7e57c2, #5f29bd, #26c6da, #43a047, #f9a825, #ff5722, #f48fd1); */
  /* background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF); */
  background: linear-gradient(to right, #FFCAF2, #FFB2B1, #FFB2B1, #C9B1FF, #FFF3AD, #BCFFBC, #A2EDFF, #FFB2B1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.acc {
  padding: 10px 20px;
  margin: 4px 2px;
  float: right;

}

.name {
  margin-left: 30%;
  margin-top: 1%;
  text-align: center;
}

input[type=button],
input[type=submit],
input[type=reset] {
  -webkit-text-fill-color: black;
  /* all:unset; */
  background-color: gainsboro;
  border-color: black;
  color: black;
  font-size: 10px;
  padding: 10px 20px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
  font-family: Sofia;
  padding-top: 7px;
}

.header {
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
  /* margin-left: 15px; */
  /* background-color: #C9B1FF; */
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  padding: 10px 10px;
}

.header a {
  float: left;
  margin-left: 40px;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 25px;
  line-height: 25px;
  border-radius: 4px;

}

.header a.logo {
  font-size: 25px;
  font-weight: bold;

}

.header a:hover {
  background-color: white;
  color: black;
  font-family: Siemreap;
}

.header a.active {
  background-color: white;
  color: black;
  font-family: Siemreap;
}

.header-right {
  float: right;

}

/* ------------------------------------------------------------------------------------- */
















/* @media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
} */</style>