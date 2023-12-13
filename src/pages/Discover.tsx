import { Layout } from "../components/Layout";
import { Cards } from "../components/Cards";
import { CardActions } from "../components/CardActions";
import { TopBar } from "../components/TopBar";

const Discover = () => {
  return (
    <Layout>
      <TopBar />
      <div className="relative flex flex-col justify-center w-full h-full overflow-hidden">
        <Cards />
        <CardActions />
      </div>
    </Layout>
  );
};

export default Discover;
