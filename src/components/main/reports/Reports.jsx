import React, { useState } from 'react'
import './reports.css'
import CardFilter from  '../card/cardFilter/CardFilter'
import ReportCharts from './reportCharts/ReportCharts'

function Reports() {
  const [filter, setFilter] = useState('Today')
    const handleFilterChange = filter => {
        setFilter(filter)
    }

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