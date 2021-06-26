<template>
<div id="container">
    <div class="review" >
            <section>
                <div class="img" >
                    <div class="img-box"><i class="fas fa-quote-left"></i></div>
                </div>
                <div class="text">
                    <p>I am glad to be happy and stay here.Your money wont be wasted. I is priceless weekend. Hats of Trek Nepal team and keep supporting grow more "<br>
                    <span>-Sangey</span></p>
                </div>
            </section>            
    </div>
</div>

</template>
<script>
export default {
    data(){
        return{
            title:'hello',
        }
    }
}
</script>

<style scoped>
#container{
    background:rgba(116, 145, 201, 0.178);
    padding:190px 0;
}
.review{
    height:90%;
    width:80%;
    padding:20px 0 0 0;
    margin:0 auto;
}
section{
    height:100%;
    text-align: center;
     width: 85%;
    margin: 0 auto;
}
.text{
    margin:40px 0 0 0;
}
@media only screen and (max-width:625px){
    .text{margin-top:20px;}
}
@media only screen and (max-width:440px){
    .text{
        font-size:20px;
    }
}
section .img{
    background: url('../assets/review/pic2.jpg');
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    height:130px;
    width:130px;
    border-radius:50%;
    position:relative;
    margin:0 auto;
}
.img img{
    height:100%;
    width:100%;
}
.img-box{
    content:"hi";
    padding:10px 16px;
    border-radius:50%;
    position:absolute;
    right:-10px;
    bottom:-10px;
    background:rgb(9, 167, 172);
    text-align:center;
    color:white;
}
span{
    color:grey;
}
</style>