import FacebookIcon from "../img/FacebookIcon.jsx";
import GoogleIcon from "../img/GoogleIcon.jsx";
import Logo from "../img/Logo.jsx";
import WhatsAppIcon from "../img/WhatsAppIcon.jsx";

export default function Footer() {
  return (
    <div className="h-[374px] bg-blue-900 w-full">
      <div className="container max-w-screen-xl mx-auto  h-full py-16 flex-col justify-between flex px-5">
        <div className="">
          <Logo />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <GoogleIcon />
            <FacebookIcon />
            <WhatsAppIcon />
          </div>
          <div className="w-96 text-white">
            © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and
            Conditions{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
