<template>
  <div class="Home">
    <div class="mb-3 mb-md-5 mx-auto text-center">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ bodyLong }}
      </p>
      <div v-if="image.fields">
        <img :src="`${image.fields.file.url}?w=360&h=250&fit=thumb&fm=jpg&fl=progressive&q=70`">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { GET_LANDING_PAGE } from '../store/action-types';
import { ABOUT } from '../models/landing-page';
import landingPage from '../store/modules/landing-page';

const STORE_NAMESPACE = 'landingPage/about';

export default {
  name: 'About',
  computed: {
    ...mapState(STORE_NAMESPACE, [
      'title',
      'bodyLong',
      'image'
    ]),
  },
  created() {
    // Dynamically register the landing page store module in
    // a custom namespace which is only used by this component.
    this.$store.registerModule(STORE_NAMESPACE, landingPage);

    // Do not fetch data again if it has been fetched already.
    // if (this.$store.state[STORE_NAMESPACE].id) return;

    this.getLandingPage(ABOUT);
  },
  methods: {
    ...mapActions(STORE_NAMESPACE, {
      getLandingPage: GET_LANDING_PAGE,
    }),
  },
};
</script>
