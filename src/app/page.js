import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import GlossarySection from "./component/GlossarySection";
import SideSection from "./component/SideSection";
import ContactForm from "./component/ContactForm";
import FooterSection from "./component/FooterSection";


export default function Home() {
  return (
    <>
      <div className="Headbg">
        <NavBar />
        <SearchBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-12">
            <div className="costMargin">
              <GlossarySection />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <SideSection />
          </div>

          <div className="container">
            <ContactForm />
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  );
}
