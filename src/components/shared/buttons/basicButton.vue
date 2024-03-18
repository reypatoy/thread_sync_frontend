<template>
    <button 
        class="basic-button" 
        :v-bind="$attrs"
        @click="$emit('handle-click')"
    >
            {{ label }}
    </button>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name: "BasicButton",
        props: {
            label: String
        }
    })
</script>

<style>
    .basic-button {
        background-color: #0080FF;
        padding: 10px 15px;
        border-radius: 10px;
        width: 100%;
        color: rgb(249, 249, 249);
    }
    .basic-button:hover {
        background-color: #0476e8;
    }
</style>