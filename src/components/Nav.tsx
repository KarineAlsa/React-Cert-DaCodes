import { PiUserCircleLight } from "react-icons/pi";

export default function Nav() {
  return (
    <div>
      <ul className="px-12 flex justify-between items-center bg-[#5141EA] w-full h-12">
        <li className="w-24 cursor-pointer ">
          <img alt="logo" src="/DacodesLogo.png"/>
        </li>
        <li className="text-white cursor-pointer">
          <a href="/login">
            <PiUserCircleLight className="h-10 w-10" />
          </a>
        </li>
      </ul>
    </div>
  );
}
