const App = Vue.component('App', {
    data: function(){ 
        return {
            items: [
                'Male',
                'Female',
            ],
        }
    },
    created: function() {},
    methods: {},
    template:
    `<v-app>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>`
})


