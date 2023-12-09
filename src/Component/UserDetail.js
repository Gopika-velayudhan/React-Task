import { useParams } from "react-router-dom";
import React from "react";

export const UserDetail = () => {
  const {userId} = useParams()

  
  return (
    <div>
        Details about user {userId}
    </div>
  )
}
