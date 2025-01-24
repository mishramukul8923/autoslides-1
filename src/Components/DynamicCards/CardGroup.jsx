import Card from "../Card";

const CardGroup = () => {
//   const cardStyle2 = {
//     order: "1",
//   };

  const cardText1 = {
    title: "Stop Wasting Time and Money  on Content Creation Again",
    description:
      "AutoSlides transforms your ideas into viral, scroll-stopping slideshows effortlessly. With our AI-powered tool, you can create engaging, platform-ready slideshows in just a few clicks.",
    points: [
      "Stunning TikTok and Instagram content",
      "Viral slideshows for campaigns",
      "Endless opportunities to grow your reach",
    ],
  };


  

  return (
  <div>
<Card cardText1 = {cardText1}  />


  </div>
  );
};

export default CardGroup;
