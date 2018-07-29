<template>
  <div>
    <h1>Edit post</h1>
    <edit-post-form></edit-post-form>
  </div>
</template>

<script>
import Form from '@/views/posts/Form.vue';

export default {
  components: {
    'edit-post-form': Form,
  },
};
</script>
