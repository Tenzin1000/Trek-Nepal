<template>
    <div id="container">
        <div id="flex">
            <div class="left">
                <h3>Subscribe Our Newsletter</h3>
                <br>
                <p>
                    Subscribe newsletter to get offers and about new places to discover.
                </p>
            </div>
                <input type="email" placeholder="Your Email:ID">
                <a href="#">Subscribe</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#container{
    height: 30vh;
    background:linear-gradient(to bottom, rgba(39, 30, 30, 0.534), rgba(20, 20, 32, 0.808)),
    url('../assets/news/view.jpg')center/cover no-repeat;
}
#flex{
    display: flex;
    max-width: 950px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    flex-direction: row;
}
.left{
    width:50%;
}
.right{
    display: inline;
}
input{
    height:49px;
    width:40%;
    padding-left: 10px;
    font-size: 18px;
    outline:none;
}
a{
    color:white;
    text-decoration: none;
    background: tomato;
    height: 53px;
    width:20%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    transition: background .4s ease-in-out;
    border-radius: 12px;
}
a:hover{
    background: cyan;
    color: darkblue;
}
@media only screen and (max-width:992px){
    #flex{
        max-width:760px;
        margin:0 auto;
    }
}
@media only screen and (max-width:750px){
    #container{
        height: 54vh;
    }
    #flex{
        display:block;
        max-width: 550px;
        margin:0 auto;
        padding:53px 0 30px 0;
        height: 78%;
    }
    .left{
        width:100%;
    }
    input{
        width:90%;
        margin:20px 0;
    }
    a{
        width:93%;
        margin-left:0;
    }
}
@media only screen and (max-width:587px){
    #container{
        background: rgba(9, 1, 39, 0.863);
        height:52vh;
    }
    #flex{
        width:430px;
        height:74%;
    }
}
@media only screen and (max-width:485px){
    #flex{
        max-width:80%;
        padding-bottom:0;
         display: flex;
        flex-direction: column;
        justify-content: center;
         align-items: center;
    }
    #container{
       height:50vh;
    }
    .left{
        font-size:20px;
    }
    input{
        height:33px;
    }
    a{
        height:32px;
    }
}
@media only screen and (max-width:330px){
    #container{
        height: 57vh;
    }
}
</style>