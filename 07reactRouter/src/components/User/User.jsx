import React from "react";
import { useParams } from "react-router-dom";
// to extract data from url

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-black text-white text-3xl p-4 text-center">
      {" "}
      Username: {userid}{" "}
    </div>
  );
}

export default User;