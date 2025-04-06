import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { CameraIcon, EyeSolidIcon } from "../components/Icons";
import { TopBar } from "../components/TopBar";
import { getUserData, updateUserData } from "../services/users";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { addUserData, selectedMyUserData } from "../context/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../context/store";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";

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

const Profile = () => {
  const image1Ref = useRef<HTMLInputElement>(null);
  const profileForm = useRef(null!);
  const [imagePreview, setImagePreview] = useState("");
  const [userData, setUserData] = useState<User>({
    id: "",
    nickname: "",
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
  const dispatch = useAppDispatch();
  const myUser = useAppSelector(selectedMyUserData);
  const navigate = useNavigate();
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getUserData(myUser.user.nickname);
      setUserData(data as User);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!myUser.user.id) {
      navigate("/");
    }
  }, []);

  const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const url = window.URL.createObjectURL(file);
    setImagePreview(url);
    uploadImage(file);
  };

  const uploadImage = (file: File) => {
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        userData.imageSrc = url;
      });
    });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(profileForm.current);
    const payload = {
      id: myUser.user.id,
      nickname: userData.nickname,
      birth: form.get("birth")?.toString() || userData.birth,
      description: form.get("description")?.toString() || userData.description,
      firstName: form.get("firstName")?.toString() || userData.firstName,
      imageSrc: userData.imageSrc,
      lastName: form.get("lastName")?.toString() || userData.lastName,
      location: form.get("location")?.toString() || userData.location,
      profession: form.get("profession")?.toString() || userData.profession,
      sex: form.get("sex")?.toString() || userData.sex,
      shortDescription:
        form.get("shortDescription")?.toString() || userData.shortDescription,
    };

    try {
      await updateUserData(payload);
      dispatch(addUserData(payload));
      setOpenToast(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Layout>
      <TopBar title="Profile" />
      <div className="relative flex flex-col items-center justify-start w-full h-full gap-4 p-2 overflow-auto">
        <section className="flex items-center justify-center w-full">
          <form
            onSubmit={(e: React.SyntheticEvent) => onSubmit(e)}
            ref={profileForm}
            className="flex flex-col items-center justify-center w-full gap-4 p-4"
          >
            <div className="flex w-[192px] h-[256px] rounded-lg relative bg-gray-300 overflow-hidden">
              <div className="absolute bottom-0 right-0">
                <input
                  className="file-upload__input"
                  ref={image1Ref}
                  type="file"
                  name="image1"
                  id="image1"
                  onChange={(e) => handleImagePreview(e)}
                />
                <button
                  className="file-upload__button"
                  type="button"
                  onClick={() => image1Ref.current?.click()}
                >
                  <CameraIcon className="w-6 h-6 text-white" />
                </button>
              </div>
              {userData.imageSrc && imagePreview === "" && (
                <img
                  src={userData.imageSrc}
                  className="object-fill w-full h-full"
                />
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  className="object-contain w-full h-full"
                />
              )}
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <p>{userData.nickname}</p>
              <Link
                to={`/account/${myUser.user.id}`}
                className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full"
              >
                <EyeSolidIcon className="w-8 h-8 text-blue-400" />
              </Link>
            </div>

            <div className="grid w-full grid-cols-2 gap-2">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  placeholder="First name"
                  defaultValue={userData.firstName}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  placeholder="Last name"
                  defaultValue={userData.lastName}
                  required
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  placeholder="What are you doing"
                  defaultValue={userData.profession}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  placeholder="City, Country"
                  defaultValue={userData.location}
                  required
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Date of birth
                </label>
                <input
                  type="text"
                  id="birth"
                  name="birth"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  placeholder="DD-MM-YYYY"
                  defaultValue={userData.birth}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Sex
                </label>
                <select
                  id="sex"
                  name="sex"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                >
                  <option>-</option>
                  <option value="female">Yes</option>
                  <option value="female">No</option>
                  <option value="male" selected={userData.sex === "male"}>
                    Male
                  </option>
                  <option value="female" selected={userData.sex === "female"}>
                    Female
                  </option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Catchy text
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                rows={2}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-200 focus:border-red-200 "
                placeholder="You're my future"
                defaultValue={userData.shortDescription}
              ></textarea>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tell something about yourself
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-200 focus:border-red-200 "
                placeholder="Description"
                defaultValue={userData.description}
              ></textarea>
            </div>
            <Toast openToast={openToast} setOpenToast={setOpenToast} />
            <button
              type="submit"
              className="text-white bg-red-300 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update
            </button>
          </form>
        </section>
      </div>
      <div className="w-full h-16 bg-transparent" />
    </Layout>
  );
};

export default Profile;
