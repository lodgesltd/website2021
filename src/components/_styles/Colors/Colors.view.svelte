<!-- Demo view component for storybook -->
<script>
  import Typography from "../Typography/Typography.svelte";
</script>

<!-- Color palette examples -->
<div class="outer">
  <Typography variant="h1">Color Palette</Typography>

  <div class="container">
    <div class="label">
      <Typography>--light</Typography>
    </div>
    <div class="swatch light">
      <Typography>#FFFFF</Typography>
    </div>
    <div class="label">
      <Typography>--dark</Typography>
    </div>
    <div class="swatch dark">
      <Typography theme="light">#000000</Typography>
    </div>

    <div class="label">
      <Typography>--brand1</Typography>
    </div>
    <div class="swatch brand1">
      <Typography theme="light">#1C3988</Typography>
    </div>
    <div class="label">
      <Typography>--brand1</Typography>
    </div>
    <div class="swatch brand1">
      <Typography theme="light">#594B1F</Typography>
    </div>

    <div class="label">
      <Typography>--feedback1</Typography>
    </div>
    <div class="swatch feedback1">
      <Typography>#F44336</Typography>
    </div>

    <div class="label">
      <Typography>--tint1</Typography>
    </div>
    <div class="swatch tint1">
      <Typography>rgba(255,255,255,0.25)</Typography>
    </div>
    <div class="label">
      <Typography>--tint2</Typography>
    </div>
    <div class="swatch tint2">
      <Typography>rgba(255,255,255,0.5)</Typography>
    </div>

    <div class="label">
      <Typography>--shade1</Typography>
    </div>
    <div class="swatch shade1">
      <Typography>rgba(0,0,0,0.05)</Typography>
    </div>
    <div class="label">
      <Typography>--shade2</Typography>
    </div>
    <div class="swatch shade2">
      <Typography>rgba(0,0,0,0.1)</Typography>
    </div>
    <div class="label">
      <Typography>--shade2solid</Typography>
    </div>
    <div class="swatch shade2solid">
      <Typography>#E6E6E6</Typography>
    </div>
    <div class="label">
      <Typography>--shade3</Typography>
    </div>
    <div class="swatch shade3">
      <Typography>rgba(0,0,0,0.25)</Typography>
    </div>

    <div class="label">
      <Typography>--dark-vertical</Typography>
    </div>
    <div class="swatch dark-vertical">
      <Typography theme="light"
        >linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000 99.01%)</Typography
      >
    </div>
  </div>
</div>

<style lang="scss">
  .outer {
    background: linear-gradient(90deg, $light 50%, $shade3 50%);
  }
  .container {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .label {
    color: var(--dark);
    grid-column: 1 / span 2;
  }

  .swatch {
    align-items: center;
    border-radius: 100px 0px 0px 100px;
    display: flex;
    grid-column: 3 / span 10;
    height: 80px;
    margin-bottom: 30px;
    padding-left: 30px;
  }

  .light {
    background-color: $light;
    color: $dark;
    border: 1px solid $dark;
  }
  .dark {
    background-color: $dark;
    color: $light;
  }
  .brand1 {
    background-color: $brand1;
    color: $light;
  }
  .brand1 {
    background-color: $brand1;
    color: $light;
  }
  .feedback1 {
    background-color: $feedback1;
    color: $dark;
  }
  .tint1 {
    background-color: $tint1;
    color: $dark;
    border: 1px solid $dark;
  }
  .tint2 {
    background-color: $tint2;
    color: $dark;
    border: 1px solid $dark;
  }
  .shade1 {
    background-color: $shade1;
    color: $dark;
  }
  .shade2 {
    background-color: $shade2;
    color: $dark;
  }
  .shade2solid {
    background-color: $shade2solid;
    color: $dark;
  }
  .shade3 {
    background-color: $shade3;
    color: $dark;
  }
  .dark-vertical {
    background: $dark-vertical;
    color: $dark;
    border: 1px solid $shade2solid;
  }
</style>
