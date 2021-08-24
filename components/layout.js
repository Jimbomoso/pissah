import Footer from "../components/footer";


export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
