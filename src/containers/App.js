import React, { useState, useEffect } from "react";
import { SHOW_ALL, URL_OKR } from "../constants/appConstants.js";
import Objective from "../components/Objective.js";
import { translateOKR } from "../utils/util";
import s from "./App.module.scss";
import Loading from "../components/Loading.js";

const App = () => {
  const [okrData, setOKRdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterValues, setFilterValues] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState("");

  useEffect(() => {
    fetch(URL_OKR)
      .then((r) => r.json())
      .then((response) => {
        setIsLoading(false);
        const [okrArr, filterArr] = translateOKR(response.data);
        setOKRdata(okrArr);
        setFilterValues(filterArr);
        //if valid data, set initial filter to show all
        filterArr.length > 0 && setAppliedFilter(filterArr[0].name);
      })
      .catch(() => {
        alert("Something went wrong, please try again!!");
      });
  }, []);

  const getFilteredObjectives = () => {
    return appliedFilter === SHOW_ALL
      ? okrData
      : okrData.filter((objective) => {
          return objective.category === appliedFilter;
        });
  };

  const onFilterChange = (e) => {
    let appliedFilter = e.target.value;
    setAppliedFilter(appliedFilter);
  };

  return (
    <div className={s.app}>
      {filterValues.length > 0 && (
        <header className={s.header}>
          <div className={s.filter}>
            <select
              name={"selectFilters"}
              value={appliedFilter}
              onChange={onFilterChange}
            >
              {filterValues.map(({ id, name }) => {
                return (
                  <option className={s.option} key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
        </header>
      )}
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {getFilteredObjectives().map((objective) => {
              return <Objective key={objective.id} {...objective} />;
            })}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
