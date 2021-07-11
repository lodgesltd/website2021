<div {...$$props}>
  <slot />
</div>

<style lang="scss">
  @import "../../../styles/variables.scss";

  div {
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  @media (min-width: $lg) {
    div {
      padding: 0 2.5rem;
      max-width: 80rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
