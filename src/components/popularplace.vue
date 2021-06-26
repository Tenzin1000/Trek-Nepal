<template>
    <div id="container">
        <div id="main">
            <span class="text"><h3>Popular Places</h3>
            <p class="head">
            This palaces are the most visited and reviewed places. We have special discount for you on this packages.</p>
            </span>
            <br>
            <div id="grid">
                <section v-for="x in parts">
                    <div class="container">
                        <div class="img">
                        </div>
                        <div class="para">
                            <h2>{{x}}</h2>
                            <p>{{places.content}}</p>
                            <div id="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            (20 review) 
                            </div>
                        </div>
                        <div id="price">$500</div>
                        <div id="timer"><i class="far fa-clock"></i> 5 Days</div>
                    </div>
                </section>
            </div>
        </div>
        <div id="btn"><a href="#">More Place</a></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            places:{
                "title":"Pokhara",
                'content':'The valley of rich culture.',
            },
            parts:[
                'Guitar',
                'Mani',
                'Mountain',
                'Patan',
                'Trek',
                'Trekking'
            ]
        }
    }
}
</script>
<style scoped>
#container{
    background:linear-gradient(to right, rgba(36, 31, 31, 0.192), rgba(14, 13, 13, 0.103));
    padding:10% 0;
    position:relative;
}
#btn{
    position:absolute;
    bottom:5%;
    left:50%;
    transform:translateX(-50%);
}
#btn a{
    text-decoration: none;
    color:white;
    background: red;
    padding:10px 20px;
    border-radius: 10px;
}
#main{
   max-width:1300px;
    margin:0 auto;

    height:90%;
}
.text{
    text-align: center;
}
.head{
    width: 50%;
    margin:0 auto;
    padding-top:19px;
}
#grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:20px;
}
section{
    height: 230px;
    width:100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-bottom-right-radius: 20px;
    padding-bottom:20px;
    color:blanchedalmond;
    box-shadow:4px 14px 17px 2px #00000042;
}
.container{
    height:100%;
    width:100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
#price{
    position:absolute;
    top:19px;
    left:20px;
    background: rgb(8, 100, 87);
    padding:8px 6px;
    border-radius:10px;
    font-size:18px;
    cursor: pointer;
    transition:background .3s ease-in-out;
}
#price:hover{
    background: red;
}
#timer{
    font-size:14px;
    position:absolute;
    right:10px;
    bottom:10px;
    color:peru;
}
.img{
    height:65%;
    border-top-left-radius: 20px;
}
.text{
    height: 40%;
}
.para{
    font-size:16px;
    position:absolute;
    bottom:0;
    left:0;
    color:black;
    padding-left:19px;
    padding-top:10px;
    background:#72c579b7;
    border-top-right-radius: 20px;
    padding-bottom:10px;
}
#star{
    color:orangered;
    font-size: 14px;
    padding-top:10px;
}

section:nth-child(1){
    background: url('../assets/popular/guitar.jpg')center/cover no-repeat;
}

section:nth-child(2){
    background: url('../assets/popular/mani.jpg')center/cover no-repeat;
}
section:nth-child(3){
    background: url('../assets/popular/mountain.jpg')center/cover no-repeat;
}
section:nth-child(4){
   background: url('../assets/popular/patan.jpg')center/cover no-repeat;
}
section:nth-child(5){
    background: url('../assets/popular/trek.jpg')center/cover no-repeat;
}
section:nth-child(6){
    background: url('../assets/popular/trekking.jpg')center/cover no-repeat;
}
@media only screen and (max-width:990px){
    #main{
        max-width: 800px;
    }
    #btn{
        bottom:3%;
    }
    .head{
        width:92%;
    }
}
@media only screen and (max-width:846px){
    #main{
        max-width:700px;
    }
    #grid{
        grid-template-columns: repeat(2,1fr);
    }
#btn{
        bottom:2%;
    }
    #container{
        padding:15% 0;
    }
}
@media only screen and (max-width:727px){
    #grid{
        grid-template-columns: 1fr;
        grid-gap:38px;
    }
    section{
        height:410px;
        width:84%;
        margin:0 auto;
    }
}
@media only screen and (max-width:676px){
    #btn{
        bottom:17px;
    }
    
}
@media only screen and (max-width:450px){
    section{height:300px;}
    #btn a{padding:2px 10px;}
    #btn{bottom:5px;}
}
</style>