"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from "./BusinessItem";
import BusinessItemSkeleton from "./BusinessItemSkeleton";

const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
     params&&setCategory(params.get("category"))
     params&&getBusinessList(params.get("category"))
     getBusinessList(params.get("category"));

   
  }, [params]);

  const getBusinessList = (_category) => {
    GlobalApi.GetBusiness(_category)
      .then((res) => {
        setBusinessList(res?.restaurants || []);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };



  return (
    <div>
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h1 className="font-bold text-primary">{businessList?.length} Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 ">
        {!isLoading? businessList.map((restaurant, index) => {
          return <BusinessItem key={index} business={restaurant} />;
        }):[1,2,3,4,5,6,7,8,9].map((item,index)=>
          <BusinessItemSkeleton/>
        )}
      </div>
    </div>
  );
};

export default BusinessList;
