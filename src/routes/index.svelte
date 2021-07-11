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
  import Home from "../components/_pages/Home/Home.svelte";
  export let data;

  let homeData = data.records.filter(r => r.fields.section === "home")[0];
</script>

<svelte:head>
  <title>Lodges Limited</title>
</svelte:head>

<Home {homeData} />
