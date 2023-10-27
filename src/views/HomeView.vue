<script setup>
import { onBeforeMount } from "vue";
import NavBar from "../components/NavBar.vue";
import FiltersComp from "../components/FiltersComp.vue";
import { useThemeStore } from "../stores/theme";
import { useCountriesStore } from "../stores/countries";
import CountriesContainer from "../components/CountriesContainer.vue";

const themeStore = useThemeStore();
const countriesStore = useCountriesStore();

onBeforeMount(async () => {
  await countriesStore.fetchAllCountries();
});
</script>

<template>
  <main>
    <NavBar />
    <FiltersComp />
    <CountriesContainer />
  </main>
</template>

<style scoped lang="scss"></style>
