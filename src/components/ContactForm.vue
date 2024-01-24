<template>
    <div class="container">
        <form @submit.prevent="submitForm">
  <div class="mb-3">
    <label for="name" class="form-label">Your Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="data.name">
    <div id="nameHelp" class="form-text">Insert your name</div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="data.email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">your address</label>
    <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="data.address">
    <div id="addressHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">your Message</label>
    <textarea class="form-control" id="message" cols="30" rows="10" v-model="data.message"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-info">Reset</button>
</form>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import axios from "axios";

    export default {
        name: 'ContactForm',
        
        data() {
            return {
                store,
                data: {
                    name: '',
                    email: '',
                    address: '',
                    message: '',
                }
            }
        },

        methods: {
            submitForm() {

                axios.post(`${this.store.apiUrl}/contacts`, this.data).then((res) => {
                    console.log(res.data);
                    this.name = '';
                    this.email = '';
                    this.address = '';
                    this.message = '';
                }).catch((err) => {
                    console.log('error', err);
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>