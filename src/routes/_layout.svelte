<script lang="ts">
  import Nav from "../components/_shared/Nav/Nav.svelte";
  import Footer from "../components/_shared/Footer/Footer.svelte";
  import Container from "../components/_styles/Container/Container.svelte";
  import Typography from "../components/_styles/Typography/Typography.svelte";
  import Loader from "../components/_shared/Loader/Loader.svelte";
  export let segment: string;

  let showForm = false;
  let loading = false;

  const loaded = () => {
    setTimeout(function () {
      showForm = !showForm;
      loading = false;
    }, 1200);
  };
</script>

<Nav {segment} />

<main>
  <slot />
</main>
<Container>
  <div class="register">
    <button
      on:click={() => {
        loading = true;
        loaded();
      }}><Typography variant="h2">Register as a Resident</Typography></button
    >
  </div>
</Container>

{#if loading}
  <Loader />
{/if}
{#if showForm}
  <iframe
    title="register"
    class="airtable-embed"
    src="https://airtable.com/embed/shrg1K7SdDGgms3O3?backgroundColor=cyan"
    frameborder="0"
    onmousewheel=""
    width="100%"
    height="780"
    style="background: transparent; border: 1px solid #ccc;"
  />
{/if}
<Footer />

<style lang="scss">
  main {
    padding-top: 60px;

    @include breakpoint(md) {
      padding-top: 0;
    }
  }
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
  }

  button {
    /* background-color: $brand1; */
    background-image: linear-gradient($brand1, $brand2);

    border: none;
    padding: 20px;
    border-radius: 5px;
    color: $light;
    cursor: pointer;
    margin-bottom: 80px;

    &:hover {
      background-color: $shade1;
      color: $brand1;
      background-image: none;
    }
  }
</style>
