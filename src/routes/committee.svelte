<script context="module" lang="ts">
  export async function preload(page, session) {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = session;

    const header = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/pages?api_key=${AIRTABLE_API_KEY}`,
    );
    const headerData = await header.json();

    const res = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/committee?api_key=${AIRTABLE_API_KEY}`,
    );
    const data = await res.json();
    return { data, headerData };
  }
</script>

<script>
  import Header from "../components/_shared/Header/Header.svelte";
  import Container from "../components/_styles/Container/Container.svelte";
  import Typography from "../components/_styles/Typography/Typography.svelte";

  export let data;
  export let headerData;

  let committeeData =
    data &&
    data.records &&
    data.records.map(r => r.fields).sort((a, b) => b.id - a.id);

  let header = headerData.records.filter(
    r => r.fields.section === "committee",
  )[0];
</script>

<Header
  backgroundColor="#f3f3fa"
  title={header.fields.title}
  description={header.fields.content}
/>
<Container>
  <div class="wrapper">
    {#each committeeData as member (member)}
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
    padding: 80px 0;
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
    background-color: $light;
    border: 6px double $brand2;
    color: $dark;

    &:hover {
      background-color: $brand1;
      color: $light;
      border: 6px double $light;
    }

    &--name {
      padding-bottom: 20px;
    }
  }
</style>
