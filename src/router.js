import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import data from '../static/data.json'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
      props: {
        projects: data.config.projects
      }
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import(/* webpackChunkName: "profiles" */ './views/Profiles.vue'),
      props: {
        profiles: data.config.profiles
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
		return {
			selector: '#main',
			offset: {
				y: 75
			}
		}
	}
})
