<template>
<div>
    <div id="container">
        <div class="show">
        <iframe id="yt-video" width="560" height="315" src="https://www.youtube.com/embed/lOESR7b6UpM?enablejsapi=1&html5=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        <div class="btn" id="btn-video">
           <h5>Enjoy the video Trip..</h5> <br>
            <div class="btn-play" v-on:click="change"><i class="far fa-play-circle"></i></div>
        </div>
    </div>
    <div id="grid-container">
        <div id="grid">
            <section><i class="fas fa-hotel icon"></i>
            <h2>Hotel</h2>
            <p>We provide best hotel and suitable to your price range. We also provide you free booking.</p>
            </section>
            <section><i class="fas fa-map-signs icon"></i>
            <h2>Guide</h2>
            <p>We provide best guide and suitable to your price range. We also provide you free booking.</p>
            </section>
            <section><i class="fas fa-bus-alt icon"></i>
            <h2>Travel vehicles</h2>
            <p>We provide best vehicles and suitable to your price range. We also provide you free booking.</p>
            </section>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        change:function(){
            var video=document.querySelector('.show');
            var btn=document.getElementById('btn-video')
             btn.style.visibility='hidden';
             video.style.visibility='visible';
             if(btn.style.visibility=='visible'){
                 video.appendChild(emb)
             }
        },
        close:function(){
            var video=document.querySelector('.show');
            var btn=document.getElementById('btn-video')
            var emb=document.getElementById('yt-video')
             btn.style.visibility='visible';
             video.style.visibility='hidden'
             if(btn.style.visibility=='visible'){
                 video.removeChild(emb)
             }
        }
    }
}
</script>

<style scoped>
#container{
    height:80vh;
    background: linear-gradient(to bottom, rgba(20, 17, 17, 0.623), rgba(20, 63, 23, 0.377)),
    url('../assets/video/dolkha.jpg')center/cover no-repeat;
    position:relative;
}
.btn{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:70px;
    color:#fff;
    text-align:center;
}
.btn-play{
    color:rgb(236, 205, 27);
    width:80px;
    border-radius:20%;
    margin:0 auto;
    cursor:pointer;
    transition:all 2s infinite;
}
.btn-play:hover {
    animation:circle 1s  forwards;

}
@keyframes circle {
    from{transform:scale(1.3)};
    to{transform :scale(1)}
}
.show{
    background: rgba(10, 12, 10, 0.671);
    height:100%;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
}
.icon{
    font-size:34px;
    margin-left:100px;
}
.btn-close{
    cursor: pointer;
    color:rgb(154, 221, 141);
    margin-left:40px;
    outline:none;
    background: transparent;
    font-size:50px;
    border:none;
}
#grid-container{
    padding:40px 0;
    width:100%;
}
#grid{
    max-width:990px;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:20px;
    margin:0 auto;
    padding:50px 0;
}h2{text-align: left;color:rgba(0, 0, 0, 0.795);margin:10px 0;cursor:pointer;}
p{
    color:grey;
    font-size:20px;
}
.icon{
    color:burlywood;
    font-size:58px;
}
@media only screen and (max-width:986px){
    #grid{
        max-width:600px;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 40px;
    }
}
@media only screen and (max-width:768px){
    #grid{
        grid-template-columns: 1fr;
        max-width:400px;
        grid-gap:70px;
    }
    section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .icon{
        margin-left:-27px;
    }
    h2{font-size:30px}
}
@media only screen and (max-width: 769px){
    h5{
        font-size:30px;
    }
    #container{
        height: 60vh;
    }
}
@media only screen and (max-width:405px){
    .btn-close{
        margin-left:20px;
    }
    #btn-video{
        display:none;
    }
    .btn-close{
         display:none;
    }
    .show{
        visibility: visible;
    }
    #grid{
        max-width:230px;
    }
}
</style>