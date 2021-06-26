<template>
    <div>
        <div class="destination" id="scroll">
            <h1>Destination</h1>
            <p>Place to Go</p>
        </div>
        <app-news></app-news>
        <div class="container">
            <div class="row">
                <div>
                    <div class="form">
                        <h5 style="margin-left:10px;">Filter Result</h5>
                        <div class="box">
                            <select>
                            <option value="">Manang</option>
                            <option value="">Gorkha</option>
                            <option value="">Everest</option>
                            <option value="">Manaslu</option>
                            </select>
                           <select>
                            <option value="">Travel Type</option>
                            <option value="">Advance</option>
                            <option value="">Premium</option>
                            <option value="">Cheap</option>
                            </select>
                            <p>Price Range</p>
                            <input id="range" type="range" min="20000" max='100000' value="20000" class="slider">
                            <p style="color:grey; margin-top:20px;">$ <span id="value">0</span></p>
                        </div>
                    </div>
                </div>
                <div id="grid">
                    <section  v-for="x in parts"> 
                    
                        <div class="price">$5000</div>
                    <div class="name">{{x}}<hr width="55%" color="green">
                    Top of the mountains.<br>
                    <div id="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    </div>
                
                    </section>
                     
                </div>
            </div>
        </div>
        <app-subscribe></app-subscribe>
        <br>
    </div>
</template>

<script>
import news from "../book"
import newsletter from '../newsletter'
export default {
    components:{
        'app-news':news,
        'app-subscribe':newsletter,
    },
    data(){
        return{
            parts:[
                'Everest',
                'Manaslu',
                'Mardi',
                'Manang',
                'Gorkha',
                'Kathmandu'
            ],
            price:[
                '$500',
                '$4000',
                '$5400',
                '$34000',
                '$9000',
                '$6000'

            ]
        }
    }
}
</script>

<style scoped>
.destination{
    height:60vh;
    background:linear-gradient(to bottom, rgba(54, 52, 52, 0.397) , rgba(133, 116, 116, 0.247)),
    url('../../assets/destination/everest2.jpg')center/cover no-repeat;
    width:100%;
    color:white;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
}
.container{
    margin-bottom:70px;
}
.row{
    max-width:1500px;
    padding:50px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 30% 65%;
}
.box{
    border:1px solid grey;
    display: flex;
    flex-direction: column;
    padding:20px;
    border-radius:10px;
    margin-top:10px;
}
select{
    margin-bottom:20px;
    height:40px;
    outline: none;
    border:1px solid grey;
    padding-left:10px;
    color:grey;
}
option{
    color:black;
    margin-top:10px;
    border:1px solid grey;

}
option:nth-child(1):hover{
    background:grey;
}
.slider{
    position:relative;
}
.slider:after{
    content: '100000';
    position:absolute;
    right:0;
    bottom:-18px;
}
.slider:before{
    content: '20000';
    position:absolute;
    left:0;
    bottom:-18px;
}
#grid{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    height:100%;
    grid-gap:20px;
    margin-left:40px;
}
section{
    border:1px solid grey;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    position:relative;
    font-size:20px;
    height:300px;
    width:100%;
}
section:nth-child(1){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/destination/everest2.jpg')center/cover no-repeat;
}
section:nth-child(2){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/popular/mani.jpg')center/cover no-repeat;
}
section:nth-child(3){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/popular/trek.jpg')center/cover no-repeat;
}
section:nth-child(4){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/popular/mountain.jpg')center/cover no-repeat;
}
section:nth-child(5){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/destination/yak.jpg')center/cover no-repeat;
}
section:nth-child(6){
    background:linear-gradient(to bottom, rgba(2, 1, 1, 0.418), rgba(12, 10, 10, 0.555)),
     url('../../assets/destination/pokhara2.jpg')center/cover no-repeat;
}
.price{
    position:absolute;
    top:20px;
    left:20px;
    padding:10px;
    background-color:rgba(104, 167, 32, 0.74);
    border-radius:10px;
    color:rgba(216, 216, 216, 0.959);
    transition:background .2s linear;
}
.price:hover{
    color:rgba(148, 255, 27, 0.884);
    background: rgb(47, 17, 6);
    cursor: pointer;
}
.name{
    position: absolute;
    left:0;
    bottom:0;
    color:black;
    height:80px;
    border-radius:10px;
    background-color:#fff;
    padding-left:10px;
}
#star{
    margin-top:3px;
    font-size:16px;
    color:orangered;
}
@media only screen and (max-width:888px){
    .container{
        margin-bottom:70px;
    }
    .row{
        display: block;
        max-width:700px;
    }
    .box{
        width: 90%;
        margin: 20px auto;
    }
    #grid{
        margin-top:30px;
        justify-content: center;
        margin-left:0;
   }
}
@media only screen and (max-width:573px){
    .name{
        height:113px;
    }
    section{width:100%;}
    #grid{margin-left:0;}
    .container{margin-bottom:0;}
    .row{padding:20px;}
}
@media only screen and (max-width:445px){
    #grid{
        grid-template-columns: 1fr;
        height:262%;
    }
}
</style>