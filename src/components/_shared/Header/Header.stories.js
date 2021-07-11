import Header from "./Header.svelte";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

const Template = ({ ...args }) => ({
  Component: Header,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi unde ipsum repellat assumenda, ex explicabo tempora nesciunt magni provident voluptates numquam hic iusto consequuntur qui! Excepturi nihil obcaecati molestias asperiores... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi unde ipsum repellat assumenda, ex explicabo tempora nesciunt magni provident voluptates numquam hic iusto consequuntur qui! Excepturi nihil obcaecati molestias asperiores?",
};
