import Button from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  label: "press me",
  color: "red",
}
