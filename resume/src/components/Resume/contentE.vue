<template>
    <div>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated bounceInLeft' leave-active-class='' appear appear-enter-class='animated bounceInLeft'>
            <div class='resume' v-show='showe' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class='tit' v-show='showe' :key='2' animate-delay='0.5s'>项目经历一</p>
        </transition>
        <transition-group v-on:before-enter='beforeEnter' enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class='sub_tit' v-show='showe' :key='3' animate-delay='0.5s'>2016.12-2017.3 敏兴集团产品管理系统</p>
            <p class='sub_tit' v-show='showe' :key='4' animate-delay='0.5s'>职责：负责公司前端页面的开发，与后台工程师协作，完成数据交互</p>
            <p class='sub_tit' v-show='showe' :key='5' animate-delay='0.5s'>项目描述：独立完成项目中产品列表、产品详情、用户登录详细信息、发送邮件等页面，后端用php开发，用到smarty完成商品列表到详情的跳转效果，前端使用jquery开发。</p>
        </transition-group>
    </div>
</template>
<script>
    export default{
        props:{
            showe:Boolean
        },
        methods:{
            beforeEnter:(el) => {
                var delay = el.getAttribute('animate-delay');
                el.style.animationDelay = delay;
            }
        }
    }
</script>
