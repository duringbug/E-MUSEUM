<template>
    <div class="login">
        <div class="form-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model.trim="username" required />
        </div>
        <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" v-model.trim="password" required />
        </div>
        <router-link to="/">
            <el-button type="primary" @click="onSubmit()">提交</el-button>
        </router-link>
        <router-link to="/Register">
            <el-button type="primary">点击注册</el-button>
        </router-link>
        <div v-if="show">
            <el-alert title="提交成功" type="success" @close="hello" show-icon effect="dark" />
        </div>
        <div v-else-if="mail">
            <el-alert title="验证码已发送至邮箱" type="success" @close="hello" show-icon effect="dark" />
        </div>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
            <span>Hi there!</span>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import 'element-plus/dist/index.css';
import Register from './Register.vue';
import {
    ElFormItem,
    ElInput,
    ElButton,
    ElForm,
    ElCol,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElSwitch,
    ElTimePicker,
    ElCheckbox,
    ElCheckboxGroup,
    ElRadio,
    ElRadioGroup,
    ElAlert,
    ElDrawer,
    ElDivider
} from 'element-plus'
import axios from 'axios';
import { routerKey } from 'vue-router';
import router from '../router';
onMounted(() => {
    axios.defaults.withCredentials = true;
})
// do not use same name with ref
const form = reactive({
    name: '',
    qqMail: '',
    date1: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const hello = () => {
}
let username = ''
let password = ''
const onSubmit = () => {
    console.log('submit!')
    console.log(form)
    console.log(show)
    show.value = true
    axios.post("../E-MUSEUM/Login/", {
        params: {
        }
    }).then((res) => {
        console.log(res)
        props.getOnline()
    })
}
let show = ref(false);
let mail = ref(false);
let drawer = ref(false);
//子调父组件方法
const props = defineProps({
    getOnline: {
        type: Function,
        default: Function,
        required: true,
    }
})
</script>
<style>
/* Set a default font size for the entire document */
html {
    font-size: 16px;
}

/* Set the background image and size */
/* Set a max width for the login form */
.login {
    position: absolute;
    backdrop-filter: blur(3px);
    /* max-width: 500px;
    margin: 0 auto; */
    width: 500px;
    height: 400px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 40px 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Adjust the layout for smaller screens */
@media (max-width: 768px) {
    .login {
        padding: 20px;
    }

    input[type='text'],
    input[type='password'] {
        font-size: 14px;
    }
}

/* Style the form inputs */
.el-input__wrapper {
    background-color: transparent;
}

.el-input__inner {
    background-color: transparent;
}

.el-form-item__label {
    color: #409eff;
    font-weight: 900;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type='text'],
input[type='password'] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: none;
}
</style>