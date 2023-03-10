import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import Button from './components/Button.vue'
import Home from './Home.vue'
import Main from './view/Main.vue'
import Login from './view/Login.vue'
import Register from './view/Register.vue'
import Vueaxios from 'vue-axios'
import Team from './view/Team.vue'
import axios from 'axios'

const Person = () => import('./view/Person.vue')
//Home
const home = createApp(Home)
home.use(router)
home.use(Vueaxios, axios)
home.mount('#home')
//Person
const person = createApp(Person)
person.use(router)
person.mount('#person')
//Login
const login = createApp(Login)
login.use(router)
login.mount('#login')
//Button
const button = createApp(Button)
button.use(router)
button.mount('#button')
//Main
const main = createApp(Main)
main.use(router)
//Register
const register = createApp(Register)
register.use(router)
//Team
const team = createApp(Team)
team.use(router)
