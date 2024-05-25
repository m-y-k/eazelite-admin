import React, { useEffect, useState, useContext } from 'react'
import './recentActivity.css'
import CardFilter from '../card/cardFilter/CardFilter'
import RecentActivityItem from './recentActivityItem/RecentActivityItem'
import { GlobalContext } from '../../../App'

function RecentActivity() {
    const [items, setItems] = useState([])
    const {filter, handleFilterChange} = useContext(GlobalContext)

    const fetchData = () => {
        fetch('http://localhost:4000/recentactivity')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">
                Recent Activity <span>| {filter}</span>
            </h5>

            <div className="activity">
                {items && items.length > 0 &&
                    items.map(item => <RecentActivityItem key={item._id} item={item} />)
                }
            </div>
        </div>
    </div>
  )
}

export default RecentActivity