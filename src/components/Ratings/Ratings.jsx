import RatingCard from "./RatingCard";

const Ratings = () => {
    return (
        <section className="rating-bg mt-0 mb-0 pt-10 pr-0 pb-10 pl-0 lg:pt-20 lg:pr-10 lg:pb-20 lg:pl-10">
            <div className="flex mr-auto ml-auto">
                <div className="w-full flex">
                    <div className="p-[10px] w-full">
                        <section className="fade-in w-full mt-0 lg:mb-[20px] mb-0 p-0">
                            <div className="max-w-[562px] lg:max-w-[1115px] mr-auto ml-auto">
                                <div className="w-full flex flex-col items-center lg:flex-row">
                                    <div className="w-full lg:w-[48%]">
                                        <div className="m-0 lg:mr-10">
                                            <div className="flex flex-col justify-center items-center lg:justify-start p-[10px]">
                                                <div className="mb-0 text-center lg:text-left text-[#2CBCA5] font-semibold text-sm lg:text-base tracking-[1px] uppercase w-full">
                                                    <div className="m-0">
                                                        5/5 Author Rating
                                                    </div>
                                                </div>
                                                <div className="mb-0 text-center lg:text-left w-full">
                                                    <div className="p-0 pt-[20px]">
                                                        <h2 className="text-white font-raleway text-[28px] lg:text-[43px] font-semibold leading-[1.3em] p-0 m-0">
                                                            We are trusted all over the world
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[52%]">
                                        <div className="w-full">
                                            <div className="p-[10px] flex items-center justify-center lg:justify-start">
                                                <div className="w-full text-center lg:text-left text-[#a4a4a4] text-base lg:text-[20px] font-dmsans font-normal leading-[1.7em]">
                                                    Professionals from all over the world have already appreciated our work, and we are happy to serve everyone.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="w-full">
                            <div className="lg:max-w-[1140px] mr-auto ml-auto">
                                <RatingCard />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ratings;