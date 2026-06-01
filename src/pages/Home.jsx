import Carousel from "../components/Carousel";
import Feature from "../components/Features";
import MidBanner from "../components/MidBanner";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
        <Carousel/>
        <MidBanner/>
        <Feature/>
        </div>
    );
}
