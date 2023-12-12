import React from "react";
import { Layout } from "../components/Layout";
import { Cards } from "../components/Cards";
import { CardActions } from "../components/CardActions";

const Discover = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-full overflow-hidden">
        <Cards />
        <CardActions />
      </div>
    </Layout>
  );
};

export default Discover;
