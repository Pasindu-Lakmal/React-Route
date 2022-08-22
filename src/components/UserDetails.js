import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const parems = useParams();
  const userId = parems.userId;
  return <div>Details aboth user {userId}</div>;
};
