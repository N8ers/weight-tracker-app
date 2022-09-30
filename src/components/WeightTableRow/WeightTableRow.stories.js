import WeightTableRow from "./WeightTableRow"

export default {
  title: "WeightTableRow",
  component: WeightTableRow,
}

const Template = (args) => <WeightTableRow {...args} />

export const Basic = Template.bind({})
Basic.args = {
  date: "2022-08-04",
  id: 3,
  userId: 6,
  weight: 18.7,
}
