// Takes in a dictionary from genders to counts, displays as chart
import React from 'react'
import {PieChart, Pie} from 'recharts'

const GenderDemographicsChart = ({genders}) => {
  //Takes in genders, a Map, formats properly for recharts as list of objects
  // I swear my Javascript style will improve
  console.log("Rendering chart, genders are" + genders)
  console.log(genders)
  console.log(genders.keys())
  const gendersArr = Array.from(genders.keys())
  var data = []
  var i = 0
  for (i = 0; i < gendersArr.length; i++) {
    var key = gendersArr[i]
    data.push({"name": key, "value": genders.get(key)})
  }
  return (
    <PieChart width={730} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8" />
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
