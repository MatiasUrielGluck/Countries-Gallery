<script setup>
import { watch } from "vue";
import { useThemeStore } from "./stores/theme";
const store = useThemeStore();

const setGlobalStyles = () => {
  document.body.style.background = store.theme.background;
  document.body.style.color = store.theme.text;
};

setGlobalStyles();

watch(store, () => {
  setGlobalStyles();
});
</script>

<template>
  <router-view />
</template>
