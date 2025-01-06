<!-- src/App.vue -->
<template>
<div id="app">
    <CountrySelector @country-selected="fetchDistricts" />
    <DistrictSelector :districts="districts" />
  </div>
</template>

<script>
import CountrySelector from './components/CountrySelector.vue';
import DistrictSelector from './components/DistrictSelector.vue';

export default {
    components: {
        CountrySelector,
        DistrictSelector,
    },
    data() {
        return {
            districts: [],
        };
    },
    methods: {
        async fetchDistricts(country) {
            const response = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];area[name="${country}"];(node[place="city"](area););out;`);
            const data = await response.json();
            this.districts = data.elements.map(element => element.tags.name);
        },
    },
};
</script>


<style>
#app {
    display: block;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-color: black;
    border-style: none;
    border-width: 1px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 5px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    height: 30%;
    width: 80%;
}
</style>