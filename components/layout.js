import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <html className="bg-gray-950 text-white">
        <Header />
        <body className="h-screen"><main>{children}</main></body>
        <Footer />
</html>
</>
  );
}
