<!-- src/components/CountrySelector.vue -->
<template>
  <div>
    <label for="country-select">Country:</label>
    <select id="country-select" v-model="selectedCountry">
      <option v-for="country in countries" :key="country" :value="country">
        {{ country }}
      </option>
    </select>
    <p>Selected country: {{ selectedCountry }} </p>
  </div>
</template>

<script>
export default {
  name: 'CountrySelector',
  data() {
    return {
      countries: [],
      selectedCountry: ''
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch('https://overpass-api.de/api/interpreter?data=[out:json];node["place"="country"];out;');
        const data = await response.json();
        this.countries = this.extractCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
    extractCountries(data) {
      const countrySet = new Set();
      data.elements.forEach(element => {
        if (element.tags && element.tags.name) {
          countrySet.add(element.tags.name);
        }
      });
      return Array.from(countrySet).sort();
    }
  }
}
</script>

<style scoped>
select {
  position:relative;
  font-size: 14px;
  width: 60%;
  height: 20px;
  margin-left: 10px;
  margin-top: 0%;
}
</style>
