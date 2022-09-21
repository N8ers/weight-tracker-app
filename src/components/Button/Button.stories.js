import Button from "./Button"

export default {
  title: "Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  label: "press me",
  color: "red",
}
