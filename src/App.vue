<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{clock}}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
        <v-list-item link :to="{ name: 'Home'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'Financial'}">
          <v-list-item-action>
            <v-icon>mdi-finance</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Financial</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'Crypto'}">
          <v-list-item-action>
            <v-icon>mdi-bitcoin</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Crypto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'Sports'}">
          <v-list-item-action>
            <v-icon>mdi-soccer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item link :to="{ name: 'Weather'}">
          <v-list-item-action>
            <v-icon>mdi-weather-partly-cloudy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Weather</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>News App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{ name: 'Home'}">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Financial'}">
        <v-icon>mdi-finance</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Crypto'}">
        <v-icon>mdi-bitcoin</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Sports'}">
        <v-icon>mdi-soccer</v-icon>
      </v-btn>
      
      <!-- <v-btn icon :to="{ name: 'Weather'}">
        <v-icon>mdi-weather-partly-cloudy</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main class="fill-height">
        <router-view> 
        </router-view>
    </v-main>
    <v-footer dark app class="text-center">
      
      <p class="mb-0"><span class="white--text">Developed by: </span><a href="https://nordicnoir.eu" target="blank"> Nordic Noir</a><span class="white--text"> -- &copy; {{ new Date().getFullYear() }}</span></p>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

  export default {
    props: {
      source: String,
    },
    mounted() {
  	  this.startClock();
    },
    data: () => ({
      drawer: null,
      clock: ''
    }),
    filters: {
      formatDate(value){
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm')
        }
      }
    },
    methods: {
    startClock() {
      const vm = this;
      setInterval( _ => {
      	vm.clock = moment().locale('nl-be').format('lll');
      }, 1000);
    }
  }
  }
</script>
<style>
  a{
    text-decoration: none;
    color: black;
  }
  body{
    background-color: rgb(218, 218, 218);
  }

</style>