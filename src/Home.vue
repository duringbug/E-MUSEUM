<template>
  <div class="common-layout">
    <el-container>
      <!-- Head -->
      <el-affix :offset="0" class="head">
        <KeepAlive>
          <el-header>
            <Head style="background-color: yellow;" :ifLogin="!Data.login" :getOnline="getOnline">
              <template #login>
                <RouterLink to="/Login">
                  <component :is="Data.login === false ? LoginButtom : null" />
                </RouterLink>
              </template>
              <template #return>
                <RouterLink to="/">
                  <ElIcon class="returnHouse" size="25px" :class="{ returnHouse2: !Data.login }">
                    <Home />
                  </ElIcon>
                </RouterLink>
              </template>
            </Head>
          </el-header>
        </KeepAlive>
      </el-affix>
      <!-- body -->
      <el-container>
        <el-aside width="200px" class="aside">
          <Menu :ifLogin="!Data.login"></Menu>
        </el-aside>
        <el-container class="show">
          <router-view>
            <Transition name="login_box">
              <div v-if="router.currentRoute.value.fullPath === '/Login'" class="login_backgroud">
                <div class="login_box">
                  <component :is="Login" :getOnline="getOnline" />
                </div>
              </div>
            </Transition>
            <KeepAlive>
              <component v-if="router.currentRoute.value.fullPath === '/Register'" :is="Register" />
            </KeepAlive>
            <component v-if="router.currentRoute.value.fullPath === '/Person'" :is="Person" />
            <component v-if="router.currentRoute.value.fullPath === '/Museum'" :is="Museum" :getOnline="getOnline" />
            <component v-if="router.currentRoute.value.fullPath === '/Edit'" :is="Edit"></component>
            <component v-if="router.currentRoute.value.fullPath === '/Comment'" :is="Comment"></component>
            <component v-if="router.currentRoute.value.fullPath === '/'" :is="Main" />
            <component v-if="router.currentRoute.value.fullPath === '/Team'" :is="Team"></component>
            <!-- \/[0-9]\//\/^[a-zA-Z0-9_-]$\//lock -->
          </router-view>
        </el-container>
      </el-container>
      <!-- foot -->
      <el-footer class="footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Head from './view/Head.vue';
import Menu from './components/Menu.vue';
import Carouel from './components/Carouel.vue';
import Footer from './components/Footer.vue';
import LoginButtom from './components/LoginButtom.vue';
import Register from './view/Register.vue';
import Main from './view/Main.vue';
import Login from './view/Login.vue';
// import Login from './login/login.vue';
import Person from './view/Person.vue';
import Museum from './view/Museum.vue';
import Edit from './view/Edit.vue';
import Comment from './view/Comment.vue';
import Team from './view/Team.vue';
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElAffix,
  ElButton,
  ElIcon,
  ElScrollbar
} from 'element-plus';
import {
  Home
} from '@vicons/ionicons5';
import {
  NScrollbar
} from 'naive-ui'
import axios from 'axios';
import { onActivated, onMounted, reactive, ref, toRefs } from 'vue';
import { tr } from 'date-fns/locale';
import router from './router';
import { before } from 'lodash';
import { onBeforeRouteUpdate } from 'vue-router';
// onActivated(() => {
//   if (false) {
//     let city = '江油'
//     city = encodeURI(city)
//     let api = "juhe/simpleWeather/query\?city=" + city + "\&key\=1017421300127b325a897827efe484ca"
//     console.log(api)
//     axios.get(api).then((res) => {
//       console.log(res);
//     })
//   }
// }),
onMounted(() => {
  getOnline()
  axios.defaults.withCredentials = true;
})
const getOnline = function () {
  axios.get("../E-MUSEUM/online", {
    params: {
      id: 0,
    }
  }).then((res) => {
    console.log(res.data)
    console.log("===========")
    if (res.data === 'ture') {
      Data.login = true
    }
    else {
      Data.login = false
    }
  })
}
defineExpose({ getOnline });
let Data = reactive({
  login: Boolean()
});
//login
</script>

<style>
body {
  background-image: none;
  background-color: rgb(79, 75, 75);
}

.returnHouse {
  position: absolute;
  margin-right: 20px;
}

.head {
  width: 100%;
  min-width: 1440px;
  height: 50px;
  background-color: grey;
}

.aside {
  min-height: 698px;
  position: relative;
  max-height: 1200px;
  left: 0;
  background-color: rgb(147, 141, 141);
}

.footer {
  width: 100%;
  min-width: 1440px;
  height: 50px;
  background-color: grey;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .3s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(-40px);
}

.slide-fade-leave-to {
  transform: translateY(-40px);
}


/* 分享链接盒子动画 为false则会执行显示动画过程从100px回到原点实现向上走 为true则为自己起点向下走*/
.overflde-fade-enter-active {
  transition: all .3s linear;
}

/* 
.login_backgroud {
  background-image: url(./assets/login.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: 100%;
  background-attachment: fixed;
} */
.login_backgroud {
  background-image: url(../public/demo9.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 1244px;
}

.login_box {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.show {
  min-width: 1244px;
}
</style>