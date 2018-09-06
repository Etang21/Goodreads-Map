// Takes in a map from categories to counts, displays as chart
import React from 'react'
import {PieChart, Pie, Cell} from 'recharts'

const DemographicsChart = ({dataMap}) => {
  //Takes in map of categories to values, displays chart
  const data = rechartsDataFromMap(dataMap)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  //Gets viewport width and height:
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const outerRadius = Math.min(vh/4, vw/3)
  return (
    <PieChart width={vw} height={2 * outerRadius}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="75%"
        innerRadius={0.75 * outerRadius}
        outerRadius={outerRadius}
        startAngle={0}
        endAngle={180}
        paddingAngle={5}
        fill="#8884d8"
        label={label => label.name + ' (' + label.value + ')' }
        isAnimationActive={false}
      > //Disable animation due to invisible label bug in recharts
        {
          data.map((entry, index) =>
            <Cell fill={COLORS[index % COLORS.length]} key={index}/>
          )
        }
      </Pie>
    </PieChart>
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
