<template>  
    <div class="form-control">
        <label v-if="label">{{label}}</label>
        <input 
            :class="[error ? 'border-red' : '', 'input']" 
            v-bind="$attrs"
            :value="modelValue"
            @input="[
                $emit('update:modelValue', $event.target.value), 
                $emit('reset-error')
            ]"
            />
        <span class="error" v-if="error">{{ error }}</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FormControl",
    props: {
        label: String,
        modelValue: String,
        error: String
    }
})
</script>

<style>
    .form-control{
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }
    .input{
        width: 400px;
        border: solid 1px gray;
        padding: 5px;
        border-radius: 5px;
    }
    .input:focus {
        outline: none;
        box-shadow: 0 0 0 0.3px #0080FF;
    }
    .error {
        color: red;
        font-size: 10px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .border-red {
        border-color: red;
    }
</style>
