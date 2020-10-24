import Vue from 'vue';
import Headers from './Headers.vue';
import SectionHero from './SectionHeroProfile.vue';

const Components = [
    Headers,
    SectionHero,
];


Components.forEach(c=>{
    Vue.component(c.name,c);
})