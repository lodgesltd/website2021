import Nav from "./Nav.svelte";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
  },
};

const Template = ({ ...args }) => ({
  Component: Nav,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
