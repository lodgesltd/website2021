<script context="module" lang="ts">
  export async function preload(page, session) {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = session;

    const mins = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/minutes?api_key=${AIRTABLE_API_KEY}`,
    );
    const minutesData = await mins.json();

    const res = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/pages?api_key=${AIRTABLE_API_KEY}`,
    );
    const data = await res.json();
    return { data, minutesData };
  }
</script>

<script>
  import Header from "../components/_shared/Header/Header.svelte";
  import Container from "../components/_styles/Container/Container.svelte";
  import Typography from "../components/_styles/Typography/Typography.svelte";

  export let data;
  export let minutesData;

  let minutes = data.records.filter(r => r.fields.section === "minutes")[0];
</script>

<svelte:head>
  <title>Lodges Ltd - The Minutes</title>
</svelte:head>

<Header
  backgroundColor="#f3f3fa"
  title={minutes.fields.title}
  description={minutes.fields.content}
/>

<Container>
  <div class="minutes">
    <Typography variant="h3">Read the minutes from:</Typography>
    {#if minutesData}
      <div class="minutes--layout">
        {#each minutesData.records as minutes}
          <a class="minutes--link" href={minutes.fields.link} target="_blank">
            {minutes.fields.title}</a
          >
        {/each}
      </div>
    {/if}
  </div>
</Container>

<style lang="scss">
  .minutes {
    padding: 80px 0;
    border-bottom: 1px solid $shade1;

    &--layout {
      display: flex;
      flex-direction: column;
    }
    &--link {
      color: $brand1;
      padding: 40px 0 20px;
      width: max-content;

      &:hover {
        color: $dark;
      }

      &:last-child {
        padding: 20px 0 0;
      }
    }
  }
</style>
