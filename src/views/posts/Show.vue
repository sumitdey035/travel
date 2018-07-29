<template>
  <div class="card mb-3">
    <img class="card-img-top" v-bind:src="post.image_link" alt="Card image cap" height="400px">
    <div class="card-body">
      <h5 class="card-title">
        {{post.title}}
        <router-link v-bind:to="'/posts/' + this.id +'/edit'">
          <font-awesome-icon icon="edit" />
        </router-link>
      </h5>
      <p class="card-text">{{post.description}}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
    };
  },

  methods: {
  },

  created() {
    this.$http.get(`https://travel-4adee.firebaseio.com/posts/${this.id}.json`).then((response) => {
      this.post = response.body;
    });
  },
};
</script>
