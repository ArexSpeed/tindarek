import { SVGAttributes } from "react";

export function ChatIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </svg>
  );
}

export function ChatActiveIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
      />
    </svg>
  );
}

export function HeartIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export function HeartActiveIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
    </svg>
  );
}

export function UserCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function UserCircleActiveIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
      />
    </svg>
  );
}

export function StackIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
      />
    </svg>
  );
}

export function StackActiveIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
    </svg>
  );
}

export function CameraIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  );
}

export function HandThumbUpSolidIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
    </svg>
  );
}

export function EyeSolidIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
      />
    </svg>
  );
}

export function CakeSolidIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
    </svg>
  );
}

export function HandRaisedIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function SendIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}
