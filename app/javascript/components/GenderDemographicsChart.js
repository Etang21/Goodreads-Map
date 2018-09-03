// Takes in a dictionary from genders to counts, displays as chart
import React from 'react'
import {PieChart, Pie} from 'recharts'

const GenderDemographicsChart = ({genders}) => {
  //Takes in genders, a Map, formats properly for recharts as list of objects
  const data = rechartsDataFromMap(genders)
  return (
    <PieChart width={730} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8" />
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

export default GenderDemographicsChart
