import Cart from "../img/Cart";
import Logo from "../img/Logo";
import ProfileIcon from "../img/ProfileIcon.jsx";

export default function Header() {
  return (
    <div className="w-full h-20 bg-blue-900 flex sticky top-0 z-50">
      <div className="container max-w-screen-xl mx-auto px-5 flex items-center h-full justify-between">
        <Logo width={149} height={50} />
        <div className="w-2/4 h-full flex items-center ">
          <input
            type="text"
            className="w-4/5 rounded-s-3xl h-1/2 box-border p-4"
            placeholder="Search"
          />
          <button className="w-1/5 rounded-e-3xl h-1/2  border border-white text-white">
            Search
          </button>
        </div>
        <div className="flex gap-9">
          <div className="flex text-white gap-1">
            <ProfileIcon />
            <p>Log in</p>
          </div>
          <div className="flex gap-2 text-white ">
            <Cart />
            <div className="w-5 bg-green-500 h-5 rounded-3xl flex items-center justify-center p-3">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
