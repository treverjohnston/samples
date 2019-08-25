<template>
  <q-page class="text-center background-logo">
    <div class="row justify-center margin-top margin-bot">
      <div class="col-xs-12">
        <big>Ebenezer Websites LLC Sample Site Portal</big>
      </div>
    </div>
    <div class="row justify-center q-gutter-sm">
      <!-- START DESKTOP -->
      <q-card v-for="sample in samples" bordered class="card col-xs-10 col-sm-5 col-md-3 desktop-only" :key="sample.id" v-anime="{ 
  translateY: {
    value:    ['100px', '0px'],
    duration: 4000,
    easing: 'easeOutBounce',
  },
  translateY: {
    value:    ['0px', '100px'],
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
<!-- END DESKTOP -->
      <!-- START MOBILE -->
      <q-card v-for="sample in samples" bordered class="card col-xs-10 col-sm-5 col-md-3 mobile-only margin-bot" :key="sample.id" v-anime="{ 
        translateY: {
          value:    ['10px', '0px'],
          duration: 4000,
          easing: 'easeOutBounce',
        },
        translateY: {
          value:    ['0px', '10px'],
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
      <!-- END MOBILE -->
    </div>

  </q-page>
</template>

<!-- Need to set transition speed to something longer somehow -->
<style>
  .margin-top{
    margin-top:2rem;
  }
  .margin-bot{
    margin-bottom:2rem;
  }
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