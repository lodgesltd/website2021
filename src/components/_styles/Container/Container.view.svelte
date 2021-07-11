<script lang="ts">
  import Container from "./Container.svelte";
</script>

<Container>
  <div class="block" />
</Container>

<style lang="scss">
  @import "../../../styles/variables.scss";

  .block {
    background-color: $shade1;
    height: 100vh;
    width: 100%;
  }
</style>
