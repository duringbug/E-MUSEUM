<template>
    <div id="search">
        <n-dropdown :options="options" :on-select="select">
            <slot name="search">
                <div class="flex items-center">
                    <el-icon size="25px" style="top:5px">
                        <Search />
                    </el-icon>
                </div>
            </slot>
        </n-dropdown>
        <RouterView></RouterView>
    </div>
</template>
<script lang="ts" setup>
import {
    NDropdown,
    DropdownOption,
    NIcon,
} from 'naive-ui';
import {
    ElIcon
} from 'element-plus'

import 'element-plus/dist/index.css';
import router from '../router';
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5';
import {
    User,
    Search
} from '@element-plus/icons-vue';
import {
    Component, h
} from 'vue'
const renderIcon = (icon: Component) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        })
    }
}
const options = [
    {
        label: '用户资料',
        key: 'profile',
        icon: renderIcon(UserIcon),
    },
    {
        label: '编辑用户资料',
        key: 'editProfile',
        icon: renderIcon(EditIcon),
    },
    {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutIcon),
    }
]
const select = function (key: string | number, option: DropdownOption) {
    if (key === 'profile') {
        router.push('/Person')
    }
    else if (key === 'editProfile') {
        router.push('/Edit')
    }
    else if (key === 'logout') {
    }
}
</script>
<style>
#search {
    position: absolute;
    background-color: inherit;
    height: 20px;
    width: 80px;
    top: 8px
}

.search_button {
    background-color: #fff;
    color: orange;
}
</style>