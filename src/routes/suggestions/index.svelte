<script>
  import Loader from "../../components/_shared/Loader/Loader.svelte";

  let showForm = false;
  let loading = true;

  const loaded = () => {
    setTimeout(function () {
      showForm = !showForm;
      loading = false;
    }, 1200);
  };
  loaded();
</script>

<svelte:head>
  <title>Lodges Ltd - Suggestions Box</title>
</svelte:head>

{#if loading}
  <div class="loader">
    <Loader />
  </div>
{/if}
{#if showForm}
  <script
    src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
  <iframe
    title="suggestions box"
    class="airtable-embed airtable-dynamic-height"
    src="https://airtable.com/embed/shrfnBgVQpiEgxsGN?backgroundColor=purple"
    frameborder="0"
    onmousewheel=""
    width="100%"
    height="851"
    style="background: transparent; border: 1px solid #ccc;"
  />
{/if}

<style lang="scss">
  .loader {
    height: 100vh;
    padding: 100px 0;
  }
</style>
