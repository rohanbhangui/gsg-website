// property logos
import Koia from "../../assets/img/koia.png";
import Freck from "../../assets/img/freck.png";
import RowingBlazers from "../../assets/img/rowing-blazers.png";
import RowingBlazers2 from "../../assets/img/rowing-blazers-alt.png";
import Wilde from "../../assets/img/wilde.png";
import Wilde2 from "../../assets/img/wilde-alt.png";
import IvyCity from "../../assets/img/ivycity.png";
import IvyCity2 from "../../assets/img/ivycity.png";
import GoodWipes from "../../assets/img/goodwipes-2.webp";
import GoodWipes2 from "../../assets/img/goodwipes.webp";
// import Generaize from "../../assets/img/generaize.svg";
// import Generaize2 from "../../assets/img/generaize-alt.svg";


// hero images
import WILDE_HERO from "../../assets/img/wilde-masterImage2.jpg";
import ROWINGBLAZERS_HERO from "../../assets/img/rowingBlazers-masterImage.png";
import KOIA_HERO from "../../assets/img/koia-masterImage.png";
import FRECK_HERO from "../../assets/img/freck-masterImage.png";
import IVYCITY_HERO from "../../assets/img/ivyCity-masterImage.png";
import GOODWIPES_HERO from "../../assets/img/goodWipes-masterImage.webp";
// import GENERAIZE_HERO from "../../assets/img/generaize-masterImage2.jpg";

import PropertiesLayout from "../../components/propertiesLayout";

const properties = [
  {
    id: "koia",
    title: "Koia",
    subtitle: "Delicious & Nutritious!",
    logo: Koia,
    description: `Deliver easy access to healthy, delicious, convenient plant-based nutrition. Koia uses only high-quality ingredients to deliver a balance of complete plant protein, plant-based fats, and fiber for sustained satiation and energy at any time of the day. All Koia products are 100-percent plant-based, low (or no!) sugar, dairy-free, soy-free, gluten-free, vegan and Non-GMO Project verified. `,
    link: {
      url: "https://drinkkoia.com/",
      label: "Learn More",
    },
    masterImage: KOIA_HERO,
  },
  {
    id: "wilde-chips",
    title: "Wilde Chips",
    subtitle: "Fortune Favors The Wilde!",
    logo: Wilde,
    logo_alt: Wilde2,
    description: `There's nothing weaker and less nutritious than a potato, and yet somehow it's America's favorite snack food. Wilde had a problem with that. So they roundhouse kicked the spud out and created a Kick-Ass Protein Chip: hugely delicious, powered with Smart Ingredients and crispy as a Karate chop from your sensei's sensei.`,
    link: {
      url: "https://www.wildebrands.com/",
      label: "Learn More",
    },
    masterImage: WILDE_HERO,
  },
  {
    id: "ivy-city",
    title: "Ivy City Co.",
    subtitle: "Original Dresses for all Ages and Stages",
    logo: IvyCity,
    logo_alt: IvyCity2,
    description: `Ivy City Co® is empowering a community with confidence through dresses for all ages and stages (baby-5x) women-owned + women-operated. Ivy City Co® is your #1 Mommy and Me dress brand. Our goal for Ivy City Co. is to continue offering stand-out pieces that are timeless, feminine, and unique that instill confidence. The moment you put on your first Ivy City Co. dress you join a community, a place of instant friendship and encouragement!`,
    link: {
      url: "https://ivycityco.com/",
      label: "Learn More",
    },
    masterImage: IVYCITY_HERO,
  },
  {
    id: "good-wipes",
    title: "Good Wipes",
    subtitle: "Do more. Feel Good. Live Clean.",
    logo: GoodWipes,
    logo_alt: GoodWipes2,
    description: `Goodwipes makes portable wet wipes for active people. Body Wipes for When You Can't Shower and The Best Butt Wipes. Do more. Feel Good. Live Clean.`,
    link: {
      url: "https://goodwipes.com/",
      label: "Learn More",
    },
    masterImage: GOODWIPES_HERO,
  },
  {
    id: "freck",
    title: "Freck Beauty",
    subtitle: "Freck Beauty is an attitude.",
    logo: Freck,
    description: `Freck is a bold, clean beauty brand for anyone that cares about ingredients, respects the process, and doesn't care about the rules!`,
    link: {
      url: "https://freckbeauty.com/",
      label: "Learn More",
    },
    masterImage: FRECK_HERO,
  },
  {
    id: "rowing-blazers",
    title: "Rowing Blazers",
    subtitle: "Clothing with a sense of humour, hint of irony",
    logo: RowingBlazers,
    logo_alt: RowingBlazers2,
    description: `Rowing Blazers is an American clothing brand and design lab for the classics founded by Jack Carlson. They are dedicated to authenticity, quality, and craftsmanship; and simultaneously to irreverence, inclusivity, sustainability, empowerment, and fun.`,
    link: {
      url: "https://rowingblazers.com/",
      label: "Learn More",
    },
    masterImage: ROWINGBLAZERS_HERO,
  },
];

// const extra = [
//   {
//     id: "generaize",
//     title: "Generaize",
//     subtitle: "Lorem Ipesum",
//     logo: Generaize,
//     logo_alt: Generaize2,
//     description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
//     link: {
//       url: "https://www.generaize.com/",
//       label: "Learn More",
//     },
//     masterImage: GENERAIZE_HERO,
//   },
// ]

const Investments = () => {
  return (
    <PropertiesLayout properties={properties}>
      <h1 className="big">Investments</h1>
      <p className="h3">
        Because we're obsessively curious, we identify opportunities where others are afraid to look. These opportunities drive tangible business metrics and generate significant ROI.
      </p>
      <br />
      <p className="h3">
        Grey Space Group takes an individualized approach and curates organic
        GTM strategies, marketing campaigns, product distribution, and talent /
        brand partnerships to further each brand's growth.
      </p>
    </PropertiesLayout>
  );
};

export default Investments;
