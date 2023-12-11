import React from "react";
import { useParams } from "react-router-dom";

const AccountDetails = () => {
  const { id } = useParams();
  return <div>AccountDetails {id}</div>;
};

export default AccountDetails;
