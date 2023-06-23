
<template>
  
    <footer>
      <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic" >About us</div>
         <p>EISY S C, we provide you the best 
          shopping experience with
          100% original products from store with benifits.
          Shopping while trusting.

        </p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>+855 23 880 880</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i><a href="mailto:eisyshoppingcenter@gmail.com">eisyshoppingcenter@gmail.com</a></a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Store Service</div>
       <div><a href="#">CELINE</a></div>
       <div><a href="#">CHANEL</a></div>
       <div><a href="#">ZIMMERMANN</a></div>
       <div><a href="#">AREA</a></div>
       <div><a href="#">JIMMYCHOO</a></div>
       <div><a href="#">MACH&MACH</a></div>
     </div>
     <div class="right box">
       <div class="topic">Email Us</div>
       <form action="#">
         <input type="text" placeholder="tap to write.">
         <input type="submit" name="" value="Send">
         <div class="media-icons">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-youtube"></i></a>
           <a href="#"><i class="fab fa-linkedin-in"></i></a>
         </div>
       </form>
     </div>
   </div>
  </footer>
</template>


<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  
}
footer{
  width: 100%;
  background: #111;
  margin-top: 50px;
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
}
footer .content{
  max-width: 1350px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
footer .content p,a{
  color: #1e68b7;
}
footer .content .box{
  width: 33%;
  transition: all 0.4s ease;
}
footer .content .topic{
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin-bottom: 16px;

}
footer .content p{
  text-align: justify;
}
footer .content .lower .topic{
  margin: 24px 0 5px 0;
}
footer .content .lower i{
  padding-right: 16px;
}
footer .content .middle{
  padding-left: 80px;
}
footer .content .middle a{
  line-height: 32px;
}
footer .content .right input[type="text"]{
  height: 45px;
  width: 100%;
  outline: none;
  color: rgb(140, 82, 255);
  background: #000;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
}
footer .content .right input[type="submit"]{
  height: 42px;
  width: 100%;
  font-size: 18px;
  color:black;
  background: rgb(140, 82, 255);
  outline: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 12px;
  border: 2px solid #ce84f3;
  transition: all 0.3s ease-in-out;
}
.content .right input[type="submit"]:hover{
  background: none;
  color:  #eb2f06;
}
footer .content .media-icons a{
  font-size: 16px;
  height: 45px;
  width: 45px;
  display: inline-block;
  text-align: center;
  line-height: 43px;
  border-radius: 5px;
  border: 2px solid #eb2f06;
  margin: 30px 5px 0 0;
  transition: all 0.3s ease;
}
.content .media-icons a:hover{
  border-color: #eb2f06;
}
footer .bottom{
  width: 100%;
  text-align: right;
  color: #d9d9d9;
  padding: 0 40px 5px 0;
}
footer .bottom a{
  color: #eb2f06;
}
footer a{
  transition: all 0.3s ease;
}
footer a:hover{
  color: white;
}
@media (max-width:1100px) {
  footer .content .middle{
    padding-left: 50px;
  }
}
@media (max-width:950px){
  footer .content .box{
    width: 50%;
  }
  .content .right{
    margin-top: 40px;
  }
}
@media (max-width:560px){
  footer{
    position: relative;
  }
  footer .content .box{
    width: 100%;
    margin-top: 30px;
  }
  footer .content .middle{
    padding-left: 0;
  }
}
</style>