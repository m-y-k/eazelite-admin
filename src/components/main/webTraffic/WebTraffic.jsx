import React, { useContext } from 'react'
import CardFilter from '../card/cardFilter/CardFilter'
import WebTrafficChart from './webTrafficChart/WebTrafficChart'
import { GlobalContext } from '../../../App'

function WebTraffic() {
    const {filter, handleFilterChange} = useContext(GlobalContext)

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body pb-0">
            <h5 className="card-title">
                Website Traffic <span>| {filter}</span>
            </h5>
            <WebTrafficChart />
        </div>
    </div>
  )
}

export default WebTraffic