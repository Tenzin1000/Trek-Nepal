<template>
<div>
    <div id="about">
        <h2 id="scroll">About US</h2>
        <p>For comfortable and safe trek.
        </p>
    </div>
    <div id="story" >
        <div class="row">
            <h1>Our Story</h1>
            <br>
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minus laudantium atque rem quasi, facilis id, quas aliquam voluptates quisquam illo possimus? In dicta ut iusto 
                mollitia inventore fuga ullam quam minima, necessitatibus, temporibus fugiat numquam incidunt. Odio, assumenda repellat. Aperiam minus natus 
                nemo molestias porro odio suscipit fuga similique officia deserunt laborum beatae doloremque ex dolores incidunt, omnis autem.<br>
                <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis dolore eligendi ullam! Nihil magni tenetur deserunt soluta distinctio. Commodi, quod? Alias expedita praesentium, molestiae ducimus est, incidunt veritatis earum, velit quisquam vitae iure eius repellendus sequi distinctio enim. Natus quos, architecto illum totam voluptate voluptatem dolore itaque consectetur vero?
            </p>
            <div id="grid">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <div id="number">
                <div>
                    <div class="counter" data-target="420">0</div><br>
                    <p>Tour done successfully</p>
                </div>
                <div>
                    <div class="counter" data-target="50">0</div><br>
                    <p>Yearly tour aranged</p>
                </div>
                <div>
                    <div class="counter" data-target="1920">0</div><br>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    </div>
   <app-video></app-video>
    <app-review></app-review>
</div>
</template>

<script>
import video from './video'
import review from './testomial'
export default {
    components:{
    'app-video':video,
    'app-review':review,
    },
    data(){
        return{
            
        }
    },

}
</script>

<style scoped>
#about{
    height:60vh;
    background:url('../assets/slider/sene.jpg')center/cover no-repeat;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    width:100%;
}
#story{
    padding:100px 0 50px 0;
}
.row{
    max-width:990px;
    margin:0 auto;
    padding-bottom:60px;
}
h1{
    margin-left:-40px;
}
.para{
    width:70%;
    color:grey;
    font-size:20px;
    text-align:justify;
}
#grid{
    margin-top:40px;
    display:grid;
    height:400px;
    grid-template-columns: repeat(2,1fr);
    width:100%;
    grid-gap:40px;
}
.left{
    background:linear-gradient(to bottom, rgba(41, 40, 40, 0.247) ,rgba(58, 55, 55, 0.192)),
    url('../assets/destination/pokhara2.jpg')center/cover no-repeat;
   
}
.right{
    background:linear-gradient(to bottom, rgba(41, 40, 40, 0.247) ,rgba(58, 55, 55, 0.192)),
    url('../assets/popular/mani.jpg')center/cover no-repeat;  
}
#number{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    max-width:800px;
    margin:0 auto;
    margin-top:30px;
    text-align:center;
}
p{
    text-align: center;
    color:grey;
    font-size:20px;
}
.counter{
    color:rgb(136, 12, 12);
    font-size:40px;
}
@media only screen and (max-width:1049px){
    .row{
        max-width:800px;
    }
    .right{
        height:65%;
    }
}
@media only screen and (max-width:874px){
    .row{
        max-width:700px;
    }
}
@media only screen and (max-width:848px){
    .row{
        padding:0 20px;
    }
    #grid{
        grid-template-columns: 1fr;
        height:700px;
    }
    .right{
        height:100%;
        width: 70%;
        margin: 0 auto;
    }
    .left{
        width:70%;
        margin:0 auto;
    }
    #number{
        grid-gap:10px;
    }
    h1{
    margin-left:0px;
    }
    .para{
        width:100%;
        text-align: left;
    }
}
@media only screen and (max-width:547px){
    .right,.left{
        width:100%;
    }
}
</style>