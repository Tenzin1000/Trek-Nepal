<template>
    <div id="container">
        <div id="main">
            <span class="text"><h3>Popular Destination</h3>
            <p>
            This palaces are the most visited and reviewed places. We have special discount for you on this packages.</p>
            </span>
            <br>
            <div id="grid">
                <section v-for="x in places">{{x}}</section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            places:[
                'POKHARA',
                'EVEREST',
                'MANASLU',
                'STUPA',
                'ANNAPURNA',
                'MANANG'
            ]
        }
    }
}
</script>

<style scoped>
#container{
    background:linear-gradient(to right, rgba(36, 31, 31, 0.192), rgba(14, 13, 13, 0.103));
    padding:10% 0;
}
#main{
   max-width:980px;
    margin:0 auto;

    height:90%;
}
.text{
    text-align: center;
}
p{
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
    border-radius: 10px;
    padding-left:5px;
    padding-bottom:20px;
    color:blanchedalmond;
    transition:all .3s ease;
    cursor: pointer;
}
section:hover{
    transform: translateY(-10px);
    color:crimson;
}
section:nth-child(1){
    background: url('../assets/destination/pokhara2.jpg')center/cover no-repeat;
}
section:nth-child(2){
    background: linear-gradient(to bottom, rgba(167, 159, 159, 0), rgba(20, 20, 32, 0.733)),
    url('../assets/destination/everest2.jpg')center/cover no-repeat;
}
section:nth-child(3){
    background: url('../assets/destination/manaslu.jpg')center/cover no-repeat;
}
section:nth-child(4){
    background:linear-gradient(to bottom, rgba(39, 30, 30, 0.171), rgba(20, 20, 32, 0.808)),
     url('../assets/destination/namchebazaar.jpg')center/cover no-repeat;
}
section:nth-child(5){
    background: linear-gradient(to bottom, rgba(39, 30, 30, 0), rgba(20, 20, 32, 0.808)),
    url('../assets/destination/yak.jpg')center/cover no-repeat;
}
section:nth-child(6){
    background:linear-gradient(to bottom, rgba(39, 30, 30, 0.171), rgba(20, 20, 32, 0.808)),
     url('../assets/destination/baba.jpg')center/cover no-repeat;
}
@media only screen and (max-width:1029px) {
    #grid{
        grid-template-columns: repeat(2, 1fr);
    }
    #main{
        max-width:650px;
    }
    p{
        width:100%;
    }
}
@media only screen and (max-width:754px){
    #grid{
        grid-template-columns: 1fr;
    }
    #main{
        max-width:500px;
    }
    section{
        height: 310px;
    }
}
@media only screen and (max-width:552px){
    #main{
        max-width:80%;
    }
    section{
        height: 310px;
    }
}
</style>