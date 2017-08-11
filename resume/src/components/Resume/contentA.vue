<template>
    <div>
        <transition-group v-on:before-enter="beforeEnter" enter-active-class='animated bounceInLeft' leave-active-class='' appear appear-enter-class='animated bounceInLeft'>
            <div class='peop' v-show='show' :key='1' animate-delay='0.5s'><img src="../../assets/images/peop.png" alt=""></div>
            <div class='jiantou' v-show='show' :key='2' animate-delay='0.3s'><img src="../../assets/images/jiantou.png" alt=""></div>
            <div class='resume' v-show='show' :key='3' animate-delay='1s'><img src="../../assets/images/resume1.png" alt=""></div>
        </transition-group>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated zoomIn' leave-active-class='' appear appear-enter-class='animated zoomIn'>
            <div class='resume2' v-show='show' :key='3' animate-delay='0.8s'><img src="../../assets/images/resume2.png" alt=""></div>
        </transition>
        <div class="clock"><img src='../../assets/images/clock.png'></div>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeIn' leave-active-class='' appear appear-enter-class='animated fadeIn'>
            <div class='job' v-show='show' :key='4' animate-delay='0.8s'><p>求职岗位：web前端开发</p></div>
        </transition>
    </div>
</template>
<script>
export default {
    props:{
        show:Boolean //接收show
    },
    methods: {
        // 设置过渡进入之前的组件状态
        beforeEnter: (el) => {
            // console.log(el.getAttribute('animate-delay'));
            var delay = el.getAttribute('animate-delay');
            el.style.animationDelay = delay;
        }
    }
}
</script>
<style scoped>
    .peop{margin:1rem 0 0 1rem;}
    .peop img{height:0.5rem;}
    .jiantou{display: flex;justify-content: center;}
    .jiantou img{height:0.08rem;}
    .resume{display: flex;justify-content: center;margin-top:0.02rem;}
    .resume img{height:0.4rem;}
    .resume2{display: flex;justify-content: center;margin-top:0.1rem;}
    .resume2 img{height:0.2rem;}
    .clock{animation:wobble 2s infinite linear;position:absolute;bottom:1.3rem;left:50%;margin-left:-0.51rem;}
    .clock img{height:1.2rem;}
    .job{margin:2.4rem 0 0 0;}
    .job p{text-align: center;line-height:0.2rem;color:#fff;font-weigth:bold;}
    /*ipad min-width 768px*/
    @media screen and (min-width:768px){
        .peop{margin:0.5rem 0 0 1rem;}
        .peop img{height:0.4rem;}
        .jiantou img{height:0.06rem;}
        .resume img{height:0.3rem;}
        .resume2 img{height:0.2rem;}
        .clock{margin-left:-0.3rem;}
        .clock img{height:0.8rem;}
        .job{margin:1.6rem 0 0 0;}
    }
</style>
