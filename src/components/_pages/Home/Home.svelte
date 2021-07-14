<script>
  import Loader from "../../_shared/Loader/Loader.svelte";
  import Container from "../../_styles/Container/Container.svelte";
  import Typography from "../../_styles/Typography/Typography.svelte";
  export let homeData;
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
        <img src="/assets/home.jpg" alt="lodges" />
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
      background-image: linear-gradient($brand1, $brand2);
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
</style>
