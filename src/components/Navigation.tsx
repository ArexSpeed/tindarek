import { Link } from "react-router-dom";
import {
  ChatActiveIcon,
  ChatIcon,
  HeartActiveIcon,
  HeartIcon,
  StackActiveIcon,
  StackIcon,
  UserCircleActiveIcon,
  UserCircleIcon,
} from "./Icons";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          to="/discover"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group ${
            location.pathname === "/discover" && "border-t border-red-300"
          }`}
        >
          {location.pathname === "/discover" ? (
            <StackActiveIcon className="w-6 h-6 text-red-300" />
          ) : (
            <StackIcon className="w-6 h-6 text-red-300" />
          )}

          {/* <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Discover
          </span> */}
        </Link>
        <Link
          to="/matches"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group ${
            location.pathname === "/matches" && "border-t border-red-300"
          }`}
        >
          {location.pathname === "/matches" ? (
            <HeartActiveIcon className="w-6 h-6 text-red-300" />
          ) : (
            <HeartIcon className="w-6 h-6 text-red-300" />
          )}
        </Link>
        <Link
          to="/chat"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group ${
            location.pathname === "/chat" && "border-t border-red-300"
          }`}
        >
          {location.pathname === "/chat" ? (
            <ChatActiveIcon className="w-6 h-6 text-red-300" />
          ) : (
            <ChatIcon className="w-6 h-6 text-red-300" />
          )}
        </Link>
        <Link
          to="/profile"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group ${
            location.pathname === "/profile" && "border-t border-red-300"
          }`}
        >
          {location.pathname === "/profile" ? (
            <UserCircleActiveIcon className="w-6 h-6 text-red-300" />
          ) : (
            <UserCircleIcon className="w-6 h-6 text-red-300" />
          )}
        </Link>
      </div>
    </div>
  );
};
