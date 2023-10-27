import { defineStore } from "pinia";
import countriesApi from "../api/countries";

export const useCountriesStore = defineStore({
  id: "countries",
  state: () => ({
    countries: [],
    filteredCountries: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async fetchAllCountries() {
      const res = await countriesApi.get("/all");
      this.countries = res.data;
      this.filteredCountries = res.data;
    },

    filterCountries(query = "", region = "") {
      this.filteredCountries = this.countries.filter((country) => {
        if (!region) {
          return country.name.common
            .toLowerCase()
            .includes(query.toLowerCase());
        }
        return (
          country.name.common.toLowerCase().includes(query.toLowerCase()) &&
          country.region === region
        );
      });
    },
  },
});
