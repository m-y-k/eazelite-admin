import React, { useContext } from "react";
import CardFilter from "../card/cardFilter/CardFilter";
import BudgetChart from "./budgetChart/BudgetChart";
import { GlobalContext } from "../../../App";

function BudgetReport() {
  const { filter, handleFilterChange } = useContext(GlobalContext);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Budget Report <span>| {filter}</span>
        </h5>
        <BudgetChart />
      </div>
    </div>
  );
}

export default BudgetReport;
