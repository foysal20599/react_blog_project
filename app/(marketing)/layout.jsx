export default function MarketingLayouts({ children }) {
  return (
    <section>
      <nav className="m-2">
        <h1>This is Marketing Layout</h1>
      </nav>
      <main>{children}</main>
    </section>
  );
}
