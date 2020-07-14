<template>
  <div class="about">
    <v-toolbar dark flat>
      <v-icon x-large class="ml-4 mb-3">mdi-bitcoin</v-icon>
        <h2 class="text-md-h3 ml-4 mb-4" color="blue-grey darken-2">Latest Crypto news</h2>
      </v-toolbar>
    <v-container>
      
      <v-row dense v-if="info">
        <v-col
          v-for="(item, i) in info.articles"
          :key="i"
          cols="12"
        >
        <v-hover
        v-slot:default="{ hover }"
        >
        
          <v-card
            :color="item.color" :elevation="hover ? 16 : 2" :href="item.url" target="blank"
            min-height="210"
            class="ma-2"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              max-width="100vw"
              :src="item.urlToImage"
            >
            </v-img>
            <div class="d-flex flex-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle>{{item.publishedAt | formatDate}} -- {{item.source.name}}</v-card-subtitle>
                <v-card-text>
                  {{item.description}}
                </v-card-text>
                <v-card-subtitle>{{item.publishedAt | timePassed}}</v-card-subtitle>
              </div>
            </div>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row dense v-else>
        <v-skeleton-loader
          class="mx-auto"
          width="80vw"
          type="article">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          width="80vw"
          type="article">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          width="80vw"
          type="article">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          width="80vw"
          type="article">
        </v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          width="80vw"
          type="article">
        </v-skeleton-loader>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Home',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&apiKey=8a5c505e545b4210a318e5adcf13b6bb')
      .then(response => (this.info = response.data))
  },
  filters: {
      formatDate(value){
        if (value) {
          return moment(String(value)).locale('en-be').format('LLLL')
        }
      },
      timePassed(value){
        if (value) {
          return moment(value).startOf().fromNow()
        }
      }
    }
}
</script>