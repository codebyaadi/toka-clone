const Divider = ({display}) => {
    return ( 
        <section className={`${display} lg:block bg-[#020710] pt-0 pb-0 lg:pt-10 pr-0 lg:pb-10 pl-0`}>
            <div className="max-w-[1200px] mr-auto ml-auto">
                <div className="w-full">
                    <div className="p-[10px] w-full">
                        <div className="pt-[15px] pb-[15px] flex">
                            <span className="w-full m-0 border-solid border-t-[1px] border-[#23262F]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Divider;