<script lang="ts">
  export let segment: string;

  let showNav = false;
</script>

<div class="button">
  <button on:click={() => (showNav = !showNav)}>
    <img src="/assets/menu.svg" alt="open mobile menu" /></button
  >
</div>
{#if showNav}
  <nav>
    <div class="nav">
      <div class="button">
        <button on:click={() => (showNav = !showNav)}
          ><img src="/assets/close.svg" alt="close mobile menu" /></button
        >
      </div>
      <ul>
        <li>
          <a
            aria-current={segment === undefined ? "page" : undefined}
            href="/"
            on:click={() => (showNav = !showNav)}>home</a
          >
        </li>
        <li>
          <a
            aria-current={segment === "news" ? "page" : undefined}
            href="news"
            on:click={() => (showNav = !showNav)}>latest news</a
          >
        </li>
        <li>
          <a
            aria-current={segment === "committee" ? "page" : undefined}
            href="committee"
            on:click={() => (showNav = !showNav)}>the committee</a
          >
        </li>
        <li>
          <a
            aria-current={segment === "minutes" ? "page" : undefined}
            href="minutes"
            on:click={() => (showNav = !showNav)}>the minutes</a
          >
        </li>
        <li>
          <a
            aria-current={segment === "suggestions" ? "page" : undefined}
            href="suggestions"
            on:click={() => (showNav = !showNav)}>suggestions box</a
          >
        </li>
      </ul>
    </div>
  </nav>
{/if}

<style lang="scss">
  button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    background-color: $brand1;
    width: 100vw;
    height: 60px;
    margin: 0;
    padding: 12px;
  }

  nav {
    background-color: $brand1;
    padding: 0 1em;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
  }

  .nav {
    color: $light;
    padding-bottom: 50px;
    height: 100vh;
  }

  ul {
    margin: 0;
    padding: 40px 0;
    max-width: max-content;
  }

  li {
    display: block;
    max-width: max-content;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    height: 2px;
    background-color: $light;
    display: block;
    bottom: 10px;
  }

  a {
    text-decoration: none;
    color: $light;
    padding: 1em 3rem;
    display: block;
    width: max-content;
  }

  img {
    width: 30px;
  }
</style>
