import React from "react";
import { ITableRow } from "./types/types";
import { listData } from "./../../mockData/listData";

const TableList = () => {
  const Row = (item: ITableRow) => {
    return (
      <div className="d-flex flex-column align-center justify-center card mt-4 border">
        <div>{item.firstName}</div>
        <div>{item.lastName}</div>
        <div>Your Favorite Food is {item.favoriteFood}</div>
      </div>
    );
  };

  return listData.map((item: ITableRow) => {
    return (
      <Row
        className=""
        firstName={item.firstName}
        lastName={item.lastName}
        favoriteFood={item.favoriteFood}
      />
    );
  });
};

export default TableList;
