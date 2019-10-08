<template>
    <div id="main">
        <Header/>
        <Slider/>
        <TopProducts/>
        <!--<div class="content">
            <router-view></router-view>
        </div>-->
    </div>
</template>

<script>
    import Header from './Header';
    import Slider from './Slider';
    import TopProducts from './TopProducts'



    export default {
        name: 'main-app',
        components:{
            Header,
            Slider,
            TopProducts
        }


    }
</script>
