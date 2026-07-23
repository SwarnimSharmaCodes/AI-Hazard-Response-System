import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import HazardLibrary from "../components/home/HazardLibrary";
// import HowItWorks from "../components/home/HowItWorks";
// import CTA from "../components/home/CTA";

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Stats />
            <HazardLibrary />
            {/* <HowItWorks />
            <CTA /> */}
        </>
    );
}

export default Home;