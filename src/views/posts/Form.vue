<template>
  <form id="new_post" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="post_title">Title</label>
      <input type="text" class="form-control" placeholder="Enter title" v-model="post.title">
    </div>
    <div class="form-group">
      <label for="post_description">Description</label>
      <textarea class="form-control" v-model="post.description"></textarea>
    </div>
    <div class="form-group">
      <label for="post_image_link">Image Link</label>
      <textarea class="form-control" v-model="post.image_link"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {
        title: '',
        description: '',
        tags: [],
        image_link: '',
      },
      is_new_post: this.$route.params.id === undefined,
    };
  },

  methods: {
    handleSubmit() {
      // eslint-disable-next-line
      this.is_new_post ? this.createPost() : this.updatePost();
    },

    createPost() {
      this.$http.post('https://travel-4adee.firebaseio.com/posts.json', this.post).then((response) => {
        window.location.href = `/#/posts/${response.body.name}`;
      });
    },

    updatePost() {
      this.$http.put(`https://travel-4adee.firebaseio.com/posts/${this.id}.json`, this.post).then(() => {
        window.location.href = `/#/posts/${this.id}`;
      });
    },

    findPost() {
      this.$http.get(`https://travel-4adee.firebaseio.com/posts/${this.id}.json`).then((response) => {
        this.post = response.body;
      });
    },
  },

  created() {
    if (!this.is_new_post) {
      this.findPost();
    }
  },
};
</script>
