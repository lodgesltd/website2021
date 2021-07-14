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
Default.args = {
  homeData: {
    fields: {
      title: "About",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta deleniti neque quasi magnam eligendi iusto in praesentium a, ad tempora! Quisquam inventore dolores rerum neque porro sapiente repellendus! Expedita, fugit.",
    },
  },
};
