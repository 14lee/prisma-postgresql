<template>
  <div class="h-60px p-2 w-full flex items-center border-b dark:border-gray-800 border-gray-200 justify-between">
    <div>nav</div>
    <div class="flex items-center flex-1 justify-end">
      <div class="m-2 cursor-pointer">
        <Icon v-show="$colorMode.value === 'dark'" name="ant-design:moon-outlined" @click="$colorMode.preference = 'light'"></Icon>
        <Icon v-show="$colorMode.value === 'light'" name="ant-design:sun-outlined" @click="$colorMode.preference = 'dark'"></Icon>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}

.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
