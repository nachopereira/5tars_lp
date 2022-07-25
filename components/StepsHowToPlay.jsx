import Image from "next/image";
function StepsHowToPlay(props) {
  return (
    <div key={props.content.id} className="group">
      <h3
        before={props.content.heading}
        className="py-1 px-4 text-white w-full group-even:bg-gradient-to-l group-even:from-brand-light group-even:via-[#04566a] group-odd:bg-gradient-to-r group-odd:from-brand-light group-odd:via-[#04566a] text-sm font-semibold mb-2 tracking-wide group-even:text-right"
      >
        {props.content.heading}
      </h3>
      <div className="img mb-2">
        {props.content.image.map((singleImage) => (
          <Image
            key={singleImage.id}
            src={singleImage.name}
            alt={props.content.heading}
            width={singleImage.width}
            height={singleImage.height}
          />
        ))}
      </div>
    </div>
  );
}

export default StepsHowToPlay;
