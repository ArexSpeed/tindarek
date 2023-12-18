import { Layout } from "../components/Layout";
import { Cards } from "../components/Cards";
import { CardActions } from "../components/CardActions";
import { TopBar } from "../components/TopBar";

import { useEffect, useRef, useState } from "react";
import {
  collection,
  getDoc,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const Discover = () => {
  type List = {
    id: string;
  };
  const [movieList, setMovieList] = useState<List[]>([]);

  //console.log(movieList);
  console.log(db);

  const getMovieList = async () => {
    console.log("get in movieList");
    //console.log("col", collection);
    // const moviesCollectionRef = collection(db, "users");
    // console.log("ref", moviesCollectionRef);
    // const data = await getDocs(collection(db, "tests"));
    // console.log("data", data);
    try {
      console.log("try");
      const data = await getDocs(collection(db, "tests"));
      console.log("data", data);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <Layout>
      <TopBar />
      <div className="relative flex flex-col justify-center w-full h-full overflow-hidden">
        <Cards />
        <CardActions />
        {movieList.map((movie, index) => (
          <span key={index}>{movie?.name}</span>
        ))}
      </div>
    </Layout>
  );
};

export default Discover;
