import '../css/home.css';
import Header from "../componets/home_components/header";
import HowWeWork from "../componets/home_components/howWeWork";
import Strategies from "../componets/home_components/strategies";
import Feedback from "../componets/home_components/feedback";
import Footer from "../componets/home_components/footer";

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
