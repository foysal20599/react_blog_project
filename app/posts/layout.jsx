import PostNav from "../components/postnav";

export default function PostLauout({ children }) {
  return (
    <section className="container mx-auto md:px-20 py-16">
      {/* <h1 className="text-center font-bold text-4xl py-5">Post Details</h1> */}
      <div className="flex sm:flex-1 gap-5">
        <div className="item w-3/12 py-20">
          <PostNav></PostNav>
        </div>
        <div className="item w-9/12">
          <main>{children}</main>
        </div>
      </div>
    </section>
  );
}
