import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PBIcon from '../../assets/page-builder/page-builder.png';
import PGImgRight from '../../assets/page-builder/image.png'

const PageBuilder = () => {
    const List = [
        {
            id: 1,
            text: 'No Coding Required'
        },
        {
            id: 2,
            text: 'Drag&Drop Builder'
        },
        {
            id: 3,
            text: 'Copy&Pasting Styles'
        },
        {
            id: 4,
            text: 'Huge Community'
        },
    ]

    return ( 
        <section className="bg-[#020710] mt-0 mb-0 pt-0 pr-5 pb-[60px] pl-5 lg:pt-0 lg:pr-10 lg:pb-10 lg:pl-10">
            <div className="max-w-[562px] lg:max-w-[1200px] flex mr-auto ml-auto">
                <div className="flex w-full">
                    <div className="w-full flex">
                        <div className="w-full flex p-[10px]">
                            <section className="fade-in mt-0 mb-0 pt-0 pr-0 pb-0 lg:pb-10 pl-0 w-full">
                                <div className="max-w-[1140px] mr-auto ml-auto flex">
                                    <div className="flex flex-col-reverse items-start justify-start lg:flex-row w-full">
                                        <div className="w-full lg:w-[45%]">
                                            <div className="w-full flex">
                                                <div className="w-full flex flex-col items-center justify-center pt-3 lg:pt-0 pr-0 lg:pr-10 pb-0 pl-0 lg:pl-[10px]">
                                                    <div className="mb-0 text-left w-full">
                                                        <div className="m-0 text-left">
                                                            <img className="max-w-[62px] lg:max-w-[67px] inline-block" src={PBIcon} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-0 text-left w-full">
                                                        <div className="mt-[15px] mr-0 mb-[15px] ml-0">
                                                            <h2 className='m-0 p-0 font-raleway text-white text-[28px] lg:text-5xl font-semibold leading-[1.2em] tracking-[-0.5px]'>
                                                            Drag&drop Elementor builder
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0 text-left font-dmsans text-base lg:text-[20px] font-normal leading-[1.7em] text-[#A4A4A4] w-full">
                                                        <div className="mt-0 mr-0 mb-[20px] ml-0">
                                                            <div>
                                                            Easy to use with&nbsp;
                                                             <span className='text-white text-left font-dmsans text-base lg:text-[20px] font-normal'>
                                                            <strong>no experience</strong>
                                                            </span>
                                                            , no need to learn anything! Modify content, mix and match pre-made sections without coding. 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mb-0 w-full'>
                                                        <div className='m-0'>
                                                            <ul className='flex flex-col lg:grid grid-cols-2 mr-[-10px] ml-[-10px] p-0'>
                                                                {List.map((list) => (
                                                                    <li key={list.id} className='ml-[10px] mr-2 mb-[15px]'>
                                                                        <span><FontAwesomeIcon icon={faCheck} size='2px' color='#D63362' className="fa-fw fa-lg font-weight-bold" /></span>
                                                                        <span className='font-dmsans text-[18px] lg:text-lg font-bold text-white pl-[7px]'>{list.text}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full lg:w-[54%]'>
                                            <div className="pagebuilder-bg w-full flex">
                                                <div className='p-[10px] w-full'>
                                                    <div className="w-full">
                                                        <div className="p-0 lg:p-10">
                                                            <div>
                                                                <img className='max-w-full inline-block' src={PGImgRight} alt="" />
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
 
export default PageBuilder;