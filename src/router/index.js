import Vue from 'vue';
import VueRouter from 'vue-router';
import { router as Routers } from './route';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : Routers,
});

function BeforEach(to,from,next){
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
}

router.beforeEach(BeforEach)

export default router;