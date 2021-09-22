<script lang="ts">
  import Container from "../../_styles/Container/Container.svelte";
  import MobileNav from "../Nav/MobileNav.svelte";

  export let segment: string;
</script>

<div class="nav-sm">
  <MobileNav {segment} />
</div>
<nav class="nav-lg">
  <Container>
    <div class="nav">
      <a href="/"><img src="/assets/logo.svg" alt="" /></a>
      <ul>
        <li>
          <a
            class="nav--item"
            aria-current={segment === undefined ? "page" : undefined}
            href=".">home</a
          >
        </li>
        <li>
          <a
            class="nav--item"
            aria-current={segment === "news" ? "page" : undefined}
            href="news">latest news</a
          >
        </li>
        <li>
          <a
            class="nav--item"
            aria-current={segment === "committee" ? "page" : undefined}
            href="committee">the committee</a
          >
        </li>
        <li>
          <a
            class="nav--item"
            aria-current={segment === "minutes" ? "page" : undefined}
            href="minutes">the minutes</a
          >
        </li>
        <li>
          <a
            class="nav--item"
            aria-current={segment === "suggestions" ? "page" : undefined}
            href="suggestions">suggestions box</a
          >
        </li>
      </ul>
    </div>
  </Container>
</nav>

<style lang="scss">
  nav {
    background-color: $brand1;
    font-weight: 300;
    padding: 0 1em;
    text-transform: uppercase;
    z-index: 9;
    padding: 1rem 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  .nav-sm {
    @include breakpoint(md) {
      display: none;
    }
  }

  .nav-lg {
    display: none;
    @include breakpoint(md) {
      display: block;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $brand2;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }

  li {
    display: block;
    padding: 0 0.5em;
  }

  a {
    color: $brand2;
  }

  .nav--item {
    color: $brand2;

    &:hover {
      border-bottom: 2px solid $brand2;
    }
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    border-bottom: 2px solid $brand2;
  }

  [aria-current]::after {
    border-bottom: 2px solid $brand2;
  }

  a {
    text-decoration: none;
    display: block;
  }

  img {
    width: 30px;
  }
</style>
