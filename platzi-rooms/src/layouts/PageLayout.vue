<template>
  <div class="page-layout">
    <header-partial></header-partial>
    <main class="main">
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial.vue';
import FooterPartial from '@/partials/FooterPartial.vue';

export default {
  name: 'PageLayout',
  components: {
    HeaderPartial,
    FooterPartial,
  },
};
</script>

<style>
  .form__field .input-icon {
    top: 7px;
    left: 9px;
  }
</style>
