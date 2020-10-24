<template>
    <section id="myHome" class="homeHero bg-hero-profile">
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        >
        </vue-particles>
        <div class="container" style="padding-top: 10%;">

            <div class="captions text-center">
                <div class="title-right">
                    <h1>HI</h1>
                </div>
                <div class="title-left">
                    <h1>
                        I am
                    </h1>
                    <h1>
                        Masmaspedo
                    </h1>
                    <vue-typed-js :cursorChar="_" :backSpeed="50" :typeSpeed="100" :loop="true" :shuffle="true" 
                    :strings="['A Web Developers','A Full Stack Developers','A Mobile Developers']">
                    <h1 class="typing" ></h1>
                    </vue-typed-js>
                </div>
                
            </div>


        </div>
    </section>
</template>

<script>

export default {
    name : 'SectionHeroProfile',
    created(){
      
    }
}
</script>