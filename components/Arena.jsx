import React from "react";
import Image from "next/image";
import Link from "next/link";

const Arena = (props) => {
  const arenaDateTime = new Date(props.content.dateTime);
  return (
    <div className="gradient-borders w-full relative arena bg-[#00101F] py-4 lg:py-7 px-3 lg:px-6 rounded-[10px] inline-flex flex-col items-center ">
      <div className="flex items-center w-full justify-between mb-4 md:mb-6">
        <div className="bg-[#00080D] border-white border py-1 lg:py-2 px-3 lg:px-3 xl:px-6 rounded-full flex-inline items-center">
          <div className="inline-flex mr-1">
            <div className="max-w-[13px] md:max-w-[17px]">
              <Image
                src={"/icon-clock.svg"}
                width={17}
                height={17}
                alt={"Clock Icon"}
              />
            </div>
          </div>
          <span className="uppercase text-white text-sm lg:text-base xl:text-xl">
            {("0" + arenaDateTime.getUTCHours()).slice(-2) +
              ":" +
              ("0" + arenaDateTime.getUTCMinutes()).slice(-2) +
              " - " +
              arenaDateTime.toLocaleDateString("en-us", { weekday: "short" }) +
              " " +
              ("0" + (arenaDateTime.getMonth() + 1)).slice(-2) +
              "/" +
              ("0" + arenaDateTime.getDate()).slice(-2)}
          </span>
        </div>
        <div className="py-2 lg:px-2 xl:px-6 flex-inline items-center">
          <div className="inline-flex mr-1">
            <div className="max-w-[14px] md:max-w-[21px]">
              <Image
                src={"/user.svg"}
                width={21}
                height={20}
                alt={"Users Icon"}
              />
            </div>
          </div>
          <span className="text-white text-sm lg:text-base xl:text-xl">
            {props.content.users + "/" + props.content.totalUsers}
          </span>
        </div>
        <div className="arena-logo">
          <div className="max-w-[34px] md:max-w-[53px]">
            <Image
              src={"/" + props.content.arenaType}
              width={53}
              height={40}
              alt={"Arena Icon"}
            />
          </div>
        </div>
      </div>
      <div className="team-vs-team mb-4 md:mb-7 w-full flex justify-around items-start">
        <div className="team-single">
          <div className="team-logo max-w-[68px] md:max-w-[105px] mx-auto">
            <Image
              src={"/" + props.content.team1Logo}
              width={105}
              height={105}
              alt={props.content.team1}
            />
          </div>
          <h4 className="mt-2 m:mt-3 mx-auto max-w-[85px] sm:max-w-full uppercase text-white text-sm md:text-xl font-semibold">
            {props.content.team1}
          </h4>
        </div>
        <h5 className="uppercase mx-5 my-auto text-white text-sm md:text-xl font-semibold">
          VS
        </h5>
        <div className="team-single">
          <div className="team-logo max-w-[68px] md:max-w-[105px] mx-auto">
            <Image
              src={"/" + props.content.team2Logo}
              width={105}
              height={105}
              alt={props.content.team2}
            />
          </div>
          <h4 className="mt-2 m:mt-3 mx-auto max-w-[85px] sm:max-w-full uppercase text-white text-sm md:text-xl font-semibold">
            {props.content.team2}
          </h4>
        </div>
      </div>
      <div className="button w-full z-10">
        <Link href={props.content.joinLink}>
          <a className="uppercase block w-full text-white text-sm md:text-xl font-semibold px-11 py-2  bg-gradient-to-r from-brand-light to-brand-dark rounded-md hover:shadow-lg hover:shadow-brand-light2 transition ease-in-out ">
            Join
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Arena;
