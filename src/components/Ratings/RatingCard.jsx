import RatingData from '../../constant/RatingData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingCard = () => {
    return ( 
        <div className="w-full flex flex-col lg:grid grid-cols-2">
            {RatingData.map((rating) => (
                <div className='w-full lg:w-auto flex' key={rating.id}>
                    <div className='w-full bg-[#232A2C] bg-opacity-50 m-[15px] rounded-[12px]'>
                        <div className='p-[25px] lg:p-[30px]'>
                            <div className='mb-0 w-full'>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faStar} color='#f0ad4e' size='2px' className='mr-[5px]' />
                                    <FontAwesomeIcon icon={faStar} color='#f0ad4e' size='2px' className='mr-[5px]' />
                                    <FontAwesomeIcon icon={faStar} color='#f0ad4e' size='2px' className='mr-[5px]' />
                                    <FontAwesomeIcon icon={faStar} color='#f0ad4e' size='2px' className='mr-[5px]' />
                                    <FontAwesomeIcon icon={faStar} color='#f0ad4e' size='2px' className='mr-[5px]' />
                                </div>
                            </div>
                            <div className='mb-0 w-full'>
                                <div className='pt-[15px] pr-0 pb-[15px] pl-0'>
                                    <ul className='p-0 m-0'>
                                        <li className='w-full m-0 p-0'>
                                            <a className='w-full font-dmsans text-[18px] font-medium text-[#2CBCA5]' href="">
                                                {rating.theme}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mb-0 w-full'>
                                <div className='m-0'>
                                    <div className='text-left text-white font-dmsans text-base lg:text-[19px] font-light leading-[1.7em] tracking-normal'>
                                        {rating.text}
                                    </div>
                                </div>
                            </div>
                            <section className='p-0 pt-[20px] w-full'>
                                <div className="p-0 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
                                    <div className='text-[#7E8287] text-lg font-semibold mb-[10px] lg:m-0'>
                                        for {rating.for}
                                    </div>
                                    <div className='text-[#7E8287] text-lg font-semibold'>
                                        by {rating.author}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            ))}                     
        </div>
     );
}
 
export default RatingCard;