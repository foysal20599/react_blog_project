import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
export default function Header() {
  return (
    <header className="bg-black-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center sm:py-0">
          <input type="text" className="input_text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <span className="text-bold uppercase text-3xl"> Design</span>
          </Link>
        </div>
        <div className="order-2 w-96  flex justify-center">
          <div className="flex  gap-6">
            <Link href={"/"}>
              <span>
                <ImFacebook className="text-gray-400 hover:text-orange-800" />
              </span>
            </Link>
            <Link href={"/"}>
              <span>
                <ImTwitter className="text-gray-400 hover:text-orange-800" />
              </span>
            </Link>
            <Link href={"/"}>
              <span>
                <ImYoutube className="text-gray-400 hover:text-orange-800" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
