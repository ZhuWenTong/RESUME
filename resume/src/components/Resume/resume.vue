<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ConA :show='show'></ConA>
            </div>
            <div class="swiper-slide">
                <ConB :showb='showb'></ConB>
            </div>
            <div class="swiper-slide">
                <ConC :showc='showc'></ConC>
            </div>
            <div class="swiper-slide">
                <ConD :showd='showd'></ConD>
            </div>
            <div class="swiper-slide">
                <ConE :showe='showe'></ConE>
            </div>
            <div class="swiper-slide">
                <ConF :showf='showf'></ConF>
            </div>
            <div class="swiper-slide">
                <ConG :showg='showg'></ConG>
            </div>
            <div class="swiper-slide">
                <ConH :showh='showh'></ConH>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';

import ConA from './contentA.vue';
import ConB from './contentB.vue';
import ConC from './contentC.vue';
import ConD from './contentD.vue';
import ConE from './contentE.vue';
import ConF from './contentF.vue';
import ConG from './contentG.vue';
import ConH from './contentH.vue';
export default {
    data() {
        return {
            show: true,
            showb: false,
            showc: false,
            showd: false,
            showe: false,
            showf: false,
            showg: false,
            showh: false
        }
    },
    mounted() {
        var self = this;
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            //autoplay:3000,
            onSlideChangeEnd: (swiper) => {
                //console.log(swiper.activeIndex)
                let activeIndex = swiper.activeIndex;
                self.show = activeIndex == 0 ? true : false;
                self.showb = activeIndex == 1 ? true : false;
                self.showc = activeIndex == 2 ? true : false;
                self.showd = activeIndex == 3 ? true : false;
                self.showe = activeIndex == 4 ? true : false;
                self.showf = activeIndex == 5 ? true : false;
                self.showg = activeIndex == 6 ? true : false;
                self.showh = activeIndex == 7 ? true : false;
            }
        })
    },
    components: {
        ConA, ConB, ConC, ConD, ConE, ConF, ConG, ConH
    }
}
</script>
<style>
.swiper-container {
    height: 100%;
}

.swiper-wrapper {
    height: 100%;
}

.swiper-slide {
    height: 100%;
}
</style>