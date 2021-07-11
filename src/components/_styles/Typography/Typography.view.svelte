<!-- Demo view component for storybook -->
<script>
  import Typography from "./Typography.svelte";
  export let strikeThrough = false;
  export let underline = false;
</script>

<style>
  :global(.type-preview > *) {
    padding: 8px;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="type-preview">
  <Typography variant="super" component="h1" {strikeThrough} {underline}
    >Super</Typography
  >
  <Typography variant="h1" component="h1" {strikeThrough} {underline}
    >Heading 1</Typography
  >
  <Typography variant="h2" component="h2" {strikeThrough} {underline}
    >Heading 2</Typography
  >
  <Typography variant="h3-1" component="h3" {strikeThrough} {underline}
    >Heading 3-1 / Heading 3</Typography
  >
  <Typography variant="h3-2" component="h3" {strikeThrough} {underline}
    >Heading 3-2</Typography
  >

  <Typography variant="subtitle" component="h3" {strikeThrough} {underline}
    >Subtitle</Typography
  >

  <Typography variant="body1" component="p" {strikeThrough} {underline}
    >Body 1</Typography
  >
  <Typography variant="body2" component="p" {strikeThrough} {underline}
    >Body 2</Typography
  >
  <Typography variant="button1" component="span" {strikeThrough} {underline}
    >Button 1</Typography
  >
  <Typography variant="button2" component="span" {strikeThrough} {underline}
    >Button 2</Typography
  >
  <Typography variant="overline" component="span" {strikeThrough} {underline}
    >Overline</Typography
  >
  <Typography variant="caption" component="span" {strikeThrough} {underline}
    >caption</Typography
  >
</div>
