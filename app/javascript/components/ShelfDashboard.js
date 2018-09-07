import React from 'react'
import BookTable from './BookTable'
import DemographicsChart from './DemographicsChart'

// Takes in a shelf of books, a loading indicator, Maps of gender and Country
// Demographics, then renders the dashboard with all shelf information
const ShelfDashboard = ({shelf, shelfLoading, genders, countries}) => {
  const welcomeText = "Your Shelf"
  return (
    <div>
      <h1 className="my-4 text-center">{welcomeText}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <DemographicsChart dataMap={genders} title={"Gender"}></DemographicsChart>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <DemographicsChart dataMap={countries} title = {"Country"}></DemographicsChart>
          </div>
        </div>
      </div>
      <BookTable shelf={shelf} shelfLoading={shelfLoading} />
    </div>
  )
}

export default ShelfDashboard
