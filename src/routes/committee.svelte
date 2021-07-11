<script>
  import Header from "../components/_shared/Header/Header.svelte";
  import Container from "../components/_styles/Container/Container.svelte";
  import Typography from "../components/_styles/Typography/Typography.svelte";

  let committee = [
    {
      name: "Diane S.",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quodincidunt",
    },
    {
      name: "Patricia X.",
      bio: "lorem",
    },
    {
      name: "James G.",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Rob X.",
      bio: "lorem",
    },
  ];
</script>

<Header
  backgroundColor="#f3f3fa"
  title="The Committee"
  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quod
incidunt, nesciunt molestiae veritatis sapiente suscipit? Sint quisquam
officia sequi asperiores quasi dolor, enim aliquid esse quia repellendus ipsa
in?orem"
/>
<Container>
  <div class="wrapper">
    {#each committee as member}
      <div class="committee">
        <div class="committee--name">
          <Typography variant="h3">{member.name}</Typography>
        </div>
        <div class="committee--bio">
          <Typography>
            {member.bio}
          </Typography>
        </div>
      </div>
    {/each}
  </div>
</Container>

<svelte:head>
  <title>Lodges Ltd - The Committee</title>
</svelte:head>

<style lang="scss">
  .wrapper {
    padding: 60px 0 40px 0;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;

    @include breakpoint(md) {
      grid-template-columns: 1fr 1fr;
    }

    @include breakpoint(lg) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .committee {
    padding: 40px;
    /* max-width: 200px; */
    border: 2px solid $shade1;
    border-radius: 5px;

    &--name {
      /* color: blue; */
      padding-bottom: 20px;
    }

    &--bio {
      /* color: coral; */
    }
  }
</style>
