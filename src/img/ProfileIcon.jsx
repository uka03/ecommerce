export default function ProfileIcon({ color, width, height }) {
  return (
    <svg
      width={width ? `${width}` : "24"}
      height={height ? `${height}` : "24"}
      viewBox="0 0 24 24"
      fill={color ? `${color}` : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5862 22C20.5862 18.13 16.7362 15 11.9962 15C7.25625 15 3.40625 18.13 3.40625 22"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
