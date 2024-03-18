<template>
    <div class="parent-container">
        <div class="container">
            <h1>Login</h1>
            <form>
                <FormControl
                    :label="'email'"
                />
                <FormControl
                    :label="'Password'"
                />
            </form>

            <BasicButton
                label="Login"
            />
            <a href="/register">Create an account!</a>
        </div>
    </div>
</template>

<script>
import BasicButton from '@/components/shared/buttons/basicButton.vue';
import FormControl from '@/components/shared/formControl/FormControl.vue';
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Login',
        components: {
            BasicButton,
            FormControl
        }
    })
</script>

<style>
    .parent-container{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: min-content;
        padding: 50px;
    }
    .container{
        padding: 2rem 3rem;
        border: solid gray 1px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        align-items: center;
    }
    a:hover {
        background-color: white;
        text-decoration: underline;
    }
</style>