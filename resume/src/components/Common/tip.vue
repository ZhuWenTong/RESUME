<template>
    <div class='img'>
        <img src="../../assets/images/tip.png" alt="">
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    @keyframes tip{
        0%{
            opacity: 0;
            transform: translateY(0);
        }
        50%{
            opacity: 1;
        }
        80%{
            opacity: 0;
            transform: translateY(-0.16rem);
        }
        100%{
            transform: translateY(0.16rem);
            opacity: 0
        }
    }
    .img{position:fixed;bottom:0.02rem;left:50%;margin-left:-0.15rem;animation: tip 1s infinite linear;}
    .img img{width:0.3rem;}
    @media screen and (min-width:768px){
        .img img{width:0.2rem;}
    }
</style>