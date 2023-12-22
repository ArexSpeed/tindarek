import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type Props = {
  openToast: boolean;
  setOpenToast: Dispatch<SetStateAction<boolean>>;
};

export const Toast = ({ openToast, setOpenToast }: Props) => {
  const closeToast = () => {
    setOpenToast(false);
  };
  return (
    <div
      className={`${
        !openToast && "hidden"
      } flex items-center w-full max-w-xs p-4 text-gray-700 bg-green-400 rounded-lg shadow top-10"`}
    >
      <div className="text-sm font-normal">
        Dane zaktualizowane. Teraz możesz szukać swojego przeznaczenia!
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex items-center space-x-2 ms-auto rtl:space-x-reverse">
          <Link to="/discover">
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-green-200 text-gray-600 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={closeToast}
            >
              Ide
            </button>
          </Link>
        </div>
        <button
          type="button"
          className="text-gray-800 bg-transparent outline-none "
          onClick={closeToast}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
