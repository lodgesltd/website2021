<script lang="ts">
  import Container from "../../_styles/Container/Container.svelte";
</script>

<div class="wrapper">
  <Container>
    <footer>
      <a href="/"><img src="/assets/logo.svg" alt="" /></a>
      <div class="contact">
        <div class="contact--links">
          <h3>useful links</h3>
          <li><a href="/privacy-policy"> privacy policy</a></li>
          <li><a href="/disclaimer">legal disclaimer</a></li>
        </div>
        <div>
          <h3>contact us</h3>
          <a href="mailto:lodgesltd@gmail.com">lodgesltd@gmail.com</a>
        </div>
      </div>
    </footer>
  </Container>
</div>

<style lang="scss">
  .wrapper {
    background-color: $brand1;
  }

  h3 {
    margin-top: 0;
  }

  footer {
    color: $light;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 0;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
    }
    &--links {
      padding-right: 30px;
      padding-bottom: 30px;
    }
  }

  img {
    width: 30px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: underline;
    color: white;
    padding-bottom: 10px;
  }
</style>
