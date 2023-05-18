import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <html class="bg-gray-950 text-white">
        <Header />
        <body class="h-screen"><main>{children}</main></body>
        <Footer />
</html>
</>
  );
}
