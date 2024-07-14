import Articles from "./components/Articles";
import ContactForm from "./components/ContactForm";
import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperince from "./components/WorkExperince";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <ProfileOverview />
    <Projects />
    <Skills />
    <WorkExperince />  
    <Articles />
    <ContactForm /> 
    <Footer />                       
    </>
  );
}
