import React, { ChangeEvent, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { CameraIcon } from "../components/Icons";

const Profile = () => {
  const image1Ref = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState("");
  const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const url = window.URL.createObjectURL(file);
    setImagePreview(url);
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start w-full h-full">
        <h2 className="font-semibold">Profile Details</h2>
        <section className="flex items-center justify-center w-full h-full">
          <form
            onSubmit={() => {}}
            className="flex flex-col items-center w-full gap-4 p-4"
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
              {imagePreview && (
                <img src={imagePreview} className="object-fill w-full h-full" />
              )}
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-red-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
              placeholder="Nickname"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-red-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-red-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
              placeholder="Last name"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-red-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
              placeholder="Date of birth"
            />
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tell something about yourself
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-200 focus:border-red-200 "
                placeholder="Description"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-red-300 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
