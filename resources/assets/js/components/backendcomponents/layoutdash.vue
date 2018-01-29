<template>
  <v-app id="inspire">

    <leftSideBar></leftSideBar>
    <!-- header toolbar -->
    <headerComponents></headerComponents>

    <!-- conten router -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <!-- Content will load Here -->
            <router-view></router-view>

        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import HeaderComponents from './Admin/layouts/headerComponents.vue';
import LeftSideBar from './Admin/layouts/leftSideBar.vue';
  export default {
    data: () => ({

    }),
    props: {
      source: String
  },
  components: {
                   HeaderComponents,LeftSideBar
          }
  }
</script>



<style>

</style>
