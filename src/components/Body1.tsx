import arrow from '/images/arrow.png'

const Body1 = () => {
    return (
        <div className="my-8 md:my-14">
            <div className='flex items-center justify-around mx-16'>
                <div className="flex flex-col items-center justify-center gap-4 ">
                    <div className=" flex items-center justify-center gap-4">
                        <span className="text-3xl xl:text-5xl font-semibold text-[#14336d]">STEP</span>
                        <span className="text-3xl xl:text-5xl px-7 py-4 rounded-[50%] bg-[#f0412b] text-white">1</span>
                    </div>
                    <div className=' text-xl text-center font-semibold'>
                        Richiedi online un preventivo <br />
                        di finanziamento
                    </div>
                </div>
                <div className='mb-16'>
                    <img className='w-16 xl:w-20' src={arrow} alt="" />
                </div> 
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className=" flex items-center justify-center gap-4">
                        <span className="text-3xl xl:text-5xl  font-semibold text-[#14336d]">STEP</span>
                        <span className="text-3xl xl:text-5xl px-7 py-4 rounded-[50%] bg-[#f0412b] text-white">2</span>
                    </div>
                        <div className='text-xl text-center font-semibold'>
                            Ottieni in pochi minuti il <br />
                            tuo preventivo gratuito.
                        </div>
                </div>
                <div className='mb-16 '>
                    <img className='w-16 xl:w-20' src={arrow} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className=" flex items-center justify-center gap-4">
                        <span className="text-3xl xl:text-5xl  font-semibold text-[#14336d]">STEP</span>
                        <span className="text-3xl xl:text-5xl px-7 py-4 rounded-[50%] bg-[#f0412b] text-white">3</span>
                    </div>
                    <div className='text-xl text-center font-semibold'>
                    Ricevi il prestisto <br />
                    direttamente sul tuo conto.
                </div>

                </div>
            </div>
        </div>
    )
}

export default Body1
