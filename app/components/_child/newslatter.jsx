export default function newslatter() {
  return (
    <section className="bg-gray-50 mt-16">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="text-black font-bold text-3xl">Subscribe Newslatter</h1>
        <div className="py-4">
          <input
            type="text"
            className="shadow border rounded-full py-3 px-3 w-9/12 focus:outline-none focus:focus-outline"
            placeholder="Please write your email"
          />
        </div>
        <button className="bg-orange-400 px-20 py-3 rounded-full">Subscribe</button>
      </div>
    </section>
  );
}
