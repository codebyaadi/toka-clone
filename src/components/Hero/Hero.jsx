import Logo from "../../assets/hero-image/logo.png";
import PinkBall from "../../assets/hero-image/ball-pink.png";
import BlueBall from "../../assets/hero-image/ball-one.png";
import BlurPurpleBall from "../../assets/hero-image/ball-purple-blur.png";
import BlurPinkBall from "../../assets/hero-image/ball-pink-blur.png";
import SparkleLight from "../../assets/hero-image/vector-sparkle-light.png";
import TextToka from '../../assets/hero-image/text-toka.png'

const Hero = () => {
    return (
        <section className="hero-background z-[1] relative pt-[80px] pb-[260px] lg:pt-[180px] lg:pb-[540px] pl-0 pr-0">
            <div className="background-overlay w-full h-full absolute top-0 left-0"></div>
            <div className="max-w-[767px] lg:max-w-[1140px] flex relative mr-auto ml-auto">
                <div className="w-full flex">
                    <div className="w-full flex relative min-h-[1px]">
                        <div className="flex relative w-full">
                            <div className="flex items-start flex-wrap relative w-full p-[10px]">
                                <div className="mb-0 w-full flex justify-center text-center">
                                    <img
                                        className="w-[70px] max-w-[70px] lg:w-[90px] lg:max-w-[90px]"
                                        src={Logo}
                                        alt="Toka Logo"
                                    />
                                </div>
                                <div className="absolute left-[35px] bottom-[-76px] lg:left-[138px] lg:bottom-[2px]">
                                    <img className="float w-[50px]" src={PinkBall} alt="" />
                                </div>
                                <div className="absolute left-[133px] bottom-[-218px] lg:left-[5px] lg:bottom-[284px]">
                                    <img className="float w-[25px] lg:w-[55px]" src={BlueBall} alt="" />
                                </div>
                                <div className="absolute right-[60px] bottom-[-69%] lg:right-0 lg:bottom-[328px]">
                                    <img className="float w-[40px] lg:w-[45px]" src={PinkBall} alt="" />
                                </div>
                                <div className="absolute right-[66px] top-[100%] lg:right-[35px] lg:top-[249px]">
                                    <img className="float w-[50px] lg:w-[45px]" src={BlurPurpleBall} alt="" />
                                </div>
                                <div className="absolute left-[40px] top-[-40px] lg:left-[226px] lg:top-[-47px]">
                                    <img className="float w-[30px] lg:w-[35px]" src={BlurPinkBall} alt="" />
                                </div>
                                <div className="absolute right-[30px] top-[-19px] lg:right-[178px] lg:top-[-80px]">
                                    <img className="float w-[35px] lg:w-[45px]" src={BlueBall} alt="" />
                                </div>
                                <section className="w-full mt-0 mb-0 p-0 relative">
                                    <div className="max-w-[562px] flex mr-auto ml-auto relative">
                                        <div className="flex w-full">
                                            <div className="w-full relative flex">
                                                <div className="w-full flex relative p-[10px] flex-wrap items-start">
                                                    <div className="rotate absolute left-[7%] top-[-27px] lg:left-[466px] lg:top-[-49px]">
                                                        <img
                                                            className="inline-block w-[45px]"
                                                            src={SparkleLight}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="rotate absolute left-[82%] top-[5px] lg:left-[25px] lg:top-[6px]">
                                                        <img
                                                            className="inline-block w-[45px]"
                                                            src={SparkleLight}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="mb-0 w-full ">
                                                        <div className="mt-0 mb-[20px] lg:mt-[10px] lg:mb-[40px] ml-0 mr-0 ">
                                                            <div className="text-center">
                                                                <img className="inline-block w-[120px] lg:w-[200px]" src={TextToka} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0 w-full text-center">
                                                        <div className="mt-0 mb-[10px] lg:mb-[30px] ml-0 mr-0 ">
                                                            <h2 className="text-white font-medium text-[20px] lg:text-[26px] p-0 m-0 font-raleway tracking-[0px] leading-[1]">
                                                                NFT & Crypto WordPress Theme
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="w-full relative text-center mb-0">
                                                        <div className="mt-[20px] m-0 p-0">
                                                            <div className="text-center">
                                                                <a className="font-raleway hover:bg-[#2CBCA5] text-[20px] font-bold bg-[#EC440000] border-[2px] border-[#818A9E] hover:border-[#2CBCA5] rounded-full pt-[12px] pb-[12px] pl-[20px] pr-[20px] lg:pt-[17px] lg:pb-[17px] lg:pr-[30px] lg:pl-[30px] leading-[22px]" href="#">
                                                                    <span className="text-white">Live Preview</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
