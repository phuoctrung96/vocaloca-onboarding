import Footer from "../../components/footer"
import Cards from "../../components/home/cards"
import Faq from "../../components/home/faq"
import HeadSection from "../../components/home/headSection"

const Home = () => {
    return (
        <>
            <HeadSection />
            <Cards />
            <Faq />
            <Footer />
        </>
    )
}

export default Home;