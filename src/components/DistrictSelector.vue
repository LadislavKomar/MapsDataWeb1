<template>
    <div>
        <label for="district"><strong>District/City:</strong></label>
        <select id="district">
            <option v-for="district in districts" :key="district" :value="district">
                {{ district }}
            </option>
        </select>
    </div>
</template>

<script>

export default {
    props: {
        districts: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style scoped>
select {
    font-size: 14px;
    width: 60%;
    height: 25px;
    margin-left: 10px;
    margin-top: 1%;
}
</style>