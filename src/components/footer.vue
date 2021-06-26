<template>
   <div id="container">
       <div class="row">
           <div class="flex">
               <div class="info">
                   <img src="../assets/logo.png" alt="" height="80px" width="100px"> <h5 style="display:inline" class="text">Trek Nepal</h5>
                   <p>Address: sahara-3239, my place<br>
                   Post nu.:44225<br>
                   Phone no. :01-4824518<br>
                   <br>
                   A trek limited company with nepal associates agencies.</p>
                   <br>
                    <ul class="nav-icon">
                     <li ><a href="#"><i class="fas fa-phone-alt phone"></i></a>
                     <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                     <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                     <li><a href="https://www.google.com/"><i class="fab fa-google-plus-g"></i></a></li>
                     </ul>
               </div>
               <div class="company">
                   <h5>Company</h5>
                   <ul class="company">
                       <li>about</li>
                       <li>Pricing</li>
                       <li>Gallery</li>
                       <li>contact</li>
                   </ul>
               </div>
               <div class="popular"><h5>Popular Destination</h5>
               <div class="row-pop">
               <div class="left">
                   <ul class="popular-left">
                       <li>Annapurna Trek</li>
                       <li>Mustang</li>
                       <li>Everest</li>
                       <li>Grokha</li>
                   </ul>
               </div>
               <div class="right">
                   <ul class="popular-right">
                       <li>Rasuwa</li>
                       <li>Mardi Trek</li>
                       <li>Tilicho Lake</li>
                       <li>Manaslu Trek</li>
                   </ul>
               </div>
               </div>
               </div>
               <div class="instagram">
                   <h5>Instagram</h5>
                   <div class="grid">

                       <section></section>
                       <section></section>
                       <section></section>
                       <section></section>
                       <section></section>
                       <section></section>
                       <!-- <img src="../assets/popular/mani.jpg" alt="">
                       <img src="../assets/popular/guitar.jpg" alt="">
                       <img src="../assets/popular/mountain.jpg" alt="">
                       <img src="../assets/popular/trek.jpg" alt="">
                       <img src="../assets/popular/trekking.jpg" alt="">
                       <img src="../assets/popular/patan.jpg" alt=""> -->
                   </div>
               </div>
           </div>
           <div class="copy">
               <hr>
               <p>&copy copyright from sangey's project.</p>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
#container{
    background:rgb(4, 1, 37);
    padding:110px 0 20px 0;
    color:#fff;
    font-size:1.2rem;
}
.row{
    height:100%;
    max-width: 1000px;
    margin:0 auto;

}
.info{
    color:grey;
}
.flex{
    display:flex;
    flex-direction: row;
    width:100%;
}
.info{
    flex-basis: 30%;
}
h5{
    color:#fff;
    font-size:1.5rem
}
.info p{
    margin-top:10px;
}
.nav-icon{
    display: grid;
    width:90%;
    grid-template-columns: repeat(5, 1fr);
    font-size:110%;
}
.nav-icon li a{
    color:blanchedalmond;
    transition:all .2s linear;
}
.nav-icon li a:hover{
    font-size:100%;
    color:blueviolet;
}
.nav-icon li{
    display: inline;
    list-style-type: none;
    cursor: pointer;
}
.company li{
    list-style-type: none;
    margin-top:10px;
    color:grey;
    transition: all .2s ease-in;
    cursor: pointer;
}
.company{
    flex-basis: 15%;
}
.company h5, .popular h5, .instagram h5{
    height:62px;
    display:flex;
    align-items: center;
}
.popular{
    flex-basis: 25%;
}
    
.popular li{transition: all .2s ease-in;}
.popular-left li:hover, .popular-right li:hover, .company li:hover{color: cornsilk;}
.row-pop{
    display:flex;
    flex-direction: row;
}
.row-pop ul {
    list-style-type:none ;
}
.row-pop ul li{
    margin-top:10px;
    color:grey;
    cursor: pointer;
}
.instagram{
    flex-basis:25%;
}
.grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top:20px;
    grid-gap:10px;

}
section{
    height:100px;
    width:100px;
    border-radius:10px;
    cursor: pointer;
}
section:nth-child(1){
    background: url('../assets/popular/mani.jpg')center/cover no-repeat;
}
section:nth-child(2){
    background: url('../assets/popular/guitar.jpg')center/cover no-repeat;
}
section:nth-child(3){
    background: url('../assets/popular/mountain.jpg')center/cover no-repeat;
}
section:nth-child(4){
    background: url('../assets/popular/trekking.jpg')center/cover no-repeat;
}
section:nth-child(5){
    background: url('../assets/popular/trek.jpg')center/cover no-repeat;
}
section:nth-child(6){
    background: url('../assets/popular/patan.jpg')center/cover no-repeat;
}
.copy{
    width:90%;
    margin:136px auto;
    margin-top:136px;
    margin-bottom:0;
    text-align:center;
    color:grey;
    background:rgb(4, 1, 37);
}
@media only screen and (max-width:996px){
    .company,.popular{
        display:none;
    }
    .info, .instagram{
        flex-basis:50%;
    }
    section{
        width:95%;
    }
}
@media only screen and (max-width:886px){
    .flex{
        flex-direction: column;
        width:80%;
        margin :0 auto;
    }
    .container{
        height:100vh;
    }
    h5{
        justify-content: center;
    }
    img{
        margin-left:20%;
        height:130px;
        width:230px;
        margin-bottom:20px;
    }
    .text{
        visibility: hidden;
        
    }
}
@media only screen and (max-width:547px){    
    .grid{grid-template-columns: repeat(2,1fr);}
    #container{padding:50px 0 20px 0};
    section{height: 137px;}
    .copy{margin-top:20px;font-size:15px;}
    img{margin:0;}
}
@media only screen and (max-width:332px){
    img{
        margin-left:0;
    }
    .copy p{
        font-size:11px;
    }
}
</style>