import '../css/safe.css';
import Header from "../componets/safe_components/header";
import HowWeWork from "../componets/safe_components/howWeWork";
import Strategies from "../componets/safe_components/strategies";
import Feedback from "../componets/safe_components/feedback";
import Footer from "../componets/safe_components/footer";

function App() {
  return (
    <div className="main">
      <Header/>
      <HowWeWork/>
      <Strategies/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
