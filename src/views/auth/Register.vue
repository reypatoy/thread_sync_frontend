<template>  
    <div class="parent-container">
        <div class="container">
            <h1>Register</h1>
            <h1>{{firstNameState}}</h1>
            <form>
                <FormControl
                    :label="'FirstName'"
                    v-model="data.firstName"
                    type="text"
                    :error="error?.firstName"
                    @reset-error="resetNameError('firstName')"
                />
                <FormControl
                    :label="'LastName'"
                    v-model="data.lastName"
                    type="text"
                    :error="error?.lastName"
                    @reset-error="resetNameError('lastName')"
                />
                <FormControl
                    :label="'Email'"
                    v-model="data.email"
                    type="email"
                    :error="error?.email"
                    @reset-error="resetNameError('email')"
                />
                <FormControl
                    :label="'Password'"
                    v-model="data.password"
                    type="password"
                    :error="error?.password"
                    @reset-error="resetNameError('password')"
                />
                <FormControl
                    :label="'Confirm-Password'"
                    v-model="data.confirmPassword"
                    type="password"
                    :error="error?.confirmPassword"
                    @reset-error="resetNameError('confirmPassword')"
                />
            </form>
            <BasicButton 
                label="Register"
                type="button"
                @handle-click="validate"
            />
            <a href="/login">Already have an acount? back to login!</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import FormControl from '@/components/shared/formControl/FormControl.vue'
import BasicButton from '@/components/shared/buttons/basicButton.vue';
import  { RegisterSchema } from '@/schema/registerSchema'
import { mapActions, mapState } from 'vuex';

export default defineComponent({
    name: "Register",
    components: {
        FormControl,
        BasicButton
    },
    data() {
        return {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            error: {}
        }
    },
    methods: {
        ...mapActions('$_user',{
            register: 'register',
        }),
        validate() {
            const validate = RegisterSchema.safeParse(this.data)
            if(!validate.success){
               this.error['firstName']= validate.error.issues.find(issue => issue.path[0] === 'firstName')?.message
               this.error['lastName'] = validate.error.issues.find(issue => issue.path[0] === 'lastName')?.message
               this.error['email'] = validate.error.issues.find(issue => issue.path[0] === 'email')?.message
               this.error['password'] = validate.error.issues.find(issue => issue.path[0] === 'password' || issue.path.find(path => path === 'password'))?.message
               this.error['confirmPassword'] = validate.error.issues.find(issue => issue.path[0] === 'confirmPassword')?.message
            }else{
                this.error = {}
                this.register(this.data)
            }
        },
        resetNameError(field) {
            this.error[field] = ''
        }
    },
    computed: {
        ...mapState('$_user', {
            firstNameState: 'firstName'
        }),
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
