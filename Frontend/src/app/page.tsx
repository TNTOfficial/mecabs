import Home from "./(frontend)/page";
import Navbar from "./(frontend)/components/Navbar";
import Footer from "./(frontend)/components/Footer";

const DefaultLayout = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <Footer />
    </>
  );
};

export default DefaultLayout;
