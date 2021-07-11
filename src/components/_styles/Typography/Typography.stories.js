import Typography from "./Typography.view.svelte";

export default {
  title: "Styles/Typography",
  component: Typography,
  argType: {
    underline: { control: "boolean" },
    strikeThrough: { control: "boolean" },
  },
};

const Template = ({ ...args }) => ({
  Component: Typography,
  props: args,
});

export const Hierarchy = Template.bind({});
Hierarchy.args = {};

export const Underline = Template.bind({});
Underline.args = { underline: true };

export const StrikeThrough = Template.bind({});
StrikeThrough.args = { strikeThrough: true };
