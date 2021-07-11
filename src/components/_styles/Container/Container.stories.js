import Container from "./Container.view";

export default {
  title: "Styles/Container",
  parameters: {
    docs: {
      storyDescription:
        "The `Container Component` sets up a dynamic padding to the right and left of the screen, maintaining everything that lives inside this component aligned to the center.",
    },
  },
};

const Template = ({ ...args }) => ({
  Component: Container,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
