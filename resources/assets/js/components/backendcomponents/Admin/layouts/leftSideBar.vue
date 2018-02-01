<template>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="$store.state.drawer"
    >

    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>

          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>

        <v-list-group v-else-if="item.children" v-model="item.model" no-action :key="item.text">
          <v-list-tile slot="item" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <router-link :to="child.url">
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile v-else @click="" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <router-link :to="item.url">
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
        </router-link>

          </v-list-tile-content>
        </v-list-tile>


      </template>
    </v-list>
</v-navigation-drawer>

  </template>

  <script>
  export default {
      data: () => ({
        dialog: false,
        items: [
          { icon: 'contacts', text: 'Dashboard',url:"/admin" },
          { icon: 'dns', text: 'Product',url:"/product" },
          { icon: 'content_copy', text: 'Category Product',url:"/product-category" },
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'Multi',
            model: false,
            children: [
              { icon: 'add', text: 'Create label',url:"/demo"  }
            ]
          }

        ]
      })
  }
  </script>

  <style lang="css">
  </style>
