import Home from "./Home.svelte";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: Home,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
