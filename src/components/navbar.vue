<template>
<nav id="nav">
  <div id="left">
    <div class="img-container">
   <img src="../assets/logo.png" alt="">
   </div>
    <ul class="nav-links hide" id="nav-links">
    <li v-on:click="link"><router-link to="/trek-nepal/" >Home</router-link></li>
    <li v-on:click="link"><router-link to="/trek-nepal/about">About</router-link></li>
    <li v-on:click="link"><router-link to='/trek-nepal/destination'>Destination</router-link></li>
    <li v-on:click="link"><router-link to='/trek-nepal/contact'>Contact</router-link></li>
  </ul>
  </div>
  <div id="right"><div id="search" v-on:click="search" ><a href="#" ><i class="fas fa-search search"></i></a></div>
  <div class="bar" v-on:click="bar">
    <i class="fas fa-bars"></i>
  </div>
  </div>
  <ul class="nav-icon">
    <li ><a href="#"><i class="fas fa-phone-alt phone"></i></a>
    <li class="number"> +977 986124***</li>
    <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
    <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
    <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
    <li><a href="https://www.google.com/" target="_blank"><i class="fab fa-google-plus-g"></i></a></li>
  </ul>
  
  <div id="searchbar">
    <div id="box" >
      <div class="text" v-on:click="searchbar">close</div>
      <div class="container">
        <input type="text" placeholder="Everest trek">
      <p>search</p>
      </div>
    </div>
  </div>
</nav>
</template>
<script>


var age =document.querySelector('#pages');
console.log(age);
export default {
  data(){
    return{

    }
  },
  created(){    
   window.addEventListener('scroll',function(){
     var nav=document.getElementById('nav');
     var slider=document.getElementById('scroll');
     var c=nav.clientHeight;
     var d =slider.clientHeight;
     var sum=c+d-700
    if(pageYOffset>0 && pageYOffset>=400){
      nav.style.position='fixed';
      nav.style.left='0';
      nav.style.top='0';
      nav.style.background='#fffffff7';

    }else{
      nav.style.position='relative'
    }
   });
  },
  methods:{
    bar:function(){
      var nav =document.querySelector('.nav-links');
      if(nav.style.display==='block'){
        nav.style.display='none';
      }else{
        nav.style.display='block';
      }
    },
    search:function(){
      document.getElementById('searchbar').style.visibility='visible';
    },
    searchbar:function(){
       document.getElementById('searchbar').style.visibility='hidden';

    },
    link:function(){
      var x = window.matchMedia("(max-width: 995px)")
        if (x.matches) { // If media query matches
          var nav =document.querySelector('.nav-links')
            nav.style.display='none';
        } else {
            nav.style.display='block';
        }
    }
  }
}
</script>

<style scoped>
.img-container{
  overflow:hidden;
}
#searchbar{
  position:fixed;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  z-index:4;
  background: rgba(0, 0, 0, 0.849);
  visibility:hidden;
}
.text{
  color:rgba(255, 255, 255, 0.836);
  padding:10px;
  margin-top:20px;
  text-align: right;
  margin-right:40px;
  text-transform:uppercase;
  cursor: pointer;
}
#box{
  height:100%;
  width:100%;
  position:relative;
}
#box .container{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  height: 80px;
  width:420px;
  border:1px solid red;
}
.container input,p{
  display: inline;
}
.container input{
  float:left;
  height:100%;
  border:none;
  font-size:20px;
  padding-left:20px;
  width:55%;
}
.container p{
  background:red;
  float:right;
  height: 100%;
  width:40%;
  display: flex;
  align-items: center;
  justify-content:center ;
  color:#fff;
  cursor: pointer;
}
nav{
  height:98px;
  background:#fff;
  width:100%;
  font-family: "Rubik", sans-serif;
  z-index: 4;
}

#left{
  height:98px;
  float:left;
  display:flex;
  align-items:center;
}
#right{
  float:right;
  height:100%;
  display:flex;
}
.nav-links{
  border-left:3px solid grey;
  display:block;
}
.nav-links li{
  list-style-type: none;
  display: inline;
  margin-left:20px;
   font-size:1rem;
}
.nav-links li a{
  text-decoration: none;
  color:black;
  transition:all .6s ;
}
.nav-links li a:hover{
 color:rgb(58, 213, 240);
}

.nav-icon{
  float:right;
  line-height:96px;
}
.nav-icon li{
 display:inline;
 margin-left:20px;
font-size:1rem;
}
.nav-icon li a{
  color:grey;
}
.nav-icon li a:hover{
  color:red;
}
.number{
  border-right:2px solid grey;
  padding-right:20px;
}
.phone{
  color:red;
}
#search{
  background:#dc3545;
  width:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:20px;
}
#search a{
  color:white;
}
.bar{
  height:100%;
  width:110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:39px;
  display:none;
  cursor:pointer;
}
.down-icon{
  font-size:10px;
  color:rgba(63, 54, 54, 0.781);
  margin-left:5px;
}
#pages{
  position:relative;
  transition:all .4s ease-in;
}
#page-list{
  position:absolute;
  top:220%;
  left:0;
  z-index:2;
  margin:0;
  width:250%;
  background: #fff;
  display: none;
}
#page-list li{
  display: block;
  font-size:80%;
  color:rgb(25, 51, 139);
  padding:10px 5px;
}
#page-list li:hover{
  color:black;
}
#blog{
  position:relative;
}

#blog-list li{
  display: block;
  font-size:80%;
  color:black;
  padding:10px 5px;
}
#blog-list li:hover{
  color:rgb(140, 240, 58);
}


@media only screen and (max-width:1027px){
  .nav-icon{
    display: none;
  }
}
@media only screen and (max-width:1250px){
  .nav-icon li:nth-child(3){
    display:none;
  }
  .nav-icon li:nth-child(4){
    display:none;
  }
  .nav-icon li:nth-child(5){
    display:none;
  }
  .nav-icon li:nth-child(6){
    display:none;
  }
    .nav-icon li:nth-child(2){
    padding:0;
    border:none;
  }
}
@media only screen and (max-width:995px){
  .nav-links li{
    display:block;
    padding:10px 5px 5px 5px;
    cursor: pointer;
    margin-left:0;
    padding:10px;
    text-align: center;
    font-size: 17px;
    border-bottom: 1px dotted green;
    transition:all .2s linear;
  }
  .nav-links li:hover{
    background:indigo;
    color:lightblue;
  }
  nav{
    position: relative;
    height:73px;
  }
  img{
    height:78px;
  }
  #left{
    height: 73px;
  }
  .nav-links{
    display: none;
    border:none;
    z-index:30;
    position:absolute;
    top:73px;
    left:0;
    background:#fff;
    margin:0 auto;
    padding:30px 10px;
     transition: top .3s linear;
  }
  .bar{
    display:flex;
   transition:all .2s linear;
  }
  .down-icon{
  font-size:10px;
  color:rgba(63, 54, 54, 0.781);
  position:absolute;
  top:0;
  right:5%;
  }
  #blog-list{
    display: none;
  }
  #page-list{
   position:relative;
   top:0;
   width:50%;
  }
  #pages li{
    color:black;
  }
  #pages li:hover{
    color:red;
  }
  #blog li{
    color:black;
  }
  #blog li:hover{
    color:red;
  }
}
@media only screen and (max-width:438px){
  nav{
    height:54px;
  }
  img{
    height:61px;
  }
  #left{
    height:54px;
  }
  #search{
    width:51px;
  }
  .bar{
    width:60px;
    font-size:20px;
  }
  #box .container{
   height: 62px;
   border:none;
    width: 292px;
  }
  .container input{
    width:93%;
    border:1px solid red;
  }
  .container p{
    margin-top:4px;
    height:71%;
    width:31%;
    border:1px solid white;
  }
  .text{
    font-size:25px;
  }
  .nav-links{
    top:54px;
    font-size:80%;
  }
  .nav-links li{
    padding:5px;
  }
}
@media only screen and (max-width:320px){
  nav{
    width:102%;
  }
}

</style>