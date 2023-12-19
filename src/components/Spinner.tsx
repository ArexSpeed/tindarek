import { HeartActiveIcon } from "./Icons";

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lds-ellipsis">
        <div>
          <HeartActiveIcon className="w-6 h-6 text-red-500" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-pink-500" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-pink-400" />
        </div>
      </div>
      <div className="lds-ellipsis">
        <div>
          <HeartActiveIcon className="w-6 h-6 text-pink-400" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-pink-500" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <HeartActiveIcon className="w-6 h-6 text-red-500" />
        </div>
      </div>
    </div>
  );
};
