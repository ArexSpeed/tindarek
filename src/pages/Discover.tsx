import { Layout } from "../components/Layout";
import { Cards } from "../components/Cards";
import { CardActions } from "../components/CardActions";
import { TopBar } from "../components/TopBar";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";

const Discover = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Layout>
      <TopBar />
      {loading ? (
        <div className="relative flex flex-col justify-center w-full h-full">
          <Spinner />
          <p className="p-4 italic font-medium text-center">
            Nasz Arektificial Intelligence analizuje Twoje dane i szuka dla
            Ciebie idealnych 100% pewnych objawień. Jeszcze chwilunia!
          </p>
        </div>
      ) : (
        <div className="relative flex flex-col justify-center w-full h-full overflow-hidden">
          <Cards />
          <CardActions />
        </div>
      )}
    </Layout>
  );
};

export default Discover;
