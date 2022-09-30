import WeightTable from "./WeightTable"

export default {
  title: "WeightTable",
  component: WeightTable,
}

const Template = (args) => <WeightTable {...args} />

export const Basic = Template.bind({})
Basic.args = {
  tableData: [],
}
