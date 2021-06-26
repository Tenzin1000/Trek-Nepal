<template>
        <div class="carousel" id="slider" >
            <div class="slider" id="scroll">
                <section id="last">
                    <h1>Awesome nature</h1>
                <p>Most peaceful place in the earth and the rich in the religious.</p>
                <a href="#" class="btn">Explore Now</a>
                </section>
                <section class="img"  ><h1>Our Trek to Annapurna</h1>
                <p>This was a group from two different countries.They were all so humble and had their best days on the earth.</p>
                <a href="#" class="btn">Explore Now</a></section>
                <section >
                    <h1>Religious Monastery</h1>
                <p>Religious monastery near the everest. Which has its unique design and was built in 90's.</p>
                <a href="#" class="btn">Explore Now</a>
                </section>
                <section>
                    <h1>Trekking</h1>
                <p>Trekking to Mt.Manaslu trekking area and never ending peace</p>
                <a href="#" class="btn">Explore Now</a>
                </section>
                <section>
                    <h1>Awesome nature</h1>
                <p>Most peaceful place in the earth and the rich in the religious.</p>
                <a href="#" class="btn">Explore Now</a>
                </section>
                <section id="first" ><h1>Our Trek to Annapurna</h1>
                <p>This was a group from two different countries.They were all so humble and had their best days on the earth.</p>
                <a href="#" class="btn">Explore Now</a></section>
            </div>
            <div id="controls">
                <span v-on:click="pre" class="left"><i class="fas fa-chevron-left"></i></span>
                <span v-on:click="next" class="right"><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
        }
    },
    methods:{
        next:function(){
            this.counter++;
            var size=document.querySelector('.img').clientWidth;
            var slider= document.querySelector('.slider');
            
            slider.style.transform='translateX('+(-size*this.counter)+'px)';
            slider.transition= 'transform .6s linear';
            var carousel= document.querySelectorAll('.slider section')
            if(carousel[this.counter].id=='first'){
               this.counter=1;
            }
        },
        pre:function(){
            this.counter--;
           if(this.counter===-1){
               this.counter=3;
           }
            var size=document.querySelector('.img').clientWidth;
            var slider= document.querySelector('.slider');
            slider.style.transform='translateX('+(-size*this.counter)+'px)';
            var carousel= document.querySelectorAll('.slider section')
           if (carousel[this.counter].id=='last'){
               this.counter=carousel.length-2;
               console.log(this.counter)
           }
          
        }
    }
}
</script>

<style scoped>
.carousel{
    height:90vh;
    width:100%;
    position:relative;
    overflow:hidden;
}
.slider{
    display:flex;
    width:600%;
    height:100%;
}
.slider section{
    flex-basis:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    color:white;
}
#controls{
    cursor:pointer;
}
.left{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:0;
    font-size:30px;
    background:rgb(161, 150, 150);
    padding:30px 10px;
}
.right{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:0;
    font-size:30px;
    background:rgb(161, 150, 150);
    padding:30px 10px;
}
section:nth-child(1){
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(128, 128, 128, 0.3)),
    url('../assets/slider/sene.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section:nth-child(5){
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(128, 128, 128, 0.3)),
    url('../assets/slider/sene.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section:nth-child(2){
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(128, 128, 128, 0.3)), url('../assets/slider/group.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section:nth-child(6){
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(128, 128, 128, 0.3)), url('../assets/slider/group.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section:nth-child(3){
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(128, 128, 128, 0.3)), url('../assets/slider/everest4.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section:nth-child(4){
    background:url('../assets/slider/trek.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
section h1{
    margin-bottom:20px;
    font-family: "Nothing You Could Do", cursive;
}
section a{
    text-decoration: none;
    color:white;
    background-color:rgb(0, 0, 255);
    padding:20px;
    border-radius:10px;
    margin-top:50px;
    transition:background .1s ease-in-out;
}
section a:hover{
    background: rgb(202, 19, 19);
}
@media only screen and (max-width:766px){
    .carousel{
        height:50vh;
    }
    #controls{
     display: none;   
    }
    section p {
        font-size:24px;
    }
    section h1{
    margin-bottom:20px;
    font-size:50px;
    font-family: "Nothing You Could Do", cursive;
    }
    section a{
    text-decoration: none;
    color:white;
    background-color:rgb(0, 0, 255);
    padding:20px;
    border-radius:10px;
    margin-top:50px;
    font-size:20px;
    transition:background .1s ease-in-out;
    }
}
@media only screen and (max-width:588px){
    section h1{
        font-size:30px;
    }
    section p{
        font-size:20px;
        text-align: center;
    }
    section a{
        margin-top:30px;
        padding:15px;
        font-size:19px;
    }
}
</style>