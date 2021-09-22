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
  import Header from "../../components/_shared/Header/Header.svelte";
  import Typography from "../../components/_styles/Typography/Typography.svelte";
  import Container from "../../components/_styles/Container/Container.svelte";
  /* Import Swiper and SwiperSlide components from .svelte files */
  import Swiper from "swiper/esm/svelte/swiper.svelte";
  import SwiperSlide from "swiper/esm/svelte/swiper-slide.svelte";
  // Import Swiper styles
  import "swiper/swiper-bundle.min.css";
  import SwiperCore, { Pagination, Navigation } from "swiper/core";
  SwiperCore.use([Pagination, Navigation]);

  export let data;
  export let headerData;

  let news =
    data &&
    data.records &&
    data.records.map(r => r.fields).sort((a, b) => b.id - a.id);

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
    {#each news as news (news)}
      {#if news}
        <div class="news--article">
          <div class="news--content-side">
            {#if news.title}
              <div class="news--title">
                <Typography variant="h2">{news.title}</Typography>
              </div>
            {/if}
            {#if news.date}
              <div class="news--date">
                <Typography variant="caption">{news.date}</Typography>
              </div>
            {/if}
            {#if news.content}
              <div class="news--content">
                <Typography>{@html news.content}</Typography>
              </div>
            {/if}
          </div>

          <div class="news--inner">
            {#if news.images && news.images.length === 1}
              <img src={news.images[0].url} alt="News " />
            {/if}
            {#if news.images && news.images.length > 1}
              <Swiper navigation={true} pagination={true}>
                {#each news.images as img}
                  <SwiperSlide>
                    <img src={img.url} alt="News" />
                  </SwiperSlide>
                {/each}
              </Swiper>
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
    border-bottom: 1px solid $shade1;

    &--title {
      padding-bottom: 6px;
      color: $brand2;
    }

    &--date {
      padding-bottom: 20px;
    }

    &--content {
      max-width: 691px;
      padding-right: 40px;
    }

    &--content-side {
      display: flex;
      flex-direction: column;
    }

    &--article {
      border-bottom: 1px solid $shade1;
      padding: 80px 0 50px 0;
      display: flex;
      flex-direction: column;

      @include breakpoint(lg) {
        justify-content: space-between;
        flex-direction: row;
      }

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }

    &--inner {
      width: 100%;

      @include breakpoint(md) {
        width: 60%;
      }

      @include breakpoint(lg) {
        width: 40%;
      }
    }
    img {
      padding-top: 40px;
      width: 100%;
      z-index: 1;

      @include breakpoint(lg) {
        padding-top: 0;
      }
    }
  }
</style>
