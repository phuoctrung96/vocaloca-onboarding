import Footer from "../../components/footer"
import HowItWorks from "../../components/home/HowItWorks"
import Faq from "../../components/home/Faq"
import HeadSection from "../../components/home/HeadSection"

const Home = () => {
    return (
        <>
            <HeadSection />
            <HowItWorks />
            <Faq />
            <Footer />
        </>
    )
}

export default Home;