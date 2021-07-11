<script lang="ts">
  // Typography heading style
  export let variant: string = "body2";

  // Typography heading DOM element
  export let component: string = "p";

  // Typography color theme
  export let theme: string = "dark";

  // Display underline on text?
  export let underline: boolean = false;

  // Display line through text?
  export let strikeThrough: boolean = false;
</script>

{#if component === "super"}
  <h1
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === "h1"}
  <h1
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === "h2"}
  <h2
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h2>
{:else if component === "h3"}
  <h3
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h3>
{:else if component === "h4"}
  <h4
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h4>
{:else if component === "h5"}
  <h5
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h5>
{:else if component === "h6"}
  <h6
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </h6>
{:else if component === "p"}
  <p
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </p>
{:else if component === "span"}
  <span
    class={`${variant} ${underline ? "underline" : ""} ${
      strikeThrough ? "strike-through" : ""
    }`}
    style="color: var(--{theme})"
    {...$$props}
  >
    <slot />
  </span>
{/if}

<style lang="scss">
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    font-weight: 700;
    font-family: "Overpass", sans-serif;
    font-style: normal;
  }

  .super {
    font-size: 56px;
    line-height: 66px;
    font-weight: 900;
  }

  .h1 {
    font-size: 28px;
    line-height: 32px;
  }

  .h2 {
    font-size: 20px;
    line-height: 26px;
  }

  .h3,
  .h3-1 {
    font-size: 20px;
    line-height: 26px;
  }

  .h3-2 {
    font-size: 16px;
    line-height: 20px;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }

  .body1 {
    font-size: 16px;
    line-height: 19px;
  }

  .body2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }

  .button1 {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }

  .button2 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }

  .overline {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }

  .caption {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .strike-through {
    text-decoration: line-through;
  }

  .underline {
    text-decoration: underline;
    text-underline-offset: 0.1em;
  }

  @include breakpoint(md) {
    .super {
      font-size: 66px;
      line-height: 76px;
      font-weight: 900;
    }

    .h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @include breakpoint(lg) {
    .super {
      font-size: 96px;
      line-height: 116.93px;
      font-weight: 900;
    }

    .h1 {
      font-size: 40px;
      line-height: 48px;
    }

    .h2 {
      font-size: 24px;
      line-height: 30px;
    }

    .body1 {
      font-size: 16px;
      line-height: 22px;
    }
  }
</style>
