<template>
    <div>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated bounceInRight' leave-active-class='' appear appear-enter-class='animated bounceInRight'>
            <div class='resume' v-show='showf' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class='tit' v-show='showf' :key='2' animate-delay='0.5s'>项目经历二</p>
        </transition>
        <transition-group v-on:before-enter='beforeEnter' enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class='sub_tit' v-show='showf' :key='3' animate-delay='0.5s'>2017.3-2017.6 敏兴集团合同监察系统</p>
            <p class='sub_tit' v-show='showf' :key='4' animate-delay='0.5s'>职责： 完善客户提出的功能</p>
            <p class='sub_tit' v-show='showf' :key='5' animate-delay='0.5s'>项目描述：使用vue、vuex、es6、webpack开发，并编写少量后台PHP代码</p>
        </transition-group>
    </div>
</template>
<script>
    export default{
        props:{
            showf:Boolean
        },
        methods:{
            beforeEnter:(el) => {
                var delay = el.getAttribute('animate-delay');
                el.style.animationDelay = delay;
            }
        }
    }
</script>
