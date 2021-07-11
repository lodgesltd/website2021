<script>
  import Loader from "../../_shared/Loader/Loader.svelte";
  import Container from "../../_styles/Container/Container.svelte";
  import Typography from "../../_styles/Typography/Typography.svelte";
  export let homeData;
  let showForm = false;
  let loading = false;

  const loaded = () => {
    setTimeout(function () {
      showForm = !showForm;
      loading = false;
    }, 1200);
  };
</script>

<div class="home">
  <div class="home--container">
    <Container>
      <div class="home--inner">
        <div class="home--hero">
          <div class="home--title">
            <Typography variant="super">Lodges <br />Limited</Typography>
          </div>
          <Typography variant="button1">Simon and Radley Lodges SW19</Typography
          >
        </div>
        <img src="/assets/hom.jpg" alt="lodges" />
      </div>
    </Container>
  </div>

  <div class="about">
    <Container>
      <Typography variant="h1">{homeData.fields.title}</Typography>
      <div class="about--content">
        <Typography>{homeData.fields.content}</Typography>
      </div>
    </Container>
  </div>

  <div>
    <Container>
      <div class="about--content">
        <button
          on:click={() => {
            loading = true;
            loaded();
          }}
          ><Typography variant="h2">Register as a Resident</Typography></button
        >
      </div>
    </Container>

    {#if loading}
      <Loader />
    {/if}
    {#if showForm}
      <iframe
        title="register"
        class="airtable-embed"
        src="https://airtable.com/embed/shrg1K7SdDGgms3O3?backgroundColor=cyan"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="680"
        style="background: transparent; border: 1px solid #ccc;"
      />
    {/if}
  </div>
</div>

<style lang="scss">
  img {
    width: 80vw;
    margin-top: 40px;
    border: 10px double $light;

    @include breakpoint(md) {
      margin-top: 0;
      width: 320px;
    }

    @include breakpoint(lg) {
      width: 500px;
    }
  }

  .home {
    &--container {
      background-color: $brand1;
    }

    &--hero {
      padding: 60px 0;
    }

    &--inner {
      height: 80vh;
      color: $light;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      @include breakpoint(md) {
        height: 100vh;
        justify-content: space-around;
        flex-direction: row;
        height: 480px;
      }
    }

    &--title {
      padding-bottom: 20px;
    }
  }

  .about {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    background-color: $shade1;

    &--content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 80px;
    }
  }

  button {
    background-color: $brand1;
    border: none;
    padding: 20px;
    border-radius: 5px;
    color: $light;
    cursor: pointer;
    margin-bottom: 80px;

    &:hover {
      background-color: $shade1;
      color: $brand1;
    }
  }
</style>
