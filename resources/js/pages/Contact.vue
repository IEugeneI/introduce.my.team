<template>
    <div class="container mt-5">
        <h3 class="text-center">Leave your contacts and our manager will contact you</h3>
        <b-container class="col-12 col-md-5 bg-secondary bg-gradient form-label-text mt-3">
            <b-form-group label="Your name" label-for="name" label-align="center" class="mt-1">
                <b-form-input id="name" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group label="Your email" label-for="email" label-align="center" class="mt-1">
                <b-form-input id="email" v-model="email"></b-form-input>
            </b-form-group>
            <b-form-group label="The main topic of the appeal" label-for="description" label-align="center" class="mt-1">
                <b-form-textarea
                    id="description"
                    v-model="description"
                    rows="3"
                    max-rows="6">
                </b-form-textarea>
            </b-form-group>
            <b-button text="Button" variant="success" class="col-12 mt-3 mb-3">Send</b-button>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            invalidFeedback: '',
            name: '',
            email: '',
            description: ''
        }
    },
}
</script>

<style scoped>
.form-label-text{
    color: white !important;
}
</style>
