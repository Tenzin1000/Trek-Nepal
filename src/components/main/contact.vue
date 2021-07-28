<template>
    <div>
        <div id="contact">
            <h1>Contact</h1>
            <p>Here to contact</p>
        </div>
        <div class="row" id="scroll">
            <h3>Get In Touch</h3>
            <div id="grid">
                <div>
                    <form>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter Message"></textarea>
                        <div class="flex">
                            <div><input type="text" placeholder="Enter your Name" id="name"></div>
                            <div><input type="email" placeholder="Enter your Email" id="email"></div>
                        </div>
                        <input type="text" placeholder="Enter subject" id="message">
                    </form>
                    <button v-on:click="alert">SEND</button>
                </div>
                <div class="column">
                    <div class="col-container"><div class="left"><i class="fas fa-home"></i></div><div class="right"><h5>sarah-42289, myplace</h5>
                    <p>near to kimdol..</p></div></div>
                    <div class="col-container"><div class="left"><i class="fas fa-phone-square-alt"></i></div><div class="right"><h5>+977 9861 237711</h5>
                    <p>Dail for more information</p></div></div>
                    <div class="col-container"><div class="left"><i class="far fa-envelope"></i></div><div class="right"><h5>Inbox me</h5>
                    <p>email@gmail.com</p></div></div>
                </div>
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
        alert:function(){
            var name=document.getElementById('name');
            var email=document.getElementById('Email');
            var message=document.getElementById('message');
            if(name.value==''&& message.value==''){
                alert('Please fill all the form')
            }else{
                alert('We will contact you ' + name.value)
            }
        }
    }
}
</script>

<style scoped>
#contact{
    height:40vh;
    background:linear-gradient(to right,rgba(0, 0, 0, 0.397),rgba(128, 128, 128, 0.562)),
    url(../assets/video/dolkha.jpg)center/cover no-repeat;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width:100%;
    color:#fff;
    padding:130px 0;
}
.row{
    max-width:1180px;
    margin:0 auto;
    padding:130px 20px;
}
#grid{
    display:grid;
    grid-template-columns: 60% 30%;
    margin:20px auto 0 auto;
}
.flex{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width:95%;
}
textarea{
    width: 90%;
    height:70px;
    font-size:20px;
    margin-left:10px;
    margin-top: 2px;
    padding-left:10px;
}
input{
    width:90%;
    height:40px;
    font-size:20px;
    padding-left:10px;
    margin-top:10px;
    margin-left: 10px;
}
.col-container{
    width:120%;
    height:50px;
    display:flex;
    flex-direction:row;
    margin-top:20px;
}
.left{
    margin-top:10px;
    color:blueviolet;
}
.right{
    text-align: right;
    margin-left:40px;
}
button{
    padding:20px 30px;
    font-size:16px;
    color:white;
    background:rgb(40, 170, 170);
    margin-top:10px;
    outline:none;
    border:none;
}
h5{
    text-align:center;
}

p{color:saddlebrown}
@media only screen and (max-width:1060px){
    p{
        font-size:15px;
        text-align: justify;
    }
    .row{max-width:731px;}
}
@media only screen and (max-width:720px){
    #grid{
        display: block;
    }
    .column{
        margin-top:57px;
    }
    .col-container{
        width:100%;
    }
    .nav-icon{
        width:46%;
    }
    .row{padding:35px;}
    .flex{width:94%;}
}
@media only screen and (max-width:576px){
    #grid{
        max-width:450px;
    }
    input{font-size:20px;margin-left:2px}textarea{margin-left:2px;margin-top:2px;}
}
@media only screen and (max-width:473px){
    #grid{
        max-width:350px;
    }
    button{
        font-size:13px;
    }
    .flex{display: block; width:100%;}
    input{width:100%;}
}
@media only screen and (max-width:346px){
    #grid{
        max-width:249px;
    }
    .right{margin-left:20px;}
}
</style>
