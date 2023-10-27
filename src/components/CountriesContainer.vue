<script setup>
import { useCountriesStore } from "../stores/countries";
import { useThemeStore } from "../stores/theme";
import CountryItem from "./CountryItem.vue";

const countriesStore = useCountriesStore();
const themeStore = useThemeStore();
</script>

<template>
  <div class="countries-container">
    <CountryItem
      v-for="(country, index) in countriesStore.filteredCountries"
      :key="index"
      :country="country"
    />
  </div>
</template>

<style scoped lang="scss">
.countries-container {
  margin-top: v-bind("themeStore.general.countriesContainer.marginTop");
  padding-left: v-bind("themeStore.general.app.paddingSide");
  padding-right: v-bind("themeStore.general.app.paddingSide");

  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 48px;
  justify-content: space-between;

  @media (width < 768px) {
    margin-top: v-bind("themeStore.general.countriesContainer.marginTopMobile");
    padding-left: v-bind("themeStore.general.app.paddingSideMobile");
    padding-right: v-bind("themeStore.general.app.paddingSideMobile");
  }
}
</style>
