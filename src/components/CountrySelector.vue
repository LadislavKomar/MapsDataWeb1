<!-- src/components/CountrySelector.vue -->
<template>
  <div>
    <label for="country"><strong>Country:</strong></label>
    <select id="country" @change="onCountryChange">
      <option v-for="country in countries" :key="country.name" :value="country.name">
        {{ country.name }}
      </option>
    </select>
    <div v-if="selectedCountry">
     <img :src="flagUrl" alt="Country Flag" />
    </div>
    <div style="display: flex; font-size: 16px;" v-if="selectedCountry">
      <p>Capital: {{ selectedCountry.capital }}</p>
      <p>Population: {{ selectedCountry.population }}</p>
      <p>Area: {{ selectedCountry.area }} km²</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      selectedCountry: null,
      flagUrl: '',
    };
  },
  created() {
    this.fetchCountries();
    this.fetchFlag();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch('https://overpass-api.de/api/interpreter?data=[out:json];node["place"="country"];out;');
        const data = await response.json();
        this.countries = data.elements.map(country => ({
          name: country.tags.name,
          capital: country.tags.capital_city || 'N/A',
          population: country.tags.population || 'N/A',
          area: country.tags.sqkm || 'N/A',
          code: country.tags.ISO3166-1,
        })).sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },

    fetchFlag() {
         if (this.selectedCountry) {
          this.flagUrl = `https://flagcdn.com/w160/${this.selectedCountry.code.toLowerCase()}.png`; // URL format for flags
        }
      },

    onCountryChange(event) {
      const countryName = event.target.value;
      this.selectedCountry = this.countries.find(country => country.name === countryName);
      this.$emit('country-selected', countryName);
    },
  },
};
</script>

<style scoped>
select {
  font-size: 14px;
  width: 60%;
  height: 25px;
  margin-left: 10%;
  margin-top: 0%;
}
</style>
