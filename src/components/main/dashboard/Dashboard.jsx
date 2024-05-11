import React from 'react'
import './dashboard.css'
import Reports from '../reports/Reports'
import RecentSales from '../recentSales/RecentSales'
import TopSelling from '../topSelling/TopSelling'
import RecentActivity from '../recentActivity/RecentActivity'
import BudgetReport from '../budgetReport/BudgetReport'
import WebTraffic from '../webTraffic/WebTraffic'
import News from '../news/News'
import Cards from '../cards/Cards'

function Dashboard() {
  

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                  <Cards />
                  <div className="col-12">
                    <Reports />  
                  </div> 
                  <div className="col-12">
                    <RecentSales />  
                  </div> 
                  <div className="col-12">
                    <TopSelling />  
                  </div>       
                </div>
            </div>
            <div className="col-lg-4">
              <RecentActivity />
              <BudgetReport />
              <WebTraffic />
              <News />
            </div>
        </div>
    </section>
  )
}

export default Dashboard