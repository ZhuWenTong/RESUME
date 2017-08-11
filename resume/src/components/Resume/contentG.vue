<template>
    <div>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated bounceInLeft' leave-active-class='' appear appear-enter-class='animated bounceInLeft'>
            <div class='resume' v-show='showg' :key='1' animate-delay='0.3s'><img src="../../assets/images/resume3.png" alt=""></div>
        </transition>
        <transition v-on:before-enter='beforeEnter' enter-active-class='animated fadeInLeft' leave-active-class='' appear appear-enter-class='animated fadeInLeft'>
            <p class='tit' v-show='showg' :key='2' animate-delay='0.5s'>自我描述</p>
        </transition>
        <transition-group v-on:before-enter='beforeEnter' enter-active-class='animated fadeInRight' leave-active-class='' appear appear-enter-class='animated fadeInRight'>
            <p class='sub_tit' v-show='showg' :key='3' animate-delay='0.5s'>1.有良好的编程习惯，熟悉各种交互效果</p>
            <p class='sub_tit' v-show='showg' :key='4' animate-delay='0.5s'>2.对web技术有强烈兴趣，有优秀的学习能力和强烈的进去心</p>
            <p class='sub_tit' v-show='showg' :key='5' animate-delay='0.5s'>3.性格乐观，为人随和，适应能力强</p>
            <p class='sub_tit' v-show='showg' :key='6' animate-delay='0.5s'>4.能够承担较大的工作压力，吃苦耐劳</p>
            <p class='sub_tit' v-show='showg' :key='7' animate-delay='0.5s'>5.具有较强的团队精神，工作积极进取，态度认真</p>
            <p class='sub_tit' v-show='showg' :key='8' animate-delay='0.5s'>6.会用100%的热情和精力投入到工作中</p>
            <p class='sub_tit' v-show='showg' :key='9' animate-delay='0.5s'>7.希望精通前端开发，往后端发展，成为全栈工程师</p>
        </transition-group>
    </div>
</template>
<script>
    export default{
        props:{
            showg:Boolean
        },
        methods:{
            beforeEnter:(el) => {
                var delay = el.getAttribute('animate-delay');
                el.style.animationDelay = delay;
            }
        }
    }
</script>
