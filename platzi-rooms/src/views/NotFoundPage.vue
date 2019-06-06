<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>
    <section class="section__notfound py-10">
      <div class="container">
        <h1 class="text-big text-grey-darkest mb-3">Opps!</h1>
        <p class="text-2xl text-grey-darker ">We can't seem to find the page you're looking for.</p>
      </div>
    </section>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'NotFoundPage',
  components: {
    PageLayout,
  },
};
</script>

<style>
.text-big {
  font-size: 7rem;
}
</style>
