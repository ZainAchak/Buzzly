import { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import { useFeedsQuery } from "../Queries/useFeedsQuery";
import Loading from "../components/Loading";

export default function Feed() {
  const{data, isLoading, isPending, error} = useFeedsQuery()

  if(isPending){
    return <Loading/>
  }
  console.log(data)
  return <h1>This is Feed</h1>;
}
