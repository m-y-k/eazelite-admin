import React, { useEffect, useState, useContext } from 'react'
import '../recentSales/recentSales.css'
import CardFilter from '../card/cardFilter/CardFilter'
import RecentSalesTable from './recentSalesTable/RecentSalesTable'
import { GlobalContext } from '../../../App'

function RecentSales() {
  const [items, setItems] = useState([])
  const {filter, handleFilterChange} = useContext(GlobalContext)

  const fetchData = () => {
    fetch('http://localhost:4000/recentsales')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e.message))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  )
}

export default RecentSales
