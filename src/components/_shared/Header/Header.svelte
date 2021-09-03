<script lang="ts">
  import Container from "../../_styles/Container/Container.svelte";
  import Typography from "../../_styles/Typography/Typography.svelte";

  export let title = "";
  export let description = "";
  export let backgroundColor = "";
  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

{#if title}
  <div class="wrapper" {style}>
    <Container>
      <div class="header">
        <Typography variant="h1">{title}</Typography>
        {#if description}
          <p>
            {@html description}
          </p>
        {/if}
      </div>
    </Container>
  </div>
{/if}

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 34px;

    @include breakpoint(md) {
      padding: 84px;
    }
  }
</style>
