import React, {useState, useEffect, useContext} from 'react'
import '../topSelling/topSelling.css'
import CardFilter from '../card/cardFilter/CardFilter'
import TopSelingItem from './topSellingItem/TopSelingItem'
import { GlobalContext } from '../../../App'

function TopSelling() {
  const [items, setItems] = useState([])
  const {filter, handleFilterChange} = useContext(GlobalContext)

  const fetchData = () => {
    fetch('http://localhost:4000/topselling')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e.message))
  }
  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope='col'>Preview</th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'>Sold</th>
              <th scope='col'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {items && 
              items.length > 0 &&
              items.map(item => <TopSelingItem key={item._id} item={item} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSelling