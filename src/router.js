import Vue from 'vue';
import Router from 'vue-router';
import Posts from './views/posts/Index.vue';
import NewPost from './views/posts/New.vue';
import ShowPost from './views/posts/Show.vue';
import EditPost from './views/posts/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Posts },
    { path: '/posts/new', component: NewPost },
    { path: '/posts/:id', component: ShowPost },
    { path: '/posts/:id/edit', component: EditPost },
  ],
});
