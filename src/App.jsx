import Header from "./components/header";
import SectionStart from "./components/sectionStart";
import SectionResume from "./components/sectionResume";
import SectionWork from "./components/sectionWork";
import SectionContact from "./components/sectionContact";

function App() {
  return (
    <>
      <Header />
      {/* <StairTransition /> */}
      {/* <PageTransition>{children}</PageTransition> */}
      <SectionStart />
      <SectionResume />
      <SectionWork />
      <SectionContact />
    </>
  );
}

export default App;
