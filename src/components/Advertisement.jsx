import { HiPhone, HiMail } from "react-icons/hi";

export function Advertisement({ span }) {
  return (
    <div className="hidden justify-between bg-backDark px-24 py-2 text-white lg:flex">
      <ul className="ul hover:[&>li]:duration-400 flex flex-1 flex-row gap-3 text-sm [&>li>a]:font-normal [&>li]:transition-colors [&>li]:duration-700 hover:[&>li]:text-black hover:[&>li]:transition-colors">
        <li>
          <a href="#">Tw</a>
        </li>
        <li>
          <a href="#">Fb</a>
        </li>
        <li>
          <a href="#">Ig</a>
        </li>
        <li>
          <a href="#">Yt</a>
        </li>
      </ul>
      <p className="flex-1 text-center font-light">{span}</p>
      <ul className="hover:[&>li]:duration-400 flex flex-1 justify-end  gap-2 [&>li]:transition-colors [&>li]:duration-700 hover:[&>li]:text-black hover:[&>li]:transition-colors">
        <li className="flex gap-2">
          <HiPhone className="self-center" />
          <a href="#">
            <span className="self-center text-sm font-normal">
              +569 - 7211 - 6431
            </span>
          </a>
        </li>
        <span>|</span>
        <li className="flex gap-2">
          <HiMail className="self-center" />
          <a href="#">
            <span className="text-md self-center font-normal">
              info@joyasbrillas.cl
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
