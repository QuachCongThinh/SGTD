import Header from "./component/Header";
import Banner from "./component/Banner";
import "./styles/Reset.scss";
import Difference from "./component/Difference";
import ScrollToTop from "./component/ScrollToTop";
import Service from "./component/Service";
import Workflow from "./component/Workflow";
import Linked from "./component/Linked";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Difference />
      <Service />
      <Workflow />
      <Linked />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
