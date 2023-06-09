import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PinkBall from "../../assets/hero-image/ball-pink.png";
import BlueBall from "../../assets/hero-image/ball-one.png";
import BlurPurpleBall from "../../assets/hero-image/ball-purple-blur.png";
import BlurPinkBall from "../../assets/hero-image/ball-pink-blur.png";

const Footer = () => {
    return ( 
        <section className="bg-[#020710] pt-[60px] pr-0 pb-[60px] pl-0 lg:pt-[120px] lg:pb-[120px]">
            <div className="background-overlay w-full h-full absolute top-0 left-0"></div>
            <div className="max-w-[767px] lg:max-w-[1140px] mr-auto ml-auto">
                <div className="w-full">
                    <div className="w-full relative">
                        <div className="w-full relative">
                            <div className="w-full p-[10px] relative">
                                <section className="p-0 mt-0 mb-0 w-full relative">
                                    <div className="max-w-[562px] mr-auto ml-auto relative">
                                        <div className="w-full">
                                            <div className="fade-in w-ful">
                                                <div className="p-[10px]">
                                                    <div className="mb-0">
                                                        <div className="m-0 mb-[20px]">
                                                            <div className="text-center text-[#2cbca5] uppercase text-sm lg:text-base font-semibold leading-[1.4em] tracking-[1px]">
                                                                Purchase Theme
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="m-0 mb-[20px]">
                                                            <h2 className="text-white text-center font-raleway text-[28px] lg:text-[43px] font-semibold leading-[1.3em]">
                                                                Do you like this theme?<br/>Buy Toka now!
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="m-0 mt-[20px] p-0">
                                                            <div className="flex justify-center pt-5">
                                                                <a className="inline-block pt-3 pr-5 pb-3 pl-5 lg:pt-[17px] lg:pr-[30px] lg:pb-[17px] lg:pl-[30px] font-raleway font-bold text-[20px] text-white bg-[#2cbca5] rounded-full" href="">
                                                                    <span className="flex justify-center items-center">
                                                                        <span className="mr-2">
                                                                            <FontAwesomeIcon icon={faCartShopping} size="3px" />
                                                                        </span>
                                                                        <span className="inline-block">Buy Now</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="absolute left-[36px] lg:left-[5px] bottom-[-19px] lg:bottom-[175px]">
                                    <img className="float w-[45px] lg:w-[55px]" src={BlueBall} alt="" />
                                </div>
                                <div className="absolute left-[17px] lg:left-[226px] top-[102px] lg:top-[-47px]">
                                    <img className="float w-[40px] lg:w-[35px]" src={BlurPinkBall} alt="" />
                                </div>
                                <div className="absolute left-[35px] lg:left-[138px] top-[-34px] lg:top-[133px]">
                                    <img className="float w-[45px] lg:w-[50px]" src={PinkBall} alt="" />
                                </div>
                                <div className="absolute right-[40px] lg:right-[178px] top-[-46px] lg:top-[-36px]">
                                    <img className="float w-[35px] lg:w-[50px]" src={BlueBall} alt="" />
                                </div>
                                <div className="absolute right-[32px] lg:right-[0px] bottom-[55px] lg:bottom-[186px]">
                                    <img className="float w-[35px] lg:w-[45px]" src={PinkBall} alt="" />
                                </div>
                                <div className="absolute right-[55px] lg:right-[34px] bottom-[-44px] lg:bottom-[0px]">
                                    <img className="float w-[45px] lg:w-[50px]" src={BlurPurpleBall} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;