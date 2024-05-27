"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from "./BusinessItem";

const BusinessList = () => {
  const [category, setCategory] = useState("cake");
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentCategory = searchParams.get("category") || "cake";
    setCategory(currentCategory);
    getBusinessList(currentCategory);
  }, []);

  const getBusinessList = (_category) => {
    GlobalApi.GetBusiness(_category)
      .then((res) => {
        setBusinessList(res?.restaurants);
        setIsLoading(false);
        console.log("list of available restaurants", res);
      })
      .catch((error) => {
        console.error("Failed to fetch businesses:", error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h className="font-bold text-primary">{businessList?.length} Results</h>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 ">
        {businessList.map((restaurant, index) => {
          return <BusinessItem key={index} business={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default BusinessList;
