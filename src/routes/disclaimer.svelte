<script context="module" lang="ts">
  export async function preload(page, session) {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = session;

    const res = await this.fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/pages?api_key=${AIRTABLE_API_KEY}`,
    );
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import Header from "../components/_shared/Header/Header.svelte";
  export let data;

  let disclaimerData = data.records.filter(
    r => r.fields.section === "disclaimer",
  )[0];
</script>

<svelte:head>
  <title>Lodges Ltd - Disclaimer</title>
</svelte:head>

{#if data && disclaimerData}
  <Header
    backgroundColor="#f3f3fa"
    title={disclaimerData.fields.title}
    description={disclaimerData.fields.content}
  />
{/if}
