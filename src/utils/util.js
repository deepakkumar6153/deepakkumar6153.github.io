import { SHOW_ALL } from "../constants/appConstants";

export const translateOKR = (apiData) => {
  //create filters
  //create parent-child tree for OKRs
  //keep translation pure
  let objectives = {},
    filters = {},
    okrArr = [],
    filterArr = [],
    filterId = 1;
  for (let entry of [...apiData]) {
    let { id, category, parent_objective_id } = entry;
    filters[category] = category;
    if (parent_objective_id === "") {
      entry.children = [];
      objectives[id] = entry;
    } else {
      //avoid ill formed entries, e.g. MKT0031, MKT0032
      objectives[parent_objective_id] &&
        objectives[parent_objective_id].children.push(entry);
    }
  }

  for (let parentKey of Object.keys(objectives)) {
    okrArr.push(objectives[parentKey]);
  }

  for (let category of Object.keys(filters)) {
    let filterObj = { id: filterId, name: category };
    filterArr.push(filterObj);
    filterId++;
  }

  if (filterArr.length > 0) {
    filterArr = [...[{ id: 0, name: SHOW_ALL }], ...filterArr];
  }
  return [okrArr, filterArr];
};
