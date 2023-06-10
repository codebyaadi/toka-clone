// import Fire from '../../assets/futuristic-layouts/fire.png'
import Fire from '../../assets/grad-3d-icons/fire-front-gradient.png'
import LayoutData from '../../constant/LayoutData'
import BlogLayoutData from '../../constant/BlogLayoutData'

const Layouts = () => {
    return ( 
        <section className="bg-[#020710] mt-0 mb-0 pt-0 pr-0 pb-[60px] pl-0 z-10">
            <div className="flex mr-auto ml-auto">
                <div className="w-full flex">
                    <div className="flex flex-col w-full p-[10px]">
                        <section className="w-full mt-0 mb-10">
                            <div className="max-w-[664px] flex mr-auto ml-auto">
                                <div className="w-full flex items-center">
                                    <div className="fade-in w-full">
                                        <div className="flex flex-col w-full pt-20 lg:p-[10px]">
                                            <div className="mb-[20px] w-full">
                                                <div className="flex justify-center">
                                                    <img className='w-[54px]' src={Fire} alt="" />
                                                </div>                                               
                                            </div>
                                            <div className="mb-[20px] w-full text-center text-[#2CBCA5] text-sm lg:text-base font-semibold uppercase leading-6 tracking-[1px]">
                                                <div className="flex justify-center">
                                                    futuristic layouts
                                                </div>                                               
                                            </div>
                                            <div className="mb-[20px] w-full">
                                                <div className="flex justify-center text-center">
                                                    <h2 className='text-white font-raleway text-[28px] lg:text-[43px] font-semibold leading-[1.3em] p-0 m-0'>
                                                    Collection of exclusively designed layouts
                                                    </h2>
                                                </div>                                               
                                            </div>
                                            <div className='w-full text-center text-[#A4A4A4] text-[16px] lg:text-[20px] font-dmsans font-normal leading-[1.7em]'>
                                                <div className='mb-[10px] m-0'>
                                                Collections of creative and trendy homepage layouts to get started. Mix and match pre-made sections and create even more variations! 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='w-full mt-[10px] lg:mt-0 mb-0 pt-0 pr-0 lg:pr-[30px] pb-0 pl-0 lg:pl-[30px]'>
                            <div className='max-w-[562px] lg:max-w-[1200px] mr-auto ml-auto flex'>
                                <div className="flex flex-col lg:grid grid-cols-2 w-full">
                                    {LayoutData.map((blog) => (
                                        <div key={blog.id} className='w-full flex'>
                                            <div className="flex m-[10px] lg:m-[15px] w-full">
                                                <div className='flex w-full p-0 flex-wrap'>
                                                    <div className='pt-[20px] pr-[20px] pb-[10px] pl-[20px] bg-[#23262F] transition-all duration-300 hover:bg-[#1D1F28] rounded-[20px]'>
                                                        <figure className='inline-block w-full mb-0'>
                                                            <a href="">
                                                                <img className='rounded-[20px] max-w-full' src={blog.image} alt="" />
                                                            </a>
                                                        </figure>
                                                        <div className='w-full text-center'>
                                                            <h2 className='text-white font-dmsans text-[20px] font-bold leading-[49px] tracking-[-0.022em] mb-[0.5em]'>
                                                                {blog.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className='w-full mt-[10px] lg:mt-0 mb-0 pt-0 pr-0 lg:pr-[30px] pb-0 pl-0 lg:pl-[30px]'>
                            <div className='max-w-[562px] lg:max-w-[1200px] mr-auto ml-auto flex'>
                                <div className="flex flex-col lg:grid grid-cols-3 w-full">
                                    {BlogLayoutData.map((blog) => (
                                        <div key={blog.id} className='w-full flex'>
                                            <div className="flex m-[10px] lg:m-[15px] w-full">
                                                <div className='flex w-full p-0 flex-wrap'>
                                                    <div className='pt-[20px] pr-[20px] pb-[10px] pl-[20px] bg-[#23262F] rounded-[20px]'>
                                                        <figure className='inline-block w-full mb-0'>
                                                            <a href="">
                                                                <img className='rounded-[20px] max-w-full' src={blog.image} alt="" />
                                                            </a>
                                                        </figure>
                                                        <div className='w-full text-center'>
                                                            <h2 className='text-white font-dmsans text-[20px] font-bold leading-[49px] tracking-[-0.022em] mb-[0.5em]'>
                                                                {blog.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Layouts;