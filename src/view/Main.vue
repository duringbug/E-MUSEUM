<template>
    <slot name="Main">
        <el-main>
            <Carouel>
                <template #carousel>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <ElCarouselItem v-for="image in imgList" :key="image.id">
                            <div style="height: 200px;background-color: inherit;">
                                <div
                                    style="display: inline-block;height: 197px; width: 360px;box-shadow: 5px 5px 10px 10px #666">
                                    <img :src=image.img style=" height: 100%;width: 100%;">
                                </div>
                            </div>
                        </ElCarouselItem>
                    </el-carousel>
                </template>
            </Carouel>
            <Carouel>
                <template #carousel>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <ElCarouselItem v-for="image in imgList" :key="image.id">
                            <div style="height: 200px;background-color: inherit;">
                                <div
                                    style="display: inline-block;height: 197px; width: 360px;box-shadow: 5px 5px 10px 10px #666">
                                    <img :src=image.img style=" height: 100%;width: 100%;">
                                </div>
                            </div>
                        </ElCarouselItem>
                    </el-carousel>
                </template>
            </Carouel>
            <Carouel>
                <template #carousel>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <ElCarouselItem v-for="image in imgList" :key="image.id">
                            <div style="height: 200px;background-color: inherit;">
                                <div
                                    style="display: inline-block;height: 197px; width: 360px;box-shadow: 5px 5px 10px 10px #666">
                                    <img :src=image.img style=" height: 100%;width: 100%;">
                                </div>
                            </div>
                        </ElCarouselItem>
                    </el-carousel>
                </template>
            </Carouel>
            <Carouel>
                <template #carousel>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <ElCarouselItem v-for="image in imgList" :key="image.id">
                            <div style="height: 200px;background-color: inherit;">
                                <div
                                    style="display: inline-block;height: 197px; width: 360px;box-shadow: 5px 5px 10px 10px #666">
                                    <img :src=image.img style=" height: 100%;width: 100%;">
                                </div>
                            </div>
                        </ElCarouselItem>
                    </el-carousel>
                </template>
            </Carouel>
            <Carouel>
                <template #carousel>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <ElCarouselItem v-for="image in imgList" :key="image.id">
                            <div style="height: 200px;background-color: inherit;">
                                <div
                                    style="display: inline-block;height: 197px; width: 360px;box-shadow: 5px 5px 10px 10px #666">
                                    <img :src=image.img style=" height: 100%;width: 100%;">
                                </div>
                            </div>
                        </ElCarouselItem>
                    </el-carousel>
                </template>
            </Carouel>
        </el-main>
    </slot>
</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css';
import {
    ElMain,
    ElCarouselItem,
    ElCarousel
} from 'element-plus'
import Carouel from '../components/Carouel.vue'
import { reactive } from 'vue';
let imgList = reactive([
    { id: 1, img: "../demo1.jpg" },
    { id: 2, img: "../demo2.jpg" },
    { id: 3, img: "../demo3.jpg" },
    { id: 4, img: "../demo4.jpg" },
    { id: 5, img: "../demo5.jpg" },
    { id: 6, img: "../demo6.jpg" },
    { id: 7, img: "../demo7.jpg" },
    { id: 8, img: "../demo8.jpg" },
    { id: 9, img: "../demo9.jpg" },
    { id: 10, img: "../demo10.jpg" },
    { id: 11, img: "../demo11.jpg" },
])
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>