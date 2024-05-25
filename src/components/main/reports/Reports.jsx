import React, { useContext } from 'react'
import './reports.css'
import CardFilter from  '../card/cardFilter/CardFilter'
import ReportCharts from './reportCharts/ReportCharts'
import { GlobalContext } from '../../../App'

function Reports() {
  const {filter, handleFilterChange} = useContext(GlobalContext)

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>/ {filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  )
}

export default Reports