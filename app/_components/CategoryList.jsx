"use client";

import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { SkeletonCard } from "./CategoryListSkeleton";
import { useSearchParams } from "next/navigation";

const CategoryList = () => {
  const params = useSearchParams();
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);

  
  // use useEffect hook to update selectedCategory based on URL parameters
  useEffect(() => {
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [params]);
    
    
  // use UseEffect hook to call the getCategoryList function everytime the page loads to display the list of categories
  useEffect(() => {
    getCategoryList();
  }, []);



  const getCategoryList = async () => {
    setIsLoading(true);
    await GlobalApi.GetCategory().then((res) => {
      setCategoryList(res);
      setIsLoading(false);
    });
  };


  const ScrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };



  return (
    <div className=" relative lg:mt-10 mt-6">
      <div
        className=" flex  gap-4 overflow-auto scrollbar-hide  "
        ref={listRef}
      >
        {!isLoading ? (


          // if category list is present


          categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={"?category=" + category?.slug}
              key={index}
              className={`flex flex-col justify-center items-center gap-2 border p-3 rounded-xl min-w-32 min-h-28   hover:border-primary hover:bg-orange-50 cursor-pointer group ${
                selectedCategory === category.slug &&
                "text-primary border-primary bg-orange-50"
              }`}
            >
              <Image
                src={category.icon?.url}
                alt={category?.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-200"
              />
              <div className="text-sm font-medium group-hover:text-primary">
                {category?.name}
              </div>
            </Link>
          ))
        ) : (

          // write this like this
          // {[...Array(5)].map((_, index) => <SkeletonCard key={index} />)}
          // or

          <div className="flex justify-center gap-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
        <div>
          <ArrowRightCircle
            className="absolute  -right-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer"
            onClick={() => {
              ScrollRightHandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
