const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Accordion', component: Accordion },
    { path: '/Button', component: Button },
    { path: '/BtnGroup', component: Button_group },
    { path: '/Checkbox', component: Checkbox },
    { path: '/Combo_box', component: Combo_box },
    { path: '/Dialogs', component: Dialogs },
    { path: '/Floating_action_button', component: Floating_action_button },
    { path: '/List', component: List },
    { path: '/Radio_button', component: Radio_button },
    { path: '/Rating', component: Rating },
    { path: '/Select', component: Select },
    { path: '/Slider', component: Slider },
    { path: '/Switch', component: SwitchComp },
    { path: '/Table', component: Table },
    { path: '/Text_field', component: Text_field },
    { path: '/Toggle_Button', component: Toggle_Button },
    { path: '/Tooltip', component: Tooltip },
    { path: '/Transfer_list', component: Transfer_List },
  ],
  // mode: 'hash',
  base: '/t-dash/demo/vuejs/vue_index.html#',
});
