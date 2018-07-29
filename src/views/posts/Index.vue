<template>
  <div class="container">
    <div class="row">
      <div v-for="post in posts" :key="post.id">
        <div class="col-sm-4">
          <div class="card" style="width: 21rem;">
            <img class="card-img-top" v-bind:src="post.image_link" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text">{{post.description | snippet}}</p>
              <router-link v-bind:to="'/posts/' + post.id" class="btn btn-primary">
                Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
  },

  created() {
    this.$http.get('https://travel-4adee.firebaseio.com/posts.json')
      .then((response) => {
        const posts = [];
        // eslint-disable-next-line
        for (const key in response.body) {
          if (response.body[key]) {
            response.body[key].id = key;
            posts.push(response.body[key]);
          }
        }
        this.posts = posts;
      });
  },
};
</script>
