import Header from "./Header";
import Nav from "./Nav";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import Editor from "./Editor";
import Footer from "./Footer";
import Linked from "./Linked";
import Leaderboard from "./Leaderboard";
import Recip from "./Recip";
import Buttons from "./Buttons";

function Home() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Testimonials />
      <Benefits />
      <Editor />
      <Linked />
      <Leaderboard />
      <Recip />
      <Buttons />
      <Footer />
    </div>
  );
}

export default Home;
