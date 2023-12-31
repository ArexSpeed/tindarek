import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { findUserExist } from "../services/users";
import { useAppDispatch } from "../context/store";
import { addUserData } from "../context/slices/userSlice";

type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  birth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};

export const Signin = () => {
  const navigate = useNavigate();
  const signinForm = useRef(null!);
  const dispatch = useAppDispatch();
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(signinForm.current);
    const nickname = form.get("nickname");
    const { isUserExist, userData } = await findUserExist(nickname?.toString());
    if (isUserExist) {
      dispatch(addUserData(userData as User));
      navigate("/discover");
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          nickname: nickname,
          birth: "",
          description: "",
          firstName: "",
          imageSrc: "",
          lastName: "",
          location: "",
          profession: "",
          sex: "",
          shortDescription: "",
        });
        dispatch(
          addUserData({
            id: docRef.id,
            nickname: nickname?.toString() || "",
            birth: "",
            description: "",
            firstName: "",
            imageSrc: "",
            lastName: "",
            location: "",
            profession: "",
            sex: "",
            shortDescription: "",
          })
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      navigate("/profile");
    }
  };

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => onSubmit(e)}
      ref={signinForm}
      className="flex flex-col w-full gap-4 p-4"
    >
      <input
        type="text"
        id="nickname"
        name="nickname"
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
  );
};
