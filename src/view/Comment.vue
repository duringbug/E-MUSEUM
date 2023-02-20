<template>
    <h2>Comment.vue</h2>
    <Input @send="send" style="height: 20px;"></Input>
    <button @click="close()">关闭</button>
    <button @click="open()">开启</button>
    {{ msg }}
</template>
<script lang="ts" setup>
import { ms } from 'date-fns/locale';
import { emit } from 'process';
import { reactive, ref } from 'vue';
import Input from '../components/Input.vue';
import { useWebSocket } from '../hooks';
import { ChatGPTAPI } from 'chatgpt';
import { Server } from "socket.io";
import io from 'socket.io-client'
/**
 * chatapi
 */
// const api = new ChatGPTAPI({
//     apiKey: process.env.OPENAI_API_KEY,
//     debug: true
// })
// const res = await api.sendMessage('what is the answer to the universe?', {
//     promptPrefix: `You are ChatGPT, a large language model trained by OpenAI. You answer as concisely as possible for each response (e.g. don’t be verbose). It is very important that you answer as concisely as possible, so please remember this. If you are generating a list, do not have too many items. Keep the number of items short.
// Current date: ${new Date().toISOString()}\n\n`
// })
/**
 * websocket
 */
const data = reactive({
    user: '',
    massage: '',
    massages: [],
    // socket: io(),
    ws: useWebSocket(handleMessage)
})
function sendMassage(e: Event) {
    e.preventDefault()
}
//
const msg = ref('')
const send = (v: string) => {
    msg.value = v;
    //ws传数据
    if (msg.value != '') {
        data.ws.send(JSON.stringify({
            msg: msg
        }))
    }
}
//ws收数据
function handleMessage(this: WebSocket, ev: Event) {
    console.log(ev)
}
//关闭
const close = () => {
    data.ws.close();
    // data.socket.close()
}
//开启
const open = () => {
    data.ws = useWebSocket(handleMessage)
    // data.socket.open()
}
</script>
<style></style>