<template>
  <q-page class="text-center background-logo">
    <div class="row justify-center">
      <div class="col-xs-12">
        <h2>Ebenezer Websites LLC Sample Site Portal</h2>
      </div>
    </div>
    <div class="row justify-center q-gutter-sm">
      <q-card v-for="sample in samples" bordered class="card col-xs-12 col-md-3" :key="sample.id" v-anime="{ 
  translateY: {
    value:    ['70px', '0px'],
    duration: 4000,
    easing: 'easeOutBounce',
  },
  translateY: {
    value:    ['0px', '70px'],
    duration: 4000,
  } 
   }">
        <q-card-section>
          <div class="text-h6">{{sample.title}}</div>
          <div class="text-subtitle2">{{sample.description}}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <a target="_blank" :href="sample.link">
            <q-img :src="sample.img" :alt="sample.title" contain class="grow"></q-img>
          </a>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<!-- Need to set transition speed to something longer somehow -->
<style>
  .grow {
    transition: all 0.35s ease-in-out;
  }

  .grow:hover {
    transform: scale(1.075);
  }

  .background-logo {
    /* background: url(~assets/ebenezer.png) no-repeat center center fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;

    background-color: white;

  }

  .card {
    background-color: rgba(0, 0, 0, 0.851);
    color: white;
  }
</style>

<script>
  import VueAnime from 'vue-animejs';

  export default {
    name: 'PageIndex',
    data() {
      return {
      }
    },
    computed: {
      samples() {
        return this.$store.state.samples.samples
      }

    }
  }
</script>