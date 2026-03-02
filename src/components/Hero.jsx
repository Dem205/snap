import InfiniteCarousel from "./InfiniteCarousel"



function Hero() {
    return(
            <div className=" w-full h-[calc(100vh-80px)] lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-32 max-w-360 mx-auto">
                <img src="../src/assets/image-hero-mobile.png" alt="Hero image" className="lg:hidden"/>
                <img src="../src/assets/image-hero-desktop.png" alt="Hero image desktop" className="hidden lg:block lg:max-w-sm"/>
                <div className="font-epilogue p-4 lg:max-w-2xl lg:p-0 lg:flex lg:flex-col lg:items-start lg:justify-start lg:gap-6">
                    <h1 className="text-4xl font-bold text-center my-8 lg:font-bold lg:text-5xl lg:text-start">Make <br className="hidden lg:block"/> remote work</h1>
                    <p className="text-center lg:text-start text-gray-500 mb-8">Get your team in sync, no matter your location. <br className="hidden lg:block"/> Streamline processes, create team rituals, and <br className="hidden lg:block"/> watch productivity soar.</p>
                    <button className="bg-black text-white px-6 py-3 mb-12 rounded-lg mx-auto block font-bold lg:mx-0 hover:border-2 hover:border-black hover:bg-transparent hover:text-black">Learn more</button>
                    <InfiniteCarousel />
                </div>
            </div>
    )
}

export default Hero