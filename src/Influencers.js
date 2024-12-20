import React from "react";
// import Header from "./Header";
import HeaderLady from "../src/assets/header_lady.svg";
import Hashtag from "../src/assets/hashtag.svg";
import Heart from "../src/assets/heart.svg";
import Button from "../src/assets/button_arrow.svg";
import worklady from "../src/assets/work_lady.svg";
import facebook from "../src/assets/facebook.svg";
import summary from "../src/assets/summary_tracking.svg";
// import worklady from "../src/assets/work_lady.svg";

const Influencers = () => {
    return (
        <>


            {/* 1st */}
            <div className="flex flex-row md:flex-row items-center justify-between bg-black from-black via-blue-900 to-blue-800 p-10  text-white">

                <div className="flex-1 m-36">
                    <h2 className="text-xl md:text-3xl font-light">The Premier Collaboration Hub with the Largest</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mt-2"></h1>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-2">INFLUENCER HUB</h1>
                    <p className="text-gray-300 mt-5 max-w-md">
                        Connect with top brands, businesses, and unlock endless partnerships—all in one powerful marketplace.
                    </p>

                    <div className="mt-8  block  gap-4">
                        <button className="flex items-end  m-2 gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full" >
                            Influencer Login
                            <img
                                src={Button}
                                alt="button_arrow"
                                className="w-6 h-6"
                            />
                        </button>
                        <button className=" flex gap-2 border-2 border-blue-600  px-6 py-3 rounded-full text-white">
                            Looking for an Influencer
                            <img
                                src={Button}
                                alt="button_arrow"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex-1 mr-36 relative mt-10 md:mt-0">
                    <div className="  w-max h-max relative">
                        <img
                            src={HeaderLady}
                            alt="Influencer"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={Hashtag}
                            alt="Hashtag"
                            className="absolute top-0.5"
                        />
                        <img
                            src={Heart}
                            alt="Hashtag"
                            className="absolute bottom-14"
                        />
                        <img
                            src={Heart}
                            alt="Hashtag"
                            className="absolute -right-10 top-80"
                        />
                    </div>
                </div>
            </div>



            {/* 2nd */}
            <div className=" bg-black py-10 px-5 text-white">

                <div className="  block  justify-items-center text-center mb-10 ">
                    <h2 className="text-3xl font-bold bottom">How It Works</h2>
                    <hr className="   my-4 w-1/6 border-blue-800 border-2" />
                    <p className="text-gray-300 mt-2">
                        Effortlessly Launch Your Campaign in 3 Simple Steps
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">

                    <div className="ring-2 ring-blue-800 ring-inset rounded-lg p-6 text-center shadow-md">
                        <div className="text-pink-500 text-4xl mb-4 justify-items-center">
                            <img
                                src={Heart}
                                alt="Hashtag"
                                className="w-16 h-16 "
                            />
                        </div>
                        <h3 className=" text-xl font-semibold mb-3">Create</h3>
                        <p className="text-gray-300">
                            Start planning your promotional campaign for your product or service
                            effortlessly. Our dedicated campaign managers will guide you
                            through the process, ensuring the best possible outcome.
                        </p>
                    </div>


                    <div className="ring-2 ring-blue-800 ring-inset rounded-lg p-6 text-center shadow-md hover:shadow-lg">
                        <div className="text-pink-500 text-4xl mb-4 justify-items-center">
                            <img
                                src={Heart}
                                alt="Hashtag"
                                className="w-16 h-16 "
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Launch</h3>
                        <p className="text-gray-300">
                            Experience the seamless automation of connecting with social media
                            creators who will promote your product or service through captivating
                            content and authentic reviews. Sit back and witness the magic unfold.
                        </p>
                    </div>


                    <div className="ring-2 ring-blue-800 ring-inset rounded-lg p-6 text-center shadow-md hover:shadow-2xl">
                        <div className="text-pink-500 text-4xl mb-4 justify-items-center">
                            <img
                                src={Heart}
                                alt="Hashtag"
                                className="w-16 h-16 "
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Track</h3>
                        <p className="text-gray-300">
                            Receive the produced content, valuable feedback, and the overall
                            reach achieved from your campaign. With one successful campaign
                            under your belt, it’s time to embark on the next exciting opportunity!
                        </p>
                    </div>
                </div>
            </div>


            {/* 3rd */}


            <div className="flex flex-row md:flex-row items-center  bg-black from-black via-blue-900 to-blue-800 p-10  text-white">
                <div className="flex-1 m-36 leading-10 ">
                    <h2 className="text-xl md:text-4xl font-light ">Find Ideal Creators</h2>
                    <hr className="   my-4 w-1/2 border-blue-500 border-2" />
                    <ul className="list-disc ">
                        <li className="text-gray-300 m-2 justify-center">
                            use our influencer search and discovery tools and filter 300 million creators
                            based on audience characteristics, engagements, keywords, intrests and 50 different filters.

                        </li>
                        <li className="text-gray-300 m-2">
                            Using our advancedinfluencer discovery tools on top social
                            media platforms such: TikTok, Youtube, Twitter, and Twitch.
                        </li>
                        <li className="text-gray-300 m-2">
                            Curate breanded creator list for streamlined influencer
                            management, from influencers to Amazon Live and UGC Creators
                        </li>
                        <li className="text-gray-300 m-2">
                            Predict campaign KPIs for better planning and assesment
                        </li>
                    </ul>
                    <button className="flex items-end  m-2 gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full" >
                        Start Finding Inflencer's Today
                        <img
                            src={Button}
                            alt="button_arrow"
                            className="w-6 h-6"
                        />
                    </button>
                </div>

                <div className="flex-1 mr-36 relative mt-10 md:mt-0">
                    <div className="  w-max h-max relative">
                        <img
                            src={worklady}
                            alt="Influencer"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={facebook}
                            alt="Hashtag"
                            className="absolute top-0.5"
                        />
                        <img
                            src={facebook}
                            alt="Hashtag"
                            className="absolute bottom-14"
                        />
                        <img
                            src={facebook}
                            alt="Hashtag"
                            className="absolute -right-10 top-80"
                        />
                        <img
                            src={summary}
                            alt="Hashtag"
                            className="absolute -left-10 top-80"
                        />
                    </div>
                </div>
            </div>
            {/* {4th} */}
            <div className="flex flex-row md:flex-row items-center justify-between bg-black from-black via-blue-900 to-blue-800 p-10  text-white">



                <div className="flex-1 m-36 relative mt-10 md:mt-0">
                    <div className="  w-max h-max relative">
                        <img
                            src={HeaderLady}
                            alt="Influencer"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={Hashtag}
                            alt="Hashtag"
                            className="absolute top-0.5"
                        />
                        <img
                            src={Heart}
                            alt="Hashtag"
                            className="absolute bottom-14"
                        />
                        <img
                            src={Heart}
                            alt="Hashtag"
                            className="absolute -right-10 top-80"
                        />
                    </div>
                </div>
                <div className="flex-1 mr-36">
                    <h6 className="text-pink-400 font-bold">Make Money</h6>
                    <h2 className="text-xl md:text-xl font-bold">
                        Turn your passion into a bussiness with our multiple ways to monetize your influence.
                    </h2>
                    <hr />
                    <p className="text-gray-300 mt-5 max-w-md">
                        Creator communities allow creators to join and build communities with other creators,
                        their fans and bussinesses they're working with.
                        We arethe only community product thatis deisgned for creatorsfrom the ground up.
                    </p>

                    <div className="mt-8  block  gap-4">
                        <button className="flex items-end  m-2 gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full" >
                            Get Started Today
                            <img
                                src={Button}
                                alt="button_arrow"
                                className="w-6 h-6"
                            />
                        </button>

                    </div>
                </div>
            </div>
            {/* 5th */}
            <div className="flex flex-row md:flex-row items-center justify-between bg-black from-black via-blue-900 to-blue-800 p-10  text-white">
                <div className=" flex-1 ml-36">
                    <h1 className="text-3xl font-bold justify-evenly md:text-3xl ">Make your brand go viral with Influencer marketing</h1>
                    <hr className="   my-4 w-1/2 border-blue-500 border-2" />
                    <p>Lorem ipsum dolor sit amit, consectur adipiscing elit.Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvanirdapibsu leo.
                    </p>
                    <button className="flex items-end  m-2 gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full" >
                       Strat FInding Influencers Today
                        <img
                            src={Button}
                            alt="button_arrow"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
                <div className=" flex-1 mr-36">
                    <img
                        src="./assets/summary_tracking.svg"
                        alt="summary_tarcking"
                    />
                </div>
            </div>


            <div>
                <div>
                    <h2 className="text-center">See Our Latest & popular News</h2>
                    <hr />
                </div>

                <div class="flex">
                    <div className="max-w-sm rounded-lg shadow-lg bg-gradient-to-b from-blue-900 to-blue-800 p-5 text-white">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="./assets/card_img1.svg"
                                alt="Card"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">September Sale. Contact us for Discounts!</h3>
                            <p className="text-sm text-gray-300 mt-1">April 18, 2022</p>
                            <p className="mt-2 text-gray-400">
                                Who are the top crypto influencers? Lorem ipsum dolor sit amet...
                            </p>
                            <button className="mt-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-white font-medium">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm rounded-lg shadow-lg bg-gradient-to-b from-blue-900 to-blue-800 p-5 text-white">

                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="./assets/card_img1.svg"
                                alt="Card"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">September Sale. Contact us for Discounts!</h3>
                            <p className="text-sm text-gray-300 mt-1">April 18, 2022</p>
                            <p className="mt-2 text-gray-400">
                                Who are the top crypto influencers? Lorem ipsum dolor sit amet...
                            </p>

                            <button className="mt-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-white font-medium">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm rounded-lg shadow-lg bg-gradient-to-b from-blue-900 to-blue-800 p-5 text-white">

                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="./assets/card_img1.svg"
                                alt="Card"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">September Sale. Contact us for Discounts!</h3>
                            <p className="text-sm text-gray-300 mt-1">April 18, 2022</p>
                            <p className="mt-2 text-gray-400">
                                Who are the top crypto influencers? Lorem ipsum dolor sit amet...
                            </p>

                            <button className="mt-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-white font-medium">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm rounded-lg shadow-lg bg-gradient-to-b from-blue-900 to-blue-800 p-5 text-white">

                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="./assets/card_img1.svg"
                                alt="Card"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">September Sale. Contact us for Discounts!</h3>
                            <p className="text-sm text-gray-300 mt-1">April 18, 2022</p>
                            <p className="mt-2 text-gray-400">
                                Who are the top crypto influencers? Lorem ipsum dolor sit amet...
                            </p>
                            <button className="mt-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-white font-medium">
                                Read More
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Influencers;

/* <div class="p-8" >
                <Header />
                <div class="padding" >
                    <div class="grid grid-cols-2">
                        <div>
                            <h6 className="mx-20">
                                The Premium Coolabration Hib with the Largest
                            </h6>
                            <h1 class="text-">Influcer Hub</h1>
                            <p>
                                Connect with top brand,bussiness and unlock endless partnership-
                                all in one powerful marketplace
                            </p>
                            <button class="rounded-full bg-pink-400 text-white px-6 py-2 flex items-center justify-center shadow-md hover:bg-purple-600 transition duration-200">
                                <span>Influencer Login</span>
                                <svg class="h-5 w-5 ml-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    "./assets/button_arrow.svg"
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button class="rounded-full border-2 border-blue-500 text-blue-500 px-6 py-2 flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition duration-200">
                                <span>looking for Influencers</span>
                                <svg class="h-5 w-5 ml-2 fill-current text-blue-500 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    "./assets/buttonarrow.svg"
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <img src="/assets/header_lady.svg" alt="header_lady" />
                            <img
                                src="/assets/hastag.svg"
                                alt="hastag"
                                className="margin(-40%)"
                            />
                            <img src="/assets/hastag.svg" alt="hastag" />
                            <img src="/assets/heart.svg" alt="heart" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-center">How It Works</h3>
                    <hr className="w-15"></hr>
                    <p className="text-center">
                        Effortlessly launch your Campaign in 3 Simple Steps
                    </p>
                    <div class=" flex  mx-8 gap-x-8 border">
                        <div class="  border border-blue-800 rounded-lg">
                            <div class=" flex justify-center bg-pink-500 rounded-full">
                                <img src="./assets/heart.svg" alt="heart" />
                            </div>
                            <h6 class="text-center">Create</h6>
                            <p>Start palnning your professional campaign for your product or service effortlessly.Oru dedicated campaign managerswill guide through the processensuring the best outcome</p>
                        </div>
                        <div class="  border border-blue-800 rounded-lg">
                            <div class=" flex justify-center bg-pink-500 rounded-full">
                                <img src="./assets/heart.svg" alt="heart" />
                            </div>
                            <h6 class="text-center">Launch</h6>
                            <p>Experience the seamlessautomation of connecting with social media creators who will promote your product or service through captivating content and authentic reviews. Sit back and witness the magic unfold</p>
                        </div>
                        <div class="  border border-blue-800 rounded-lg ">
                            <div class="  flex justify-center bg-pink-500  rounded-full">
                                <img src="./assets/heart.svg" alt="heart" />
                            </div>
                            <h6 class="text-center">Track</h6>
                            <p>receive the produced content valuable feedback, and the overall reach acheived from your campaign. With onesuccessful campaign under yor belt, it's time to embark on the next exciting oppurtunity! </p>
                        </div>
                    </div>
                </div> */

/* <div >
                <div>
                    <h3>Find ideal creators</h3>
                    <ul>
                        <li>use our influencer search and discovery tools and filter 300 million creators based on audience characteristics, engagements, keywords, intrests and 50 different filters.</li>
                        <li>Using our advancedinfluencer discovery tools on top social media platforms such: TikTok, Youtube, Twitter, and Twitch.</li>
                        <li>Curate breanded creator list for streamlined influencer management, from influencers to Amazon Live and UGC Creators</li>
                        <li>Predict campaign KPIs for better planning and assesment</li>
                    </ul>
                    <button class="rounded-full bg-pink-400 text-white px-6 py-2 flex items-center justify-center shadow-md hover:bg-purple-600 transition duration-200">
                        <span>Start Finding Influencers Today</span>
                        <svg class="h-5 w-5 ml-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            "./assets/button_arrow.svg"
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div>
                    <img src="/assets/workinglady.svg" alt="workinglady" />
                </div>
            </div>
            <div class="grid grid-row-2 w-1/2">
                <div>
                    <img src="./assests/lady.svg" alt="lady with coat" />
                </div>
                <div class=" ">
                    <h6>
                        Make Money
                    </h6>
                    <h4>Turn your passion into a bussiness with our multiple ways to monetize your influence.</h4>
                    <hr />
                    <p>Creator communicate allow creators to join and build communicates with our creators, their fans, and the bussinesses they're working with. we are only community product that is designed for creators from the ground up</p>
                    <button class="rounded-full bg-pink-400 text-white px-6 py-2 flex items-center justify-center shadow-md hover:bg-purple-600 transition duration-200">
                        <span>Get started today</span>
                        <svg class="h-5 w-5 ml-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            "./assets/button_arrow.svg"
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div> */