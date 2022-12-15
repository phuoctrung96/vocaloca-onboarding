import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Introduction from '@/components/analysis/Introduction';
import PreViewItems from '@/components/analysis/PreViewItems';

const Preview = () => {
  return (
    <>
      <div className="bg-analysis-head bg-no-repeat bg-[length:100%_100%] w-full md:h-[870px] h-[788px] absolute -z-10" />
      <Header />
      <Introduction />
      <PreViewItems />
      <Footer />
    </>
  );
};

export default Preview;
