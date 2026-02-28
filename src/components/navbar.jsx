import { HiOutlineMenu } from "react-icons/hi";
import { FaStarOfLife } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="py-2 px-4">
      <nav className="bg-[#25272c] p-3 rounded-[32px] flex items-center justify-between">
        <div className="flex gap-2">
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
            <FaStarOfLife fontSize={14} />
          </div>
          <span className="font-black text-white text-xl">
            Apt<span className="text-[#E07766]">ly</span>
          </span>
        </div>
        <button className="bg-white rounded-full p-2">
          <HiOutlineMenu fontSize={20} />
        </button>
      </nav>
    </div>
  );
}
