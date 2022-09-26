import Input from "./Input"

export default {
  title: "Input",
  component: Input,
}

const Template = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  label: "username",
  placeholder: "tsuki_cat",
  type: "text",
}
