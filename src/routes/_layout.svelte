<script lang="ts">
  import Nav from "../components/_shared/Nav/Nav.svelte";
  import Footer from "../components/_shared/Footer/Footer.svelte";
  import Container from "../components/_styles/Container/Container.svelte";
  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  main {
    padding-top: 60px;

    @include breakpoint(md) {
      padding-top: 0;
    }
  }
</style>
