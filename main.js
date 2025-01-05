Vue.component("treeselect", window.VueTreeselect.Treeselect);

new Vue({
  el: "#country",
  data() {
    return {
      selectedCountry: null,
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      const response = await fetch(
        'https://overpass-api.de/api/interpreter?data=[out:json];node["place"="country"];out;'
      );
      const data = await response.json();
      this.countries = data.elements
        .map((country) => ({
          id: country.id,
          label: country.tags.name,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    },
  },
});
