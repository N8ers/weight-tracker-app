import Card from "./Card"

export default {
  title: "Card",
  component: Card,
}

const Template = (args) => <Card {...args} />

export const RoundBorder = Template.bind({})
RoundBorder.args = {
  borderRadius: "25px",
}
