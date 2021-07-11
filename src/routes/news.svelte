<script context="module" lang="ts">
  export async function preload(page, session) {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = session;

    const header = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/pages?api_key=${AIRTABLE_API_KEY}`,
    );
    const headerData = await header.json();

    const res = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/news?api_key=${AIRTABLE_API_KEY}`,
    );
    const data = await res.json();
    return { data, headerData };
  }
</script>

<script lang="ts">
  import Header from "../components/_shared/Header/Header.svelte";
  import Typography from "../components/_styles/Typography/Typography.svelte";
  import Container from "../components/_styles/Container/Container.svelte";

  export let data;
  export let headerData;

  let header = headerData.records.filter(r => r.fields.section === "news")[0];
</script>

<svelte:head>
  <title>Lodges Ltd - Latest News</title>
</svelte:head>

{#if data && header}
  <Header
    backgroundColor="#f3f3fa"
    title={header.fields.title}
    description={header.fields.content}
  />
{/if}
<div class="news">
  <Container>
    {#each data.records as record}
      {#if record && record.fields}
        <div class="news--article">
          <div class="news--content-side">
            {#if record.fields.title}
              <div class="news--title">
                <Typography variant="h2">{record.fields.title}</Typography>
              </div>
            {/if}
            {#if record.fields.date}
              <div class="news--date">
                <Typography variant="caption">{record.fields.date}</Typography>
              </div>
            {/if}
            {#if record.fields.content}
              <div class="news--content">
                <Typography>{record.fields.content}</Typography>
              </div>
            {/if}
          </div>

          <div class="news--inner">
            {#if record.fields.images && record.fields.images.length >= 1}
              <img
                width="400"
                src={record.fields.images[0].url}
                alt="News images"
              />
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </Container>
</div>

<style lang="scss">
  .news {
    padding: 80px 0;

    &--title {
      padding-bottom: 6px;
      color: $brand1;
    }

    &--date {
      padding-bottom: 20px;
    }

    &--content {
      /* max-width: 691px; */
      padding-right: 40px;
    }

    &--content-side {
      display: flex;
      flex-direction: column;
    }
    &--article {
      border-bottom: 1px solid $shade1;
      padding: 80px 0;
      display: flex;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
</style>
