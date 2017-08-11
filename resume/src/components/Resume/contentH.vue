<template>
    <div>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated zoomInUp' leave-active-class='' appear appear-enter-class='animated zoomInUp'>
            <div class='thanks' v-show='showh' :key='1' animate-delay='0.3s'><img src="../../assets/images/thanks.png" alt=""></div>
        </transition>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated zoomInDown' leave-active-class='' appear appear-enter-class='animated zoomInDown'>
            <div class='team' v-show='showh' :key='1' animate-delay='0.3s'><img src="../../assets/images/team.png" alt=""></div>
        </transition>
    </div>
</template>
<script>
    export default{
        props:{
            showh: Boolean
        },
        methods:{
            beforeEnter:(el) => {
                var delay = el.getAttribute('animate-delay');
                el.style.animationDelay = delay;
            }
        }
    }
</script>
<style scoped>
    .thanks,.team{display: flex;justify-content: center;margin-top:2rem;}
    .thanks img{height:0.3rem;}
    .team{margin-top:0.2rem;}

    @media screen and (min-width:768px){
        .thanks{margin-top:1.6rem;}
        .thanks img{height:0.4rem;}
        .team img{height:0.2rem;}
    }
</style>