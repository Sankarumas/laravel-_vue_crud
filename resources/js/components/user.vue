<template>
    <div>
        <h5 id="associating-form-text-with-form-controls">Name:</h5>
        <h6>{{ user.name }}</h6>
        <h5 id="associating-form-text-with-form-controls">Email:</h5>
        <p>{{ user.email }}</p>
        <h5 id="associating-form-text-with-form-controls">Password:</h5>
        <p>Password: {{ user.password }}</p>
        <router-link :to="`/users/${user.id}/edit`" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
    return {
    user: {}
    }
},
async created() {
    try {
    const response = await axios.get(`/api/users/${this.$route.params.id}`);
    this.user = response.data;
    } catch (error) {
    console.error(error);
    }
}
}
</script>