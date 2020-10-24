<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-md navbar-dark p-2">
            <div class="container">            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto" >
                        <li class="nav-item" v-for="menu in menu_items">
                            <a class="nav-link" v-bind:href="`#${menu.path}`">{{ menu.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name : 'Headers',
    props : ['menu_items'],

    created(){
        window.addEventListener('scroll',this.ScrollHandler());
    },

    methods : {
        ScrollHandler: function(){
            return (e)=>{
                var positions = $(window).scrollTop();
                if(positions>10){
                    $("nav").addClass('bg-glassy');
                }else{
                    $("nav").removeClass('bg-glassy');
                }
            }
        }
    }

}
</script>