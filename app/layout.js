import "./globals.css";
import Head from "./Head";
import Footer from "./header/footer";
import Header from "./header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        <hr />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
