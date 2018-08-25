// Takes in a dictionary from genders to counts, displays as chart
import React from 'react'
import {PieChart, Pie} from 'recharts'

const GenderDemographicsChart = ({genders}) => {
  console.log("Rendering chart, genders are" + genders)
  console.log(genders)
  // var data = []
  // for (var key in genders.keys()) {
  //   console.log(key)
  //   if (data.hasOwnProperty(key)) {
  //     data.push([key, genders[key]])
  //   }
  // }
  return (
    <PieChart width={730} height={250}>
      <Pie data={genders} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8" />
    </PieChart>
  )
}

//TODO: Spin out the logic to convert dict -> list of objects into helper func.

//
// const rechartsDataFromDict = ({dict}) => {
//   // Format dictionary of keys:counts into a list of objects for recharts
//   var arr = []
//   for (var key in dict) {
//     if (dict.hasOwnProperty(key)) {
//       arr.push([key, dict[key]])
//     }
//   }
//   return arr
// }

export default GenderDemographicsChart
