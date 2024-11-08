Vue.component('Navbar', {
    data: function(){ 
            const srcs = {
                1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            }
          return {
            autoUpdate: true,
            friends: ['Sandra Adams', 'Britta Holt'],
            isUpdating: false,
            name: 'Midnight Crew',
            people: [
              { header: 'Group 1' },
              { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
              { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
              { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
              { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
              { divider: true },
              { header: 'Group 2' },
              { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
              { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
              { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
              { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
            ],
            search:'',
            items: [
                // {
                //   icon: 'mdi-home',
                //   text: 'Home',
                //   route:'/',
                // },
                {
                  icon: 'mdi-widgets',
                  text: 'Combo Box',
                  route:'/Combo_box',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Button',
                  route:'/Button',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Button Group',
                  route:'/BtnGroup',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Checkbox',
                  route:'/Checkbox',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Floating Action Button',
                  route:'/Floating_action_button',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Radio Button',
                  route:'/Radio_button',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Rating',
                  route:'/Rating',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Select',
                  route:'/Select',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Slider',
                  route:'/Slider',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Switch',
                  route:'/Switch',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Text Field',
                  route:'/Text_field',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Transfer List',
                  route:'/Transfer_List',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Toggle Button',
                  route:'/Toggle_Button',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'List',
                  route:'/List',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Table',
                  route:'/Table',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Tooltip',
                  route:'/Tooltip',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Dialogs',
                  route:'/Dialogs',
                },
                {
                  icon: 'mdi-widgets',
                  text: 'Accordion',
                  route:'/Accordion',
                },
              ],
            title: 'The summer breeze',
          }
          
    },
    created: function() {},
    methods: {},
    template:
    `<v-app-bar height="75" color="blue lighten-3" elevation="0" app clipped-left permanent>
        <v-app-bar-title>
            <v-img src="assets/t-dash-logo.png" height="60" width="220"></v-img>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar flat dense rounded>

          <v-autocomplete
              id="txtauto"
              v-model="search"
              :disabled="isUpdating"
              :items="items"
              prepend-icon="mdi-magnify"
              label="Search T-DASH"
              single-line
              hide-details
              dense
              rounded
              color="blue-grey lighten-2"
              item-text="text"
              item-value="text"
              :search="search"
          >
    
              <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">

                  </template>
                  <template v-else>
                      <v-list-item route :to="data.item.route">
                          <v-list-item-content>
                              <v-list-item-title v-text="data.item.text" id="itemCombo"></v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                  </template>
              </template>
          </v-autocomplete>


      
      
         
            
        </v-toolbar>
    </v-app-bar>`
})
