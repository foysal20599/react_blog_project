import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newslatter from "../components/_child/newslatter";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <Newslatter />
      <div className="container max-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-2 text-gray-400"> Copyright &#169; 2023 All right receiver</p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
