<script setup>
import { ref, watch } from "vue";
import { useThemeStore } from "../stores/theme";
import { useCountriesStore } from "../stores/countries";
import IconSearchLight from "../components/icons/IconSearchLight.vue";
import IconSearchDark from "../components/icons/IconSearchDark.vue";
import IconArrowDownLight from "../components/icons/IconArrowDownLight.vue";
import IconArrowDownDark from "../components/icons/IconArrowDownDark.vue";

const themeStore = useThemeStore();
const countriesStore = useCountriesStore();

const searchQuery = ref("");
const selectedRegion = ref("");
const dropdownOpen = ref(false);
const filterText = ref("Filter by Region");

watch(searchQuery, () => {
  countriesStore.filterCountries(searchQuery.value, selectedRegion.value);
});

const onSelectRegion = (region) => {
  if (!region) {
    filterText.value = "Filter by Region";
  } else filterText.value = region;

  selectedRegion.value = region;
  countriesStore.filterCountries(searchQuery.value, selectedRegion.value);
};
</script>

<template>
  <div class="filters-container">
    <div class="searchbar">
      <div class="icon">
        <IconSearchLight v-if="themeStore.theme.name === 'Light'" />
        <IconSearchDark v-else-if="themeStore.theme.name === 'Dark'" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        v-model="searchQuery"
      />
    </div>

    <div
      class="filter-region"
      @click="dropdownOpen = !dropdownOpen"
      @focusout="dropdownOpen = false"
      tabindex="0"
    >
      <div class="filter-box">
        <p>{{ filterText }}</p>
        <IconArrowDownLight v-if="themeStore.theme.name === 'Light'" />
        <IconArrowDownDark v-else-if="themeStore.theme.name === 'Dark'" />
      </div>
      <div :class="`dropdown-container ${dropdownOpen ? 'open' : ''}`">
        <div class="option" @click="onSelectRegion('')">All</div>
        <div class="option" @click="onSelectRegion('Africa')">Africa</div>
        <div class="option" @click="onSelectRegion('Americas')">Americas</div>
        <div class="option" @click="onSelectRegion('Asia')">Asia</div>
        <div class="option" @click="onSelectRegion('Europe')">Europe</div>
        <div class="option" @click="onSelectRegion('Oceania')">Oceania</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters-container {
  z-index: 99;
  position: fixed;
  width: 100%;
  padding-top: v-bind("themeStore.general.filters.paddingTopBottom");
  padding-bottom: v-bind("themeStore.general.filters.paddingTopBottom");
  top: 72px;
  left: 0;
  padding-left: v-bind("themeStore.general.app.paddingSide");
  padding-right: v-bind("themeStore.general.app.paddingSide");
  background: v-bind("themeStore.theme.background");

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  @media (width < 768px) {
    flex-flow: column nowrap;
    padding-left: v-bind("themeStore.general.app.paddingSideMobile");
    padding-right: v-bind("themeStore.general.app.paddingSideMobile");
    gap: 24px;
  }

  .searchbar {
    position: relative;

    @media (width < 768px) {
      width: 100%;
    }

    .icon {
      position: absolute;
      top: 15px;
      left: 8px;
    }

    input {
      padding: 0 32px;
      height: 48px;
      width: 380px;
      background: v-bind("themeStore.theme.elements");
      color: v-bind("themeStore.theme.text");
      border: none;
      box-shadow: v-bind("themeStore.theme.navbarShadow");
      border-radius: 6px;

      @media (width < 768px) {
        width: 100%;
      }

      &::placeholder {
        color: v-bind("themeStore.theme.text");
      }

      &:focus {
        outline: none;
      }
    }
  }

  .filter-region {
    position: relative;
    cursor: pointer;
    width: 180px;
    height: 48px;
    background: v-bind("themeStore.theme.elements");
    box-shadow: v-bind("themeStore.theme.navbarShadow");
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 18px;

    @media (width < 768px) {
      align-self: flex-start;
    }

    .filter-box {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    .dropdown-container {
      position: absolute;
      top: 52px;
      left: 0;
      background: v-bind("themeStore.theme.elements");
      width: 100%;
      box-shadow: v-bind("themeStore.theme.navbarShadow");
      border-radius: 6px;
      padding: 10px 0;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      opacity: 0;
      transform: translateY(-10px);
      visibility: hidden;
      transition: all 0.3s ease;

      &.open {
        visibility: visible;
        opacity: 100%;
        transform: translateY(0);
      }

      .option {
        padding: 8px 18px;
        transition: all 0.3s ease;

        &:hover {
          background: v-bind("themeStore.theme.elementHover");
        }
      }
    }
  }
}
</style>
