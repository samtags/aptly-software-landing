import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoKubernetes } from "react-icons/bi";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";

export default function Companies({ showHeader = true }) {
  return (
    <section className="mt-8">
      {showHeader && (
        <header className="uppercase text-[#697289] text-xs font-bold text-center">
          Tools
        </header>
      )}
      <div className="flex justify-center">
        <div className="side-fade">
          <div className="flex gap-8 justify-center items-center mt-4 no-wrap overflow-x-hidden text-[#9AA0B3]">
            <TbBrandReactNative size={40} />
            <SiTypescript size={40} />
            <FaNodeJs size={40} />
            <FaGolang size={40} />
            <BiLogoPostgresql size={40} />
            <BiLogoKubernetes size={40} />
            <DiGoogleCloudPlatform size={40} />
            <IoLogoVercel size={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
