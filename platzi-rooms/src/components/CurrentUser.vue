<template>
  <div class="current-user">
    <slot :user="user"></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrentUser',
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
  }
}
</script>
