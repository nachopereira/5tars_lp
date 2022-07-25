import React from "react";
import Image from "next/image";

const LeaderBoardItem = (props) => {
  return (
    <div className="flex items-center py-4 px-6 bg-[#02121C] rounded-lg">
      <span className="text-xl font-normal mr-4">{props.content.id}.</span>
      <div className="max-w-[36px] max-h-[32px] mr-3 ">
        <Image
          src={props.content.profileImage.url}
          width={props.content.profileImage.width}
          height={props.content.profileImage.height}
          alt={"Winner Profile"}
          className={"rounded-full !border-2 !border-solid border-white"}
        ></Image>
      </div>
      <h4 className="text-lg font-semibold">{props.content.name}</h4>
      <div className="ml-auto flex items-center rounded-md py-1 px-4">
        <h5 className="text-base font-semibold mr-2">
          {props.content.starcoin}
        </h5>
        <Image
          src={"/icon-star-coin-outline.svg"}
          width={18}
          height={15}
          alt={"Icon Starcoin"}
        ></Image>
      </div>
    </div>
  );
};

export default LeaderBoardItem;
