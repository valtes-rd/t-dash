Vue.component('Sidebar', {
  data: function () {
    return {
      baseUrl: '/t-dash/demo/vuejs/vue_index.html#/',
      items: [
        // {
        //   icon: 'mdi-home',
        //   text: 'Home',
        //   route:'/',
        // },
        {
          icon: 'mdi-widgets',
          text: 'Combo Box',
          route: '/Combo_box',
        },
        {
          icon: 'mdi-widgets',
          text: 'Button',
          route: '/Button',
        },
        {
          icon: 'mdi-widgets',
          text: 'Button Group',
          route: '/BtnGroup',
        },
        {
          icon: 'mdi-widgets',
          text: 'Checkbox',
          route: '/Checkbox',
        },
        {
          icon: 'mdi-widgets',
          text: 'Floating Action Button',
          route: '/Floating_action_button',
        },
        {
          icon: 'mdi-widgets',
          text: 'Radio Button',
          route: '/Radio_button',
        },
        {
          icon: 'mdi-widgets',
          text: 'Rating',
          route: '/Rating',
        },
        {
          icon: 'mdi-widgets',
          text: 'Select',
          route: '/Select',
        },
        {
          icon: 'mdi-widgets',
          text: 'Slider',
          route: '/Slider',
        },
        {
          icon: 'mdi-widgets',
          text: 'Switch',
          route: '/Switch',
        },
        {
          icon: 'mdi-widgets',
          text: 'Text Field',
          route: '/Text_field',
        },
        {
          icon: 'mdi-widgets',
          text: 'Transfer List',
          route: '/Transfer_List',
        },
        {
          icon: 'mdi-widgets',
          text: 'Toggle Button',
          route: '/Toggle_Button',
        },
        {
          icon: 'mdi-widgets',
          text: 'List',
          route: '/List',
        },
        {
          icon: 'mdi-widgets',
          text: 'Table',
          route: '/Table',
        },
        {
          icon: 'mdi-widgets',
          text: 'Tooltip',
          route: '/Tooltip',
        },
        {
          icon: 'mdi-widgets',
          text: 'Dialogs',
          route: '/Dialogs',
        },
        {
          icon: 'mdi-widgets',
          text: 'Accordion',
          route: '/Accordion',
        },
      ],
    };
  },
  created: function () {},
  methods: {
    getFullRoute: function (item) {
      return this.baseUrl + item.route;
    },
  },
  template: `<v-navigation-drawer app clipped permanent="true">
      <v-list-item
      v-for="(item, i) in items"
      :key="i"
      route :to="getFullRoute(item)">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-navigation-drawer>`,
});
