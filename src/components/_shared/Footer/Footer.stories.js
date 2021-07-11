import Footer from "./Footer.svelte";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: Footer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
