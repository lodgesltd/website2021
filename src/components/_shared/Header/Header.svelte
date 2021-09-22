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
    <div class="header">
      <Container>
        <Typography variant="h1">{title}</Typography>
        {#if description}
          <p>
            {@html description}
          </p>
        {/if}
      </Container>
    </div>
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
    color: $brand2;
    background-color: $brand1;

    @include breakpoint(md) {
      padding: 84px;
    }
  }
</style>
