import Category from "./components/category";
import LatestPost from "./components/lastpost";
import Popular from "./components/popular";
import Tranding from "./components/tranding";
export default function Home() {
  return (
    <>
      <Tranding />
      <LatestPost />
      <Popular />
      <Category />
    </>
  );
}
