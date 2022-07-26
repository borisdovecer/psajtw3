import React  from "react";
import mandala from '../../images/index.png';
import {Footer, Navbar} from "./index";

const Home = () => {
    return (
        <div>
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="flex w-full mf:flex-row flex-col justify-between mt-10 md:p-20 py-12">
                <h1 className="text-3xl sm:text-5xl text-white py-1 sm:px-4 md:px-48">
                    Psajt
                </h1>
                <div className='flex md:px-4 xl:px-48'>
                    <div className="justify-between items-start w-4/6 mf:mr-10">
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            The Kingdom of Wakanda is organizing an election for officials who will represent <br/>
                            King T'Challa at future United Nation summits. <br/><br/>
                            Being very modern and forward-thinking,
                            King T'Challa has decided to <br/>
                            leverage the power of blockchain technology to make sure
                            these elections are unhindered, and more importantly, secure.
                        </p>
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            In order to make sure all 6 million residents have access to voting, multiple voting
                            centres have been opened across the country. <br/>
                            These centres are places where Wakandans can come and cast their ballot for officials of their choice.
                        </p>
                    </div>
                    <div className="justify-start items-start w-2/6 mf:mr-10">
                        <img src={mandala} alt="mandala" className="w-96" />
                    </div>
                </div>
                <div className="w-full sm:px-4 md:px-48">
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        In order to make sure all 6 million residents have access to voting, multiple voting
                        centres have been opened across the country. <br/>
                        These centres are places where Wakandans can come and cast their ballot for officials of their choice.
                    </p>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        In order to make sure all 6 million residents have access to voting, multiple voting
                        centres have been opened across the country. <br/>
                        These centres are places where Wakandans can come and cast their ballot for officials of their choice.
                    </p>
                </div>
            </div>
            <div className="gradient-bg-services">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
