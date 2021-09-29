// property logos
import Koia from "../../assets/img/koia.png";
import Freck from "../../assets/img/freck.png";
import RowingBlazers from "../../assets/img/rowing-blazers.png";
import Wilde from "../../assets/img/wilde.png";
import Generaize from "../../assets/img/generaize.svg";

// hero images
import WILDE_HERO from "../../assets/img/wilde-masterImage.png";
import ROWINGBLAZERS_HERO from "../../assets/img/rowingBlazers-masterImage.png";
import KOIA_HERO from "../../assets/img/koia-masterImage.png";
import FRECK_HERO from "../../assets/img/freck-masterImage.png";
import GENERAIZE_HERO from "../../assets/img/generaize-masterImage.png";

import PropertiesLayout from "../../components/propertiesLayout";

const properties = [
  {
    id: "koia",
    title: "Koia",
    subtitle: "Lorem Ipesum",
    logo: Koia,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://drinkkoia.com/",
      label: "Learn More",
    },
    masterImage: KOIA_HERO
  },
  {
    id: "freck",
    title: "Freck",
    subtitle: "Lorem Ipesum",
    logo: Freck,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://freckbeauty.com/",
      label: "Learn More",
    },
    masterImage: FRECK_HERO
  },
  {
    id: "rowing-blazers",
    title: "Rowing Blazers",
    subtitle: "Lorem Ipesum",
    logo: RowingBlazers,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://rowingblazers.com/",
      label: "Learn More",
    },
    masterImage: ROWINGBLAZERS_HERO
  },
  {
    id: "wilde-chips",
    title: "Wilde Chips",
    subtitle: "Lorem Ipesum",
    logo: Wilde,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://www.wildebrands.com/",
      label: "Learn More",
    },
    masterImage: WILDE_HERO
  },
  {
    id: "generaize",
    title: "Generaize",
    subtitle: "Lorem Ipesum",
    logo: Generaize,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://www.generaize.com/",
      label: "Learn More",
    },
    masterImage: GENERAIZE_HERO
  }
]

const Investments = () => {

  return (
    <PropertiesLayout properties={properties}>
      <h1 className="big">Investments</h1>
      <p className="h3">Grey Space Group takes an individualized approach and curates organic GTM strategies, marketing campaigns, product distribution, and talent / brand partnerships to further each brand's growth.</p>
    </PropertiesLayout>
  )
}

export default Investments