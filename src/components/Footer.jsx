import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-between h-full w-full px-20 py-4 pb-3 max-md:px-4">
        <div className="text-sm">© {new Date().getFullYear()} StarGaze.<span className="max-md:hidden"> All Rights Reserved.</span></div>
        <div className="flex gap-5 items-center">
            <a href="#github"><Image src="./github.svg" height={25} width={25}  alt="github"/></a>
            <a href="#instagram"><Image src="./instagram.svg" height={25} width={25}  alt="instagram"/></a>
            <a href="#linkedin"><Image src="./linkedin.svg" height={25} width={25}  alt="linkedin"/></a>
        </div>
    </div>
  );
}