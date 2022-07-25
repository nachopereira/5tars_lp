import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BenefitCard from "../components/BenefitCard";
import { Pagination, Navigation, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Arena from "../components/Arena";
import BecomePioneerFrom from "../components/BecomePioneerFrom";
import LeaderBoardItem from "../components/LeaderBoardItem";

export default function HowToPlay() {
  const benefits = [
    {
      id: 1,
      icon: "/ico-play-for-free.svg",
      width: 47,
      height: 66,
      heading: "1. Play for Free!",
      paragraph: "Get free STARCOINS to compete in the arenas",
    },
    {
      id: 2,
      icon: "/ico-free-nfts.svg",
      width: 52,
      height: 65,
      heading: "2. Get Free NFTs!",
      paragraph: "We will give you 3 NFT cards to play the game to its fullest",
    },
    {
      id: 3,
      icon: "/ico-cash-prizes.svg",
      width: 53,
      height: 66,
      heading: "3. Cash Prizes",
      paragraph:
        "Beat your opponents, reach the top, and get rewarded in BUSD!",
    },
    // {
    //   id: 4,
    //   icon: "/icon-have-fun.svg",
    //   heading: "4. Have Fun",
    //   paragraph: "Make even funnier to watch your team",
    // },
    // {
    //   id: 5,
    //   icon: "/icon-brag.svg",
    //   heading: "5. Brag",
    //   paragraph: "Challenge your friends to know who really is the best",
    // },
    // {
    //   id: 6,
    //   icon: "/icon-socialize.svg",
    //   heading: "6. Socialize",
    //   paragraph: "Be part of our amazing community",
    // },
  ];
  const howToPlaySteps = [
    {
      id: 1,
      heading: "1. Make a prediction",
      image: [{ id: 1, name: "/predictions.png", height: 199, width: 278 }],
    },
    {
      id: 2,
      heading: "2. Use the best NFTs for your game",
      image: [
        { id: 1, name: "/Legendary1.png", height: 106, width: 77 },
        { id: 2, name: "/common3.png", height: 111, width: 86 },
        { id: 3, name: "/Legendary2.png", height: 106, width: 77 },
        { id: 4, name: "/rare1.png", height: 114, width: 86 },
      ],
    },
    {
      id: 3,
      heading: "3. Watch the match",
      image: [
        { id: 1, name: "/arena_bronze.png", height: 135, width: 152 },
        { id: 2, name: "/arena_silver.png", height: 136, width: 117 },
        { id: 3, name: "/arena_gold.png", height: 135, width: 124 },
        { id: 4, name: "/arena_platinnum.png", height: 127, width: 168 },
      ],
    },
    {
      id: 4,
      heading: "4. Rate the players",
      image: [
        { id: 1, name: "/Marketplace-8.png", height: 152, width: 232 },
        { id: 2, name: "/Marketplace-9.png", height: 152, width: 232 },
      ],
    },
    {
      id: 5,
      heading: "5. Win cash prices",
      image: [
        { id: 1, name: "/Marketplace4.png", height: 145, width: 222 },
        { id: 2, name: "/Marketplace-5.png", height: 152, width: 222 },
      ],
    },
  ];
  const arenasJson = [
    {
      id: 1,
      users: 0,
      totalUsers: 1003,
      matchDay: 1,
      dateTime: "2022-09-03T15:30:00.000Z",
      arenaType: "logo-arena-platinnum.png",
      team1: "Everton F.C",
      team1Logo: "team-logo-everton.png",
      team2: "Liverpool F.C",
      team2Logo: "team-logo-manchese-u.png",
      joinLink: "#",
    },
    {
      id: 2,
      users: 0,
      totalUsers: 450,
      matchDay: 1,
      dateTime: "2022-09-04T00:00:00.000Z",
      arenaType: "logo-arena-gold.png",
      team1: "Real Betis",
      team1Logo: "team-logo-bethis.png",
      team2: "Reak Madrid",
      team2Logo: "team-logo-real-madrid-1.png",
      joinLink: "#",
    },
    {
      id: 3,
      users: 0,
      totalUsers: 1003,
      matchDay: 1,
      dateTime: "2022-09-10T20:30:00.000Z",
      arenaType: "logo-arena-platinnum.png",
      team1: "Man City",
      team1Logo: "team-logo-manchester-city.png",
      team2: "Tottenham",
      team2Logo: "team-logo-tottenham.png",
      joinLink: "#",
    },
    {
      id: 4,
      users: 0,
      totalUsers: 450,
      matchDay: 2,
      dateTime: "2022-09-11T00:00:00.000Z",
      arenaType: "logo-arena-gold.png",
      team1: "f.c. Barcelona",
      team1Logo: "team-logo-barcelona.png",
      team2: "Cádiz cf",
      team2Logo: "team-logo-cadiz.png",
      joinLink: "#",
    },
    {
      id: 5,
      users: 0,
      totalUsers: 1003,
      matchDay: 2,
      dateTime: "2022-09-18T19:30:00.000Z",
      arenaType: "logo-arena-platinnum.png",
      team1: "Chealsea F.c",
      team1Logo: "team-logo-chelsea.png",
      team2: "liverpool f.c.",
      team2Logo: "team-logo-manchese-u.png",
      joinLink: "#",
    },
    {
      id: 6,
      users: 0,
      totalUsers: 450,
      matchDay: 3,
      dateTime: "2022-09-18T00:00:00.000Z",
      arenaType: "logo-arena-gold.png",
      team1: "Atlético de Madrid",
      team1Logo: "team-logo-atletico-de-madrid.png",
      team2: "Real madrid",
      team2Logo: "team-logo-real-madrid-1.png",
      joinLink: "#",
    },
  ];
  const winners = [
    {
      id: 1,
      profileImage: { url: "/winner-01.png", width: 36, height: 36 },
      name: "Manu2321",
      starcoin: 20,
    },
    {
      id: 2,
      profileImage: { url: "/winner-02.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 15,
    },
    {
      id: 3,
      profileImage: { url: "/winner-03.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 11.25,
    },
    {
      id: 4,
      profileImage: { url: "/winner-04.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 8.4375,
    },
    {
      id: 5,
      profileImage: { url: "/winner-05.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 6.328125,
    },
    {
      id: 6,
      profileImage: { url: "/winner-06.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 4.74609375,
    },
    {
      id: 7,
      profileImage: { url: "/winner-01.png", width: 36, height: 36 },
      name: "Manu2321",
      starcoin: 3.559570313,
    },
    {
      id: 8,
      profileImage: { url: "/winner-02.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 2.669677734,
    },
    {
      id: 9,
      profileImage: { url: "/winner-03.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 2.002258301,
    },
    {
      id: 10,
      profileImage: { url: "/winner-04.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 1.501693726,
    },
    {
      id: 11,
      profileImage: { url: "/winner-05.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 1.126270294,
    },
    {
      id: 12,
      profileImage: { url: "/winner-06.png", width: 36, height: 36 },
      name: "Anonymous User",
      starcoin: 0.8447027206,
    },
  ];
  const [arenas, setArenas] = useState(arenasJson);
  const [labelDay, setlabelDay] = useState("");

  const handleFilterByDay = (event) => {
    const filteredArenas = arenasJson.filter((arena) => {
      return Number(arena.matchDay) == event.target.value;
    });
    setArenas(filteredArenas);
    setlabelDay(event.target.value);
  };
  const handleArenasSort = (event) => {
    if (event.target.value === "desc") {
      const myArray = arenasJson;
      myArray.sort(function compare(a, b) {
        var dateA = new Date(a.matchDay);
        var dateB = new Date(b.matchDay);
        return dateA - dateB;
      });
      console.log("yes desc");
      console.log(myArray);
      setArenas(myArray);
    }

    if (event.target.value === "asc") {
      const myArray = arenasJson;
      myArray.sort(function compare(a, b) {
        var dateA = new Date(a.matchDay);
        var dateB = new Date(b.matchDay);
        return dateB - dateA;
      });

      console.log("yes desc");
      console.log(myArray);
      setArenas(myArray);
    }
  };

  return (
    <div className="bg-brand overflow-hidden">
      <Head>
        <title>5tars - How to play</title>
        <meta name="description" content="How to play" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-4 lg:px-8 xl:px-3 absolute z-10 w-full py-4 md:py-7">
        <nav className="flex flex-row items-center justify-between max-w-5xl mx-auto">
          <div className="logo">
            <Image
              src={"/logo-5-TARS.svg"}
              alt="5-TARS"
              width={70}
              height={66}
            ></Image>
          </div>
          <Link href={"#start-now"} title="Start now">
            <a className="px-8 md:px-14 py-[5px] lg-py-2 red-200 text-xl text-white bg-gradient-to-r from-brand-light to-brand-dark rounded-lg font-medium hover:shadow-lg hover:shadow-brand-light2 transition ease-in-out scroll-smooth">
              Start Now!
            </a>
          </Link>
        </nav>
      </header>
      <section className="relative bg-gradient-to-b from-[#000A10] to-[#002B46] min-h-screen md:min-h-[500px] lg:min-h-[600px] xl:min-h-[800px] 2xl:min-h-[960px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010A10] via-[#022536] to-brand-light"></div>
        <p className="opacity-20 z-0 absolute inset-0">
          <Image
            src={"/soccer-ball-goal-1.png"}
            alt="A New watch to earn NFT Game"
            width={1920}
            height={1080}
          ></Image>
        </p>
        <div className="absolute text-white bg-bg-star-image bg-no-repeat bg-contain md:bg-cover bg-bottom lg:bg-top inset-0">
          <div className="z-10 text-center md:text-left max-w-5xl px-5 pt-[420px] md:pt-36 lg:pt-52 xl:pt-96 xl:pb-6 mx-auto">
            <h1 className="text-white uppercase text-4xl lg:text-5xl font-bold mb-16">
              Be one of the
              <span className="text-brand-light block">5tars pioneers!</span>
            </h1>
            <Link href={"#start-now"}>
              <a
                className="px-8 py-4 text-sm  md:text-lg text-brand-light bg-brand-dark border-solid border-1
              rounded-[10px] font-bold hover:bg-white hover:text-brand-dark hover:transition ease-in-out"
              >
                WANT TO BE A PIONEER
              </a>
            </Link>
            <div className="absolute max-w-full md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-none top-[10%] right-0 ">
              <Image
                src={"/hero-bg-content.png"}
                width={880}
                height={776}
                alt={"5tars pioneer"}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-5 lg:py-16 xl:py-28 max-w-xs lg:max-w-xl xl:max-w-2xl mx-auto">
        <h1
          className="mb-4 lg:mb-7 outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-4xl lg:text-6xl xl:text-7xl font-bold tracking-wide"
          before="Be the first to play 5tars game!"
        >
          Be the first to play 5tars game!
        </h1>
        <h2 className="text-white font-semibold text-xl lg:text-3xl xl:text-4xl mb-5 lg:mb-9 xl:mb-16">
          A new skill-based nft game
          <br /> for all <span className="text-brand-light">football fans</span>
        </h2>
        <p className="text-white card card-gradient-border-brand-to-trans-l border-transparent border-solid border-4 rounded-xl shadow-brandcolor font-extralight text-lg lg:text-3xl xl:text-4xl -mx-4 py-6 px-2">
          <span className="text-brand-light">
            We are looking for pioneers,&nbsp;
          </span>
          the first people <br />
          worldwide that will play our game!
        </p>
      </section>
      <section className="how-to-play-grid px-5 py-4 max-w-xs lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h2
          className="mb-5 lg:mb-7 xl:mb-12 lg:ml-5 xl:ml-7 outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-4xl lg:text-6xl xl:text-7xl font-bold tracking-wide"
          before="Benefits"
        >
          Benefits
        </h2>
        <div className="grid gap-5 lg:gap-7 grid-cols-1 lg:grid-cols-3 justify-center content-start">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} content={benefit} />
          ))}
        </div>
      </section>
      <section className="text-center py-16 pb-0 lg:py-20 lg:pb-10 xl:py-24 xl:pb-12 mx-auto max-w-sm lg:max-w-3xl xl:max-w-5xl">
        <h3 className="text-white uppercase font-semibold mb-8 lg:mb-10 xl:mb-10 lg:leading-tight xl:leading-tight text-3xl lg:text-4xl xl:text-5xl">
          it sounds too good to be true,&nbsp;
          <span className="text-brand-light lg:block">
            where is the catch?!
          </span>
        </h3>
        <p className="text-white font-semibold mx-auto mb-6 lg:mb-7 xl:mb-9 text-xl lg:text-3xl xl:text-4xl max-w-md lg:max-w-2xl xl:max-w-[900px]">
          There is no catch we will only require your&nbsp;
          <span className="text-brand-light block lg:inline">
            feedback, easily by form or live
          </span>
          &nbsp;on our discord server.
        </p>
      </section>
      <section className="mx-auto max-w-sm lg:max-w-4xl xl:max-w-6xl px-5 py-5 lg:pb-5 xl:pb-10">
        <h3 className="text-white text-center max-w-[140px] lg:max-w-[210px] xl:max-w-[340px] mx-auto text-sm lg:text-xl xl:text-3xl mb-8 lg:mb-10 xl:mb-12 relative pb-2 xl:pb-3 after:block after:absolute after:inset-0 after:top-auto after:w-full after:h-[3px] after:bg-gradient-to-r after:from-brand-light">
          Terms & Conditions
        </h3>
        <p className="bg-brand-dark rounded-2xl text-white text-left text-sm lg:text-xl xl:text-3xl py-6 px-8 mb-6">
          Every selected player that join the game will receive an amount of
          StarCoins to be able to play.
        </p>
        <p className="bg-brand-dark rounded-2xl text-white text-left text-sm lg:text-xl xl:text-3xl py-6 px-8 mb-6">
          Every selected player will receive a pack of NFTs to master the game.
        </p>
        <p className="bg-brand-dark rounded-2xl text-white text-left text-sm lg:text-xl xl:text-3xl py-6 px-8 mb-6">
          Every selected player will provide feedback to 5tars in order to make
          the best possible game.
        </p>
      </section>
      <section className="how-to-play-steps mx-auto py-4 lg:pb-20 xl:pb-28 px-5 max-w-sm lg:max-w-4xl xl:max-w-6xl">
        <div className="bg-brand-dark rounded-2xl pt-[22px] lg:pt-14 xl:pt-20">
          <h2
            className="mb-10 lg:mb-12 xl:mb-44 ml-10 lg:ml-14 xl:ml-20 outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-4xl lg:text-5xl xl:text-8xl font-bold tracking-wide"
            before="How to play"
          >
            How to play
          </h2>
          <div className="flex flex-wrap flex-col">
            <div className="group -mb-6 lg:-mb-20 xl:-mb-20">
              <h3 className="py-1 lg:py-2 xl:py-4 pl-4 lg:pl-8 xl:pl-12 text-white max-w-[310px] lg:max-w-[370px] xl:max-w-[500px] bg-gradient-to-r from-brand-light via-[#04566a] text-sm lg:text-xl xl:text-3xl font-semibold mb-2 tracking-wide">
                1. Predict the game: Result, goal scorers and MVPs
              </h3>
              <div className="max-w-[267px] lg:max-w-[343px] xl:max-w-[490px] transform -translate-y-8 lg:-translate-y-40 xl:-translate-y-60 lg:-translate-x-6 xl:-translate-x-10 pr-2 ml-auto mr-0">
                <Image
                  src={"/step-1-predict-the-game.png"}
                  alt={"Predict the game: Result, goal scorers and MVPs"}
                  width={490}
                  height={358}
                />
              </div>
            </div>
            <div className="group -mb-10 lg:-mb-20 xl:-mb-28">
              <h3 className="py-1 lg:py-2 xl:py-4 pr-4 lg:pr-8 xl:pr-12 text-white max-w-[310px] lg:max-w-[460px] xl:max-w-[600px] bg-gradient-to-l from-brand-light via-[#04566a] text-sm lg:text-xl xl:text-3xl font-semibold mb-2 ml-auto tracking-wide text-right">
                2. Use the best NFT cards for your game
              </h3>
              <div className="max-w-[269px] lg:max-w-[352px] xl:max-w-[504px] mt-5 mb-8 relative pl-6 transform -translate-y-6 lg:-translate-y-40 xl:-translate-y-56 lg:ml-16 xl:ml-[30px]">
                <Image
                  src={"/step-2-use-nft-best-card.png"}
                  alt={"Use the best NFT cards for your game"}
                  width={504}
                  height={341}
                />
              </div>
            </div>
            <div className="group -mb-2 lg:-mb-20 xl:-mb-16">
              <h3 className="py-1 lg:py-2 xl:py-4 pl-4 lg:pl-8 xl:pl-12 text-white max-w-[250px] lg:max-w-[370px] xl:max-w-[500px] bg-gradient-to-r from-brand-light via-[#04566a] text-sm lg:text-xl xl:text-3xl font-semibold mb-2 tracking-wide">
                3. Watch the match and rate the players
              </h3>
              <div className="max-w-[274px] lg:max-w-[350px] xl:max-w-[500px] transform -translate-y-5 lg:-translate-y-40 xl:-translate-y-52 lg:-translate-x-6 xl:-translate-x-10 pr-2 ml-auto mr-0">
                <Image
                  src={"/step-3-watch-and-rate-players.png"}
                  alt={"3. Watch the match and rate the players"}
                  width={500}
                  height={338}
                />
              </div>
            </div>
            <div className="group -mb-6 lg:-mb-20 xl:-mb-36">
              <h3 className="py-1 lg:py-2 xl:py-4 pr-4 lg:pr-8 xl:pr-12 text-white max-w-[310px] lg:max-w-[390px] xl:max-w-[600px] bg-gradient-to-l from-brand-light via-[#04566a] text-sm lg:text-xl xl:text-3xl font-semibold mb-2 ml-auto tracking-wide text-right">
                4. Collect the prize
              </h3>
              <div className="max-w-[269px] lg:max-w-[350px] xl:max-w-[501px] mt-5 mb-8 relative pl-6 transform -translate-y-6 lg:-translate-y-40 xl:-translate-y-52 lg:ml-16 xl:ml-[30px]">
                <Image
                  src={"/step-4-collect-the-prize.png"}
                  alt={"4. Collect the prize"}
                  width={501}
                  height={329}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="investors bg-gradient-to-b from-[#000A10] to-brand">
        <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto pt-8 lg:py-16 xl:py-28 px-5 text-center lg:text-left">
          <h2
            className="max-w-[238px] lg:max-w-[320px] xl:max-w-2xl mx-auto lg:ml-6 mb-5 lg:mb-8 xl:mb-12 text-left outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-[39px] lg:text-5xl xl:text-8xl leading-tight font-bold tracking-wide"
            before="investors & partners"
          >
            investors & partners
          </h2>
          <div className="flex flex-wrap justify-around items-center pb-10 px-1 lg:-mr-24 xl:-mr-40">
            <div className="max-w-[112px] lg:max-w-[178px] xl:max-w-[254px]">
              <Image
                src={"/aws-partner.svg"}
                width={254}
                height={117}
                alt={"AWS Parnter Network"}
              />
            </div>
            <div className="max-w-[118px] lg:max-w-[186px] xl:max-w-[266px]">
              <Image
                src={"/flat6labs-partner.svg"}
                width={266}
                height={73}
                alt={"FLAT6LABS"}
              />
            </div>
            <div className="max-w-[112px] lg:max-w-[178px] xl:max-w-[254px]">
              <Image
                src={"/hype-partner.svg"}
                width={254}
                height={127}
                alt={"Hype Sports Innovation"}
              />
            </div>
            <div className="max-w-[126px] lg:max-w-[199px] xl:max-w-[285px]">
              <Image
                src={"/binance-partner.svg"}
                width={285}
                height={93}
                alt={"Binance Smart Chain"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="comments overflow-hidden lg:pb-20 xl:pb-28">
        <div className="bg-brand-dark lg:bg-transparent rounded-2xl mx-4 sm:mx-10 lg:max-w-[90%] lg:mr-0 lg:ml-auto pt-[22px] pb-6 lg:pt-0 relative">
          <h2
            className="mb-6 lg:mb-12 xl:mb-20 ml-8 lg:ml-14 xl:ml-20 outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-3xl max-w-xs lg:max-w-sm xl:max-w-3xl lg:text-5xl xl:text-8xl font-bold tracking-wide"
            before="Here you will find your comment"
          >
            Here you will find your comment
          </h2>
          <div className="comments-slider ml-8 lg:ml-14 xl:ml-20 -mr-5 sm:-mr-10">
            <Swiper
              modules={[Pagination]}
              spaceBetween={25}
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/comment-card.png"}
                  width={223}
                  height={325}
                  alt={"comment"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section id="start-now" className="form py-6 scroll-smooth">
        <h2 className="text-white text-center uppercase mx-auto max-w-[250px] lg:max-w-4xl font-semibold mb-6 lg:mb-10 xl:mb-12 text-3xl lg:text-4xl xl:text-5xl">
          <span className="text-brand-light">Hurry-up </span>limited spots
          available
        </h2>
        <div className="bg-brand-dark text-center rounded-2xl mx-4 sm:mx-10 py-6 lg:py-12 lg:mx-auto lg:max-w-4xl xl:max-w-6xl lg:flex ">
          <h3
            className="max-w-[270px] lg:max-w-[400px] xl:max-w-[490px] mx-auto lg:ml-16 xl:ml-20 lg:mr-12 xl:mr-20 mb-5 text-center lg:text-left outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-[39px] lg:text-6xl xl:text-7xl leading-tight font-bold tracking-wide"
            before="I want to be a 5tars pioneer now"
          >
            I want to be a 5tars pioneer now
          </h3>
          <div className="mt-5 max-w-[247px] sm:max-w-[300px] lg:w-full mx-auto lg:ml-0">
            <BecomePioneerFrom />
          </div>
        </div>
      </section>
      <section className="prizes px-3 sm:px-5 py-10 md:py-20">
        <h2
          className="text-center max-w-[300px] sm:max-w-[400px] lg:max-w-[623px] xl:max-w-[931px] mx-auto mb-5 lg:mb-8 xl:mb-10 outlined-shadow-text before:content-[attr(before)] before:top-1 before:left-1 uppercase relative text-white text-[39px] leading-tight lg:text-6xl xl:text-[90px] font-bold tracking-wide"
          before="What are the Prizes"
        >
          What are the Prizes
        </h2>
        <p className="text-white text-center font-semibold mx-auto mb-0 sm:mb-6 lg:mb-7 xl:mb-9 text-xl lg:text-xl xl:text-3xl max-w-md lg:max-w-2xl xl:max-w-[900px]">
          The prices would depend on&nbsp;
          <span className="text-brand-light block lg:inline">
            Entry Ticket and Prize Pool
          </span>
        </p>
        <div className="overflow-hidden relative text-white lg:max-w-4xl xl:max-w-6xl mx-auto card sm:card-gradient-border-brand-to-trans-r border-transparent border-solid border-4 rounded-xl sm:shadow-brandcolor text-lg lg:text-3xl xl:text-4xl py-3 lg:py-8 pb-2 sm:pb-9 xl:pb-12 px-5 lg:px-8 xl:px-12">
          <div className="hidden sm:block absolute z-0 -right-1 -bottom-3 rounded-xl">
            <Image
              src={"/prizes-bg-star.png"}
              width={344}
              height={329}
              alt={"bg"}
            ></Image>
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex items-center">
              <h5 className="text-base sm:text-xl lg:text-2xl font-semibold mr-1 sm:mr-3">
                Entry Ticket
              </h5>
              <div className="max-w-[31px] transform translate-y-1 sm:translate-y-0 lg:max-w-[45px]">
                <Image
                  src={"/icon-star-coin.svg"}
                  width={45}
                  height={39}
                  alt={"Icon Star Coin"}
                ></Image>
              </div>
              <h5 className="ml-1 sm:ml-2 text-xl sm:text-2xl lg:text-3xl font-bold mr-auto">
                01
                <span className="text-lg sm:text-xl lg:text-2xl italic font-normal">
                  &nbsp;Starcoin
                </span>
              </h5>
            </div>
            <div className="flex items-center">
              <div className="max-w-[42px] lg:max-w-[60px]">
                <Image
                  src={"/arena_gold.svg"}
                  alt={"Arena Gold"}
                  width={60}
                  height={64}
                ></Image>
              </div>
              <h5 className="ml-1 sm:ml-3 text-xl sm:text-2xl lg:text-3xl font-bold">
                01
                <span className="text-lg sm:text-xl lg:text-2xl italic font-normal">
                  &nbsp;Arena
                </span>
              </h5>
            </div>
          </div>
          <div className="sm:grid z-10 relative sm:grid-cols-3 sm:gap-7">
            <div className="mb-5 sm:mb-0 card px-6 sm:px-3 lg:px-6 py-4 sm:py-3 lg:py-4 items-center justify-between flex card-gradient-border-white-to-trans-r border-transparent border-solid border-4 rounded-xl shadow-brandcolor">
              <Image
                src={"/user.svg"}
                width={21}
                height={20}
                alt={"Icon Users"}
              ></Image>
              <h6 className="text-lg sm:text-xs lg:text-sm xl:text-lg  leading-5 sm:leading-4 xl:leading-5 ml-4 mr-auto font-semibold max-w-[77px]">
                Number of Players
              </h6>
              <h4
                className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white"
                before="100"
              >
                100
              </h4>
            </div>
            <div className="mb-5 sm:mb-0 card px-6 sm:px-3 lg:px-6 py-4 sm:py-3 lg:py-4 items-center justify-between flex card-gradient-border-white-to-trans-r border-transparent border-solid border-4 rounded-xl shadow-brandcolor">
              <Image
                src={"/icon-prize-pool.svg"}
                width={35}
                height={35}
                alt={"Icon Prize Pool"}
              ></Image>
              <h6 className="text-lg sm:text-xs lg:text-sm xl:text-lg  leading-5 sm:leading-4 xl:leading-5 ml-4 mr-auto font-semibold max-w-[50px]">
                Prize Pool
              </h6>
              <h4
                className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white"
                before="25%"
              >
                25%
              </h4>
            </div>
            <div className="mb-5 sm:mb-0 card px-6 sm:px-3 lg:px-6 py-4 sm:py-3 lg:py-4 items-center justify-between flex card-gradient-border-white-to-trans-r border-transparent border-solid border-4 rounded-xl shadow-brandcolor">
              <Image
                src={"/icon-star-coin-outline.svg"}
                width={35}
                height={32}
                alt={"Icon starcoin"}
              ></Image>
              <h6 className="text-lg sm:text-xs lg:text-sm xl:text-lg  leading-5 sm:leading-4 xl:leading-5 ml-4 mr-auto font-semibold max-w-[80px]">
                Total&nbsp;
                <span className="italic font-normal block">Starcoin</span>
              </h6>
              <h4
                className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white"
                before="100"
              >
                100
              </h4>
            </div>
            <div className="justify-self-center w-full col-start-2 card px-6 sm:px-3 lg:px-6 py-4 sm:py-3 lg:py-4 items-center justify-between flex card-gradient-border-brand-to-trans-r border-transparent  border-solid border-[6px] rounded-xl shadow-brandcolor">
              <Image
                src={"/ico-cash-prizes.svg"}
                width={28}
                height={34}
                alt={"Icon Prize Pool"}
              ></Image>
              <h6 className="text-lg sm:text-xs lg:text-sm xl:text-lg  leading-5 sm:leading-4 xl:leading-5 ml-4 mr-auto font-semibold max-w-[130px]">
                Total Prize Pool&nbsp;
                <span className="italic font-normal block">Starcoin</span>
              </h6>
              <h4
                className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white"
                before="80"
              >
                80
              </h4>
            </div>
          </div>
        </div>
        <p className="text-white text-center font-normal text-lg sm:text-xl italic my-2 sm:my-7">
          1 Starcoin = 1 USD
        </p>
      </section>
      <section className="leaderboard px-3 sm:px-5 py-5 md:py-5 md:pb-20">
        <div className="text-white mb-8 pl-3 flex items-center justify-start lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Image
            src={"/user.svg"}
            width={21}
            height={20}
            alt={"Icon Users"}
          ></Image>
          <h6 className="text-lg sm:text-xs lg:text-sm xl:text-2xl leading-5 sm:leading-4 xl:leading-5 ml-4 mr-auto font-semibold">
            WINNERS Leaderboard
          </h6>
        </div>
        <div className="overflow-hidden relative text-white lg:max-w-4xl xl:max-w-6xl mx-auto card sm:card-gradient-border-white-to-trans-b border-transparent border-solid border-4 rounded-xl text-lg lg:text-3xl xl:text-4xl py-3 lg:py-8 pb-2 sm:pb-9 xl:pb-12 px-5 lg:px-8 xl:px-12 ">
          <div className="flex py-7 px-12 absolute top-0 left-0 right-1/2 justify-between bg-gradient-to-b from-[#000D1A] to-[#011F34]">
            <h4 className="uppercase text-2xl font-semibold">Name</h4>
            <h4 className="uppercase text-2xl font-semibold">Starcoin</h4>
          </div>
          <div className="flex py-7 px-12 absolute top-0 right-0 left-1/2 justify-between bg-gradient-to-b from-[#000D1A] to-[#011F34]">
            <h4 className="uppercase text-2xl font-semibold">Name</h4>
            <h4 className="uppercase text-2xl font-semibold">Starcoin</h4>
          </div>
          <div className="grid mt-12 text-white grid-flow-col grid-rows-6 gap-y-3 gap-x-14">
            {winners.map((winner) => {
              return <LeaderBoardItem key={winner.id} content={winner} />;
            })}
          </div>
        </div>
      </section>
      <section className="arenas">
        <div className="bg-brand-dark text-center my-5 rounded-[10px] mx-4 sm:mx-10 lg:px-4 py-6 lg:py-12 xl:px-7 lg:mx-auto lg:max-w-4xl xl:max-w-6xl ">
          <h2
            className="max-w-[300px] sm:max-w-[400px] lg:max-w-[320px] xl:max-w-2xl mx-auto lg:ml-6 xl:ml-20 mb-5 lg:mb-8 xl:mb-12 text-left outlined-shadow-text before:content-[attr(before)] before:top-0.5 before:left-0.5 uppercase relative text-white text-[39px] lg:text-5xl xl:text-8xl leading-tight font-bold tracking-wide"
            before="Next Arenas"
          >
            Next Arenas
          </h2>
          <div className="filters w-full px-9 md:px-14 mb-3 md:mb-8 flex items-center justify-between">
            <div className="match-day flex">
              {labelDay.length > 0 && (
                <>
                  <div className="max-w-[12px] md:max-w-[21px]">
                    <Image
                      alt={"Icon match day"}
                      src={"/icon-notepad.svg"}
                      width={21}
                      height={24}
                    />
                  </div>
                  <h5 className="text-white ml-2 md:ml-4 text-base md:text-2xl">
                    Match Day {labelDay}
                  </h5>
                </>
              )}
            </div>
            <div className="dd-filters flex justify-end">
              <div className="form-field mr-3 flex items-center justify-start">
                <label
                  htmlFor="match-day"
                  className="text-white text-xs md:text-base flex font-normal"
                >
                  Sort <strong className="font-bold inline">&nbsp;by</strong>
                </label>
                <select
                  onChange={handleFilterByDay}
                  name="match-day"
                  id="match-day"
                  className="w-full bg-transparent text-xs md:text-base font-bold  border-2 border-none text-white py-3 pr-8 pl-1 focus:outline-none focus:ring-transparent focus:border-brand-light"
                >
                  <option value="" selected disabled>
                    day
                  </option>
                  <option value="1">Day 01</option>
                  <option value="2">Day 02</option>
                  <option value="3">Day 03</option>
                </select>
              </div>
              <div className="form-field hidden sm:flex items-center justify-start">
                <label
                  htmlFor="match-time"
                  className="text-white text-base flex font-normal"
                >
                  Sort <strong className="font-bold inline">&nbsp;by</strong>
                </label>
                <select
                  onChange={handleArenasSort}
                  name="match-time"
                  id="match-time"
                  className="w-full bg-transparent text-base font-bold   border-2 border-none text-white py-3 pr-8 pl-1 focus:outline-none focus:ring-transparent focus:border-brand-light"
                >
                  <option value="" selected disabled>
                    time
                  </option>
                  <option value="desc">Sooner first</option>
                  <option value="asc">Latest first</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Grid, Navigation, Pagination]}
              spaceBetween={28}
              slidesPerView={1}
              grid={{
                fill: "row",
                rows: 2,
              }}
              breakpoints={{
                640: {
                  spaceBetween: 40,
                  slidesPerView: 1,
                  grid: {
                    fill: "row",
                    rows: 2,
                  },
                },
                769: {
                  spaceBetween: 50,
                  slidesPerView: 2,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 58,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
              }}
              className="mySwiper"
              navigation
            >
              {arenas.map((arena, id) => (
                <SwiperSlide key={id}>
                  <Arena content={arena} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <footer className="sm:bg-gradient-to-b sm:mt-20 from-[#000A10]">
        <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-6xl px-2 sm:px-5 py-2 sm:py-16 lg:py-24">
          <div className="lg:flex w-full justify-between items-start">
            <div className="flex flex-col">
              <div className="logo lg:ml-6 flex flex-nowrap justify-start items-center">
                <div className="transform max-w-[58px] sm:max-w-[83px] sm:-translate-y-1">
                  <Image
                    src={"/footer-logo-5-tars.svg"}
                    alt="Logo 5Tars"
                    width={83}
                    height={77}
                  />
                </div>
                <p className="text-[#C0D9F8] text-sm sm:text-2xl mx-2">
                  is a NFT Game powered by
                </p>
                <div className="sm:ml-5 max-w-[126px] sm:max-w-[190px]">
                  <Image
                    src={"/footer-logo-valoradigital.svg"}
                    alt="ValoraDigital"
                    width={190}
                    height={54}
                  />
                </div>
              </div>
              <div className="ml-6 mt-5 hidden lg:mt-0 uppercase sm:grid grid-cols-3 gap-4 text-[#C0D9F8] text-xl xl:text-2xl">
                <Link href={"#"} title="Home">
                  <a className="hover:text-white transition-all ease-in-out">
                    Home
                  </a>
                </Link>
                <Link href={"#"} title="Terms of use">
                  <a className="hover:text-white transition-all ease-in-out">
                    Terms of use
                  </a>
                </Link>

                <Link href={"#"} title="FAQs">
                  <a className="hover:text-white transition-all ease-in-out">
                    FAQs
                  </a>
                </Link>

                <Link href={"#"} title="Play">
                  <a className="hover:text-white transition-all ease-in-out">
                    Play
                  </a>
                </Link>

                <Link href={"#"} title="Privacy policy">
                  <a className="hover:text-white transition-all ease-in-out">
                    Privacy policy
                  </a>
                </Link>

                <Link href={"#"} title="Marketplace">
                  <a className="hover:text-white transition-all ease-in-out">
                    Marketplace
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-center lg:text-right py-2 lg:py-8 sm:mt-5 lg:mt-0">
              <div className="logo ml-6 flex flex-nowrap justify-evenly lg:justify-start items-end">
                <Link href={"#"}>
                  <a
                    title="Start now"
                    className="text-brand-text text-lg uppercase leading-3 border-brand-text border-2 py-3 px-7 rounded-md transition-all ease-in-out hover:bg-brand-light2 mr-5"
                  >
                    Whitepaper
                  </a>
                </Link>
                <Link href={"#"}>
                  <a title="Twitter" className="mr-5">
                    <Image
                      src={"/footer-icon-twitter.svg"}
                      alt="Twitter"
                      width={27}
                      height={27}
                    />
                  </a>
                </Link>
                <Link href={"#"}>
                  <a title="Discord" className="mr-5">
                    <Image
                      src={"/footer-icon-discord.svg"}
                      alt="Discord"
                      width={27}
                      height={27}
                    />
                  </a>
                </Link>
                <Link href={"#"}>
                  <a title="Instagram" className="mr-5">
                    <Image
                      src={"/footer-icon-instagram.svg"}
                      alt="Instagram"
                      width={27}
                      height={27}
                    />
                  </a>
                </Link>
                <Link href={"#"}>
                  <a title="Telegram" className="mr-5">
                    <Image
                      src={"/footer-icon-telegram.svg"}
                      alt="Telegram"
                      width={27}
                      height={27}
                    />
                  </a>
                </Link>
              </div>
              <div className="copyright py-5 sm:py-10">
                <p className="text-brand-text font-normal text-sm lg:text-base mx-2">
                  © {new Date().getFullYear()} 5TARS. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
