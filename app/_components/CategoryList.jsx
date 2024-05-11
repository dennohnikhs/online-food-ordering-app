"use client";

import React, { useEffect } from "react";
import GlobalApi from "../_utils/GlobalApi";

const CategoryList = () => {
  /**
   * useEffect to get category lis
   */
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.GetCategory().then((res) => {
      console.log(res);
    });
  };
  return <div>CategoryList</div>;
};

export default CategoryList;
