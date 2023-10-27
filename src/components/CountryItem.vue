<script setup>
import { useThemeStore } from "../stores/theme";

const themeStore = useThemeStore();

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="country-item">
    <div class="flag">
      <img :src="country.flags.svg" :alt="country.name.common" />
    </div>
    <div class="description-container">
      <h1>{{ country.name.common }}</h1>
      <div class="more-info">
        <p><span>Population: </span>{{ country.population }}</p>
        <p><span>Region: </span>{{ country.region }}</p>
        <p>
          <span>Capital: </span>{{ country.capital ? country.capital[0] : "-" }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.country-item {
  cursor: pointer;
  min-height: 320px;

  background: v-bind("themeStore.theme.elements");
  border-radius: 8px;
  box-shadow: v-bind("themeStore.theme.navbarShadow");
  transition: all 0.3s ease;

  &:hover {
    background: v-bind("themeStore.theme.elementHover");
  }

  .flag {
    width: 100%;
    height: 140px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  .description-container {
    padding: 24px;

    h1 {
      font-size: 20px;
      margin-bottom: 6px;
    }

    .more-info {
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;

      span {
        font-weight: 600;
      }
    }
  }
}
</style>
