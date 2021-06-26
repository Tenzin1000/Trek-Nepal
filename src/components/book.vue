<template>
    <div id="container">
        <div class="row">
            <p>where you want to go?</p>
            <div class="input">
            <input type="text" placeholder="place">
            <input type="text" placeholder="Date/Month/Year">
            <select>
                <option>Trek Difficulty</option>
                <option>Grade:A,B,C</option>
                <option>Grade:D,E</option>
            </select>
            <a href="#">search</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
 #container{
     height:18vh;
     width:100%;
     background: rgb(20, 14, 43);
 }
 .row{
    max-width:1140px;
    margin:0 auto;
    height:100%;
    display:flex;
    align-items:center;
    font-size:25px;
    color:#fff;
    justify-content: center;
 }
p{
    margin-right:20px;
    font-size:30px;
}
.input{
    height:40px;
}
input, select {
    height:100%;
    margin-left:15px;
    background:transparent;
    padding-left:10px;
    border-color: grey;
    outline-color:grey;
    color:#fff;
    font-size:18px;
}
select{
    font-size:22px;
    color:grey;
}
select option{
    color:black;
    background: #fff;
}
a{
    text-decoration: none;
    color:#fff;
    background:red;
    padding:7px 15px;
    border:1px solid grey;
    margin-left:10px;
}
@media only screen and (max-width:1090px){
    #container{
        padding-bottom:50px;
    }
.row{
    max-width:880px;
    font-size:20px;
    flex-direction: column;
}
p{
    margin-bottom:20px;
    justify-content: start;
}
input, select {
    width:140px;
}
}
@media only screen and (max-width:612px){
#container{
    height:50vh;
}
.row{
    display: block;
    width:440px;
    margin:0 auto;
    height:72%;
    padding:45px 0;
}
input, select{
    width:100%;
    margin-bottom:20px;
    margin-left:0;
    border:1px solid white;
}
a{
    margin:0;
}
}
@media only screen and (max-width:480px){
    .row{
        width:350px;
        height:0;
    }
    input, select{
        width:88%;
    }
}
@media only screen and (max-width:364px){
    #container{
        height:55vh;
    }
    .row{
        width:250px;
        padding:0;
        height:100%;
    }
    p{
        font-size:25px;
        padding-top:25px;
    }
    input,select{
        width:90%;
    }
}
</style>