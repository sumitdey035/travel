<template>
  <div>
    <h1>Add new post</h1>
    <new-post-form></new-post-form>
  </div>
</template>

<script>
import Form from '@/views/posts/Form.vue';

export default {
  components: {
    'new-post-form': Form,
  },
};
</script>
