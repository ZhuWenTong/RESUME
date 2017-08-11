<template>
    <div>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated bounceInRight' leave-active-class='' appear appear-enter-class='animated bounceInRight'>
            <div class='resume' v-show='showd' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class='tit' v-show='showd' :key='2' animate-delay='0.5s'>工作经验</p>
        </transition>
        <transition-group v-on:before-enter='beforeEnter' enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class='sub_tit' v-show='showd' :key='3' animate-delay='0.5s'>2016.1-至今 敏兴集团联岭针织有限公司</p>
            <p class='sub_tit' v-show='showd' :key='4' animate-delay='0.5s'>岗位：前端开发</p>
            <p class='sub_tit' v-show='showd' :key='5' animate-delay='0.5s'>职责：负责公司前端页面的开发，与后台工程师协作，完成数据交互，编写少量服务器代码(php)</p>
        </transition-group>
    </div>
</template>
<script>
    export default{
        props:{
            showd:Boolean
        },
        methods:{
            beforeEnter:(el) => {
                var delay = el.getAttribute('animate-delay');
                el.style.animationDelay = delay;
            }
        }
    }
</script>
