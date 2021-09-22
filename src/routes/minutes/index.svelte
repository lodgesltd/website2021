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
    const header = await res.json();
    return { header, minutesData };
  }
</script>

<script>
  import Header from "../../components/_shared/Header/Header.svelte";
  import Container from "../../components/_styles/Container/Container.svelte";
  import Typography from "../../components/_styles/Typography/Typography.svelte";

  export let header;
  export let minutesData;

  let minutesHeader = header.records.filter(
    r => r.fields.section === "minutes",
  )[0];

  let minutes =
    minutesData &&
    minutesData.records &&
    minutesData.records.map(r => r.fields).sort((a, b) => b.id - a.id);
</script>

<svelte:head>
  <title>Lodges Ltd - The Minutes</title>
</svelte:head>

<Header
  backgroundColor="#f3f3fa"
  title={minutesHeader.fields.title}
  description={minutesHeader.fields.content}
/>

<Container>
  <div class="minutes">
    <Typography variant="h3">Read the minutes from:</Typography>
    {#if minutes}
      <div class="minutes--layout">
        {#each minutes as min (min)}
          <a class="minutes--link" href={min.link} target="_blank">
            <div class="minutes--month">
              {min.month}
            </div>
            <div class="minutes--day">
              {min.day}
            </div>
            <div class="minutes--year">
              {min.year}
            </div>
          </a>
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
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      @include breakpoint(md) {
        flex-direction: row;
      }
    }
    &--link {
      text-decoration: none;
      color: $dark;
      min-width: 150px;
      width: 150px;
      border: 4px solid $shade1;
      text-align: center;
      border-radius: 5px;
      background: linear-gradient(to bottom right, #fff 0%, #eee 100%);
      margin: 20px;

      &:hover {
        border: 4px solid $brand2;
      }
    }

    &--month {
      background-color: $brand1;
      padding: 10px;
      color: $brand2;
      text-transform: uppercase;
      font-weight: 900;
    }

    &--day {
      font-size: 50px;
      font-weight: 900;
    }

    &--year {
      font-weight: 900;
    }
  }
</style>
