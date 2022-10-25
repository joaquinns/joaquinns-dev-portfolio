import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children, navbar = true }) => {
  return (
    <>
      {navbar && <Navbar />}
      <main className="container mx-auto p-4 sm:p-2 lg:-p-0 relative min-h-screen mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};
