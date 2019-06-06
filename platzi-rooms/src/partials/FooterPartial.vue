<template>
  <footer class="footer mt-6">
    <section class="footer__items bg-white border-t py-6">
      <div class="container grid-container">
        <div class="footer__brand mb-3">
          <p class="text-grey-darkest text-3xl font-semibold mb-2">Platzi Rooms</p>
          <p class="text-grey-dark">
            Discover entire homes and private rooms perfect for any trip.
          </p>
        </div>
        <div class="footer__list mb-3">
          <ul class="list-reset">
            <li class="mb-2 text-lg text-grey-darkest font-semibold">Product</li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkest"
                href="#">The solution</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkest"
                href="#">Tools overview</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkest"
                href="#">Press kit</a>
            </li>
          </ul>
        </div>
        <div class="footer__list">
          <ul class="list-reset">
            <li class="mb-2 text-lg text-grey-darkest font-semibold">More info</li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkes"
                href="#">Careers</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkes"
                href="#">Contact</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkes"
                href="#">Blog</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkest"
                href="#">Terms of Service</a>
            </li>
            <li class="mb-2">
              <a
                class="no-underline text-grey-darker hover:text-grey-darkest"
                href="#">Privacy and Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="footer__copyright bg-teal-dark py-4 text-white">
      <div class="container">A Vue application for the course Advanced Vue by Bedu on Platzi</div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterPartial',
};
</script>

<style>
  .footer .grid-container {
    grid-template-columns: 2fr 1fr 1fr;
  }

  @media(max-width: 576px) {
    .footer .grid-container {
      grid-template-columns: 1fr;
    }
    .footer {
      @apply text-center;
    }
  }
</style>
