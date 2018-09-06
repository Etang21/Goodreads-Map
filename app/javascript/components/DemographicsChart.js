// Takes in a map from categories to counts, displays as chart
import React from 'react'
import {ResponsiveContainer, PieChart, Pie, Cell, Label} from 'recharts'

const DemographicsChart = ({dataMap, title}) => {
  //Takes in map of categories to values, displays chart
  const data = rechartsDataFromMap(dataMap)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <ResponsiveContainer width="100%" aspect={1.3}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="70%"
          innerRadius="50%"
          paddingAngle={2}
          fill="#8884d8"
          label={label => label.name + ' (' + label.value + ')' }
          isAnimationActive={false}
        > //Disable animation due to invisible label bug in recharts
          {
            data.map((entry, index) =>
              <Cell fill={COLORS[index % COLORS.length]} key={index}/>
            )
          }
          <Label value={title} position="center" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

const rechartsDataFromMap = (dataMap) => {
  // Format dictionary of keys:counts into a list of objects for recharts
  // I swear my Javascript style will improve
  if (dataMap == null) {
    return []
  }
  const keysArr = Array.from(dataMap.keys())
  var data = []
  var i = 0
  for (i = 0; i < keysArr.length; i++) {
    var key = keysArr[i]
    data.push({"name": key, "value": dataMap.get(key)})
  }
  return data
}

export default DemographicsChart
