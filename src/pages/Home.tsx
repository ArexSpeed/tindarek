import { Signin } from "../components/Signin";
import { Layout } from "../components/Layout";
import { HeartActiveIcon } from "../components/Icons";
import logo from "../assets/heartlogo.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full py-4">
          <img src={logo} alt="logo" className="h-[250px]" />
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Tindarek
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <HeartActiveIcon className="w-6 h-6 text-pink-500" />
          Your dreams are here
          <HeartActiveIcon className="w-6 h-6 text-red-500" />
        </div>
        <Signin />
      </div>
    </Layout>
  );
};

export default Home;
