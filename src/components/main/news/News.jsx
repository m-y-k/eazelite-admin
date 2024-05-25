import React, { useContext, useEffect, useState } from 'react'
import './news.css'
import CardFilter from '../card/cardFilter/CardFilter'
import NewsPostItem from './newsPostItem/NewsPostItem'
import { GlobalContext } from '../../../App'

function News() {
    const [news, setNews] = useState([])
    const {filter, handleFilterChange} = useContext(GlobalContext)

    const fetchData = () => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(e => console.log(e.message))
    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body pb-0">
            <h5 className="card-title">
                News <span>| {filter}</span>
            </h5>

            <div className="news">
                {news && news.length > 0 &&
                    news.map(item => <NewsPostItem key={item._id} item={item} />)
                }
            </div>
        </div>
    </div>
  )
}

export default News
