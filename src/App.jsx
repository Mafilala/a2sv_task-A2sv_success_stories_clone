import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import SuccessStory from "../Components/SuccessStory";
import Stories from "../Components/Stories";
import Acceptance from "../Components/Acceptance";
import Growth from "../Components/Growth";
import Nav from "../Components/Nav";
import './App.css'
const App = () => {
  return (
    <>
    <Nav />
    <div className="h-screen w-screen bg-slate-100 flex flex-col gap-2">
        <SuccessStory />
        <Acceptance />
        <Stories />
        <Growth />
        <NewsLetter />
        <Footer /> 
  
    </div>
    </>
  );
};

export default App;
