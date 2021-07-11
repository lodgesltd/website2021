import MobileNav from "./MobileNav.svelte";

export default {
  title: "Components/MobileNav",
  component: MobileNav,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: MobileNav,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
