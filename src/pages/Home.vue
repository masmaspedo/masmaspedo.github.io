<template>
    <div id="mainWrapper" >
        {{/** Headers */}}
        <Headers v-bind:menu_items="headers_menu" />
        {{/** Main */}}
        <main id="mainPages" style="min-height: 1550px;" >
            {{/** Section Hero Profile */}}
            <SectionHeroProfile />
            {{/** Section Profile About  */}}

                {{/** About me */}} {{/** My Skils */}}

            {{/** Section Services */}}

            {{/** Demo Work */}}

            {{/** Section Experience */}}

            {{/** Section Recent Works */}}

            {{/** Section Activity */}}

            {{/** Section Get In touch */}}
        </main>
        {{/** Footer */}}
    </div>
</template>

<script>
export default {
    name : 'Home',
    
    data : function(){
        return {
            headers_menu : [
                {
                    path : 'myHome',
                    title : 'Home',
                },
                {
                    path : 'myAbout',
                    title : 'About',
                },
                {
                    path : 'myServices',
                    title : 'Services',
                },
                {
                    path : 'myDemo',
                    title : 'MyStuff',
                },
                {
                    path : 'myExperience',
                    title : 'Experience',
                },
                {
                    path : 'myRecent',
                    title : 'Active Development',
                },
                {
                    path : 'myContact',
                    title : 'Contact',
                }

            ],
        }
    }
}
</script>