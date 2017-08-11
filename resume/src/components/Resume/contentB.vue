<template>
    <div>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <div class="resume" v-show='showb' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated flipInX' leave-active-class='' appear appear-enter-class='animated flipInX'>
            <div class='headpic' v-show='showb' :key='2' animate-delay='0.6s'><img src="../../assets/images/zuozhu.png" alt=""></div>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated pulse' leave-active-class='' appear appear-enter-class='animated pulse'>
            <p class="name" v-show='showb' :key='3' animate-delay='0.2s'>z  w  t</p>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class="exp" v-show='showb' :key='4' animate-delay='0.2s'>一 年 经 验</p>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class="exp" v-show='showb' :key='5' animate-delay='0.2s'>本 科</p>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class="exp" v-show='showb' :key='6' animate-delay='0.2s'>22 岁</p>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class="exp" v-show='showb' :key='7' animate-delay='0.2s'>薪 资 面 议</p>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <div class="build"  v-show='showb' :key='8' animate-delay='0.6s'><img src='../../assets/images/builds.png'></div>
        </transition>
    </div>
</template>
<script>
export default {
    props:{
        showb:Boolean
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
    .resume{display: flex;justify-content: center;margin-top:0.5rem;}
    .resume img{height:0.5rem;}
    .headpic{display: flex;justify-content: center;margin-top:0.3rem;}
    .headpic img{height:1.6rem;}
    p{font-size: 0.24rem;color:#fff;line-height: 0.2rem;text-align: center;font-family: '楷体';}
    .name{font-weight: bold;margin-top:0.4rem;}
    .exp{margin-top: 0.1rem;}
    .build{display: flex;}
    .build img{height:2rem;}
    @media screen and (min-width:768px){
        .resume img{height:0.4rem;}
        .headpic{margin-top:0.2rem;}
        .headpic img{height:1.1rem;}
        p{font-size: 0.16rem;line-height: 0.16rem;}
        .build img{height:1rem;}
    }
</style>
