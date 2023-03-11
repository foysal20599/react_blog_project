export default function SettingLayout({ children }) {
  return (
    <section>
      <nav>
        <h1>This is Sidebar</h1>
      </nav>
      <main>{children}</main>
    </section>
  );
}
