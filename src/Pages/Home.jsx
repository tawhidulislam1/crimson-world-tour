
import About from "../Sections/About";
import Destination from "../Sections/Destination";
import EasyTips from "../Sections/EasyTips";
import Header from "../Sections/Header";
import TourPlace from "../Sections/TourPlace";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Destination></Destination>
            <EasyTips></EasyTips>
            <TourPlace></TourPlace>
            <About></About>
        </div>
    );
};

export default Home;