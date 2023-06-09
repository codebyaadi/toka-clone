import DocImg from '../../assets/support/doc.png';
import Customer from '../../assets/support/customer-support.png'

const Support = () => {
    return (
        <section className="bg-[#020710] mt-0 mb-0 p-0 pt-10 lg:pt-20">
            <div className="max-w-[1200px] mr-auto ml-auto">
                <div className="w-full">
                    <div className="w-full">
                        <div className="p-[10px]">
                            <section className="fade-in mt-0 mb-0 w-full">
                                <div className="max-w-[664px] mr-auto ml-auto">
                                    <div className="w-full">
                                        <div className="w-full flex flex-col justify-center p-[10px]">
                                            <div className="w-full mb-5">
                                                <div className="m-0">
                                                    <div className="w-full text-center text-[#2CBCA5] text-sm lg:text-base font-semibold uppercase leading-6 tracking-[1px]">
                                                        Documentation and support
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full mb-5">
                                                <div className="w-full">
                                                    <h2 className="text-white text-center font-raleway text-[28px] lg:text-[43px] font-semibold leading-[1.3em] p-0 m-0">
                                                        We are here to help.
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="m-0 mb-[10px]">
                                                    <div className="w-full text-center text-[#a4a4a4] font-dmsans text-base lg:text-[20px] font-normal leading-[1.7em]">
                                                        You can read the documentation before installing the theme. If you have any questions, please contact our support team.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="w-full p-0 lg:pb-[60px]">
                                <div className="max-w-[767px] lg:max-w-[1200px] mr-auto ml-auto">
                                    <div className="w-full">
                                        <div className="flex flex-col lg:flex-row justify-center w-full">
                                            <div className="fade-in w-full lg:w-1/2 border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#23262F]">
                                                <div className="w-full p-[30px]">
                                                    <div className="w-full">
                                                        <div className="w-full flex flex-col justify-center items-center">
                                                            <figure className="w-[22%] lg:w-[14%] mb-[12px]">
                                                                <a href="">
                                                                    <img className='max-w-full' src={Customer} alt="" />
                                                                </a>
                                                            </figure>
                                                            <div className='w-full text-center'>
                                                                <div className="text-white font-dmsans font-bold mb-[7px] text-[22px] lg:text-2xl tracking-[-0.9px]">
                                                                    Theme Documentation
                                                                </div>
                                                                <p className='text-[#a4a4a4] font-dmsans text-center font-normal text-base lg:text-lg'>
                                                                    Please read before installation.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fade-in w-full lg:w-1/2 border-b-[1px] lg:border-b-0 border-[#23262F]">
                                                <div className="w-full p-[30px]">
                                                    <div className="w-full">
                                                        <div className="w-full flex flex-col justify-center items-center">
                                                            <figure className="w-[22%] lg:w-[14%] mb-[12px]">
                                                                <a href="">
                                                                    <img className='max-w-full' src={DocImg} alt="" />
                                                                </a>
                                                            </figure>
                                                            <div className='w-full text-center'>
                                                                <div className="text-white font-dmsans font-bold mb-[7px] text-[22px] lg:text-2xl tracking-[-0.9px]">
                                                                Contact support
                                                                </div>
                                                                <p className='text-[#a4a4a4] font-dmsans text-center font-normal text-base lg:text-lg'>
                                                                8 a.m. - 5p.m. London (2 business days)
                                                                </p>
                                                            </div>
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
        </section>
    );
}

export default Support;