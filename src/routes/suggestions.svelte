<script>
  import Loader from "../components/_shared/Loader/Loader.svelte";

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
  <iframe
    title="suggestions"
    class="airtable-embed"
    src="https://airtable.com/embed/shreUROkZROO3dsSK?backgroundColor=cyan"
    frameborder="0"
    onmousewheel=""
    width="100%"
    height="910px"
    style="background: transparent; border: 1px solid #ccc;"
  />
{/if}

<style lang="scss">
  .loader {
    height: 100vh;
    padding: 100px 0;
  }
</style>
