<template>
<div>
    <app-img></app-img>
    <app-book></app-book>
    <app-place></app-place>
    <app-news></app-news>
    <app-popular></app-popular>
    <app-video></app-video>
    <app-review></app-review>
</div>
</div>

</template>
<script>
import carousel from"./carsousel"
import book from "./book"
import place from "./destination"
import news from "./newsletter"
import popular from './popularplace'
import video from './video'
import review from './testomial'
export default {
    components:{
   'app-img':carousel,
    'app-book':book,
    'app-place':place,
    'app-news':news,
    'app-popular':popular,
   'app-video':video,
    'app-review':review,
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
</style>
