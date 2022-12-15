import Header from "../../components/header"
import Footer from "../../components/footer"
import Introduction from "../../components/analysis/Introduction";
import PreViewItems from "../../components/analysis/PreViewItems";

const Preview = () => {
    return (
        <>
            <div className='bg-analysis-head bg-no-repeat bg-[length:100%_100%] w-full md:h-[870px] absolute -z-10' />
            <Header />
            <Introduction />
            <PreViewItems />
            <Footer />
        </>
    )
}

export default Preview;