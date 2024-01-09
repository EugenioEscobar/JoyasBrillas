export function Breadcrumb() {
  return (
    <div className="hidden justify-between bg-gray-100 px-24 py-2 text-white lg:flex">
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
    </div>
  );
}
