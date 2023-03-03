<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" class="box-sizing">
        <el-radio-button :label="true"><el-icon>
                <Fold />
            </el-icon></el-radio-button>
        <el-radio-button :label="false"><el-icon>
                <Expand />
            </el-icon></el-radio-button>
    </el-radio-group>
    <el-scrollbar>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose" background-color="transparent" router>
            <el-sub-menu index="1" :disabled="props.ifLogin">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2" :disabled="props.ifLogin">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" :disabled="props.ifLogin">
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4" :disabled="props.ifLogin">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
            <!-- 好友聊天的入口 -->
            <el-sub-menu index="/Comment" :disabled="props.ifLogin">
                <template #title>
                    <el-icon>
                        <Comment />
                    </el-icon>
                    <span>Navigator Five</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/Comment">
                        item one
                    </el-menu-item>
                    <el-menu-item index="/Comment">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="/Comment">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="/Comment">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="6" :disabled="props.ifLogin">
                <el-icon>
                    <Share />
                </el-icon>
                <template #title>Navigator Six</template>
            </el-menu-item>
            <el-menu-item index="/Museum" :disabled="props.ifLogin">
                <el-icon>
                    <Notebook />
                </el-icon>
                <template #title>
                    NoteBook
                </template>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css';
import { onMounted, ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Comment,
    Share,
    Notebook,
    Fold,
    Expand,
} from '@element-plus/icons-vue'
import {
    ElRadioGroup,
    ElRadioButton,
    ElMenu,
    ElSubMenu,
    ElIcon,
    ElMenuItemGroup,
    ElMenuItem,
    ElScrollbar,
    ElBadge
} from 'element-plus';
import router from '../router';
import { RouterLink } from 'vue-router';
const props = defineProps({
    ifLogin: Boolean,
    getOnline: {
        type: Function,
        default: Function,
        required: true,
    }
})
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key)
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
.box-sizing {
    width: 200px;
}

.el-radio-button__inner {
    width: 100px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

a:-webkit-any-link {
    color: var(--el-menu-text-color);
    ;
}
</style>