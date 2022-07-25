import Image from "next/image";
function BenefitCard(props) {
  return (
    <div className="flex justify-top text-center py-6 px-5 lg:py-8 xl:py-9 flex-wrap flex-col items-center card card-gradient-border-light border-transparent border-solid border-4 rounded-xl shadow-brandcolor hover:shadow-brand-light ease-in-out transition-shadow">
      <div className="img mb-2 max-w-[41px] lg:max-w-[45px] xl:max-w-none">
        <Image
          src={props.content.icon}
          alt={props.content.heading}
          width={props.content.width}
          height={props.content.height}
        />
      </div>
      <h2
        before={props.content.heading}
        className="text-white text-xl lg:text-2xl xl:text-3xl uppercase transform -translate-x-1 font-semibold mb-2 lg:mb-3 xl:mb-4 tracking-wide outlined-shadow-sm-text before:content-[attr(before)] before:top-0 before:left-0"
      >
        {props.content.heading}
      </h2>
      <p className="text-base lg:text-lg xl:text-xl text-white font-medium">
        {props.content.paragraph}
      </p>
    </div>
  );
}

export default BenefitCard;
