<template>
    <div class="layout-container">
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
    name: "Layout",
    data() {
        return {
            
        }
    },
    computed: {

    },
    created() {

    },
    methods: {

    }
})
</script>

<style scoped>
    .layout-container {
        height: 100vh;
        width: 100%;
        background-color: antiquewhite;
    }
</style>