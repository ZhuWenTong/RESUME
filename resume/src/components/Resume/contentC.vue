<template>
    <div>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated bounceInDown' leave-active-class='' appear appear-enter-class='animated bounceInDown'>
            <div class="resume" v-show='showc' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter="beforeEnter" enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class='tit' v-show='showc' :key='2' animate-delay='0.5s'>专业技能</p>
        </transition>
        <transition-group v-on:before-enter="beforeEnter" enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class='sub_tit' v-show='showc' :key='3' animate-delay='0.5s'>1.扎实的DIV+CSS布局功底</p>
            <p class='sub_tit' v-show='showc' :key='4' animate-delay='0.5s'>2.熟悉面向对象编程</p>
            <p class='sub_tit' v-show='showc' :key='5' animate-delay='0.5s'>3.熟练使用jQuery、Zepto等</p>
            <p class='sub_tit' v-show='showc' :key='6' animate-delay='0.5s'>4.熟练使用AJAX与后台交互</p>
            <p class='sub_tit' v-show='showc' :key='7' animate-delay='0.5s'>5.熟练使用vue+vuex+webpack+es6</p>
            <p class='sub_tit' v-show='showc' :key='8' animate-delay='0.5s'>6.可以解决各大浏览器兼容性问题</p>
            <p class='sub_tit' v-show='showc' :key='9' animate-delay='0.5s'>7.熟练使用sublime、HBuilder、Visual Studio Code</p>
            <p class='sub_tit' v-show='showc' :key='10' animate-delay='0.5s'>8.熟悉nodejs(express)</p>
            <p class='sub_tit' v-show='showc' :key='11' animate-delay='0.5s'>9.了解PHP,对数据库做增删改查操作</p>
            <p class='sub_tit' v-show='showc' :key='12' animate-delay='0.5s'>10.使用过svn和git版本管理系统</p>
        </transition-group>
    </div>
</template>
<script>
export default {
    props:{
        showc:Boolean
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


