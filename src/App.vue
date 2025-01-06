<!-- src/App.vue -->
<template>
   <div id="country">
       <CountrySelector></CountrySelector>
    </div>
</template>

<script>
import CountrySelector from './components/CountrySelector.vue';


export default {
    name: 'App',
    components: { CountrySelector }
};
</script>
