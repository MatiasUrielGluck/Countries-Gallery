<script setup>
import IconLight from "../components/icons/IconLight.vue";
import IconDark from "../components/icons/IconDark.vue";
import { useThemeStore } from "../stores/theme";
const store = useThemeStore();
</script>

<template>
  <nav>
    <h1>Where in the world?</h1>
    <div class="theme-controller" @click="store.changeTheme">
      <div class="icon">
        <IconLight v-if="store.theme.name === 'Light'" />
        <IconDark v-else-if="store.theme.name === 'Dark'" />
      </div>
      <p>{{ store.theme.name }} Mode</p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: v-bind("store.general.navbar.height");
  padding-right: v-bind("store.general.app.paddingSide");
  padding-left: v-bind("store.general.app.paddingSide");
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: v-bind("store.theme.elements");

  box-shadow: v-bind("store.theme.navbarShadow");

  @media (width < 768px) {
    padding-right: v-bind("store.general.app.paddingSideMobile");
    padding-left: v-bind("store.general.app.paddingSideMobile");
  }

  h1 {
    @media (width < 768px) {
      font-size: 18px;
    }
  }

  .theme-controller {
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      font-weight: 600;
      font-size: 18px;

      @media (width < 768px) {
        font-size: 16px;
      }
    }

    .icon {
      margin-top: 4px;
    }
  }
}
</style>
