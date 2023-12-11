import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <form
        onSubmit={() => {
          navigate("/onboarding");
        }}
        className="flex flex-col w-full p-4 gap-4"
      >
        <input
          type="text"
          className="bg-gray-50 border border-red-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          placeholder="You nickname"
          required
        />
        <button
          type="submit"
          className="text-white bg-red-300 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Get in
        </button>
      </form>
    </Layout>
  );
};
