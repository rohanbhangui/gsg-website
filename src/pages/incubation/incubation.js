import PropertiesLayout from "../../components/propertiesLayout";

// property logos
import TCL from "../../assets/img/tcl.png";
import NPC from "../../assets/img/npc.png";

// hero images
import TCL_HERO from "../../assets/img/tcl-masterImage.png";
import NPC_HERO from "../../assets/img/npc-masterImage.png";

const properties = [
  {
    id: "the-crew-league",
    title: "The Crew League",
    subtitle: "Lorem Ipesum",
    logo: TCL,
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://thecrewleague.com/",
      label: "Learn More",
    },
    masterImage: TCL_HERO,
  },
  {
    id: "national-players-club",
    title: "National Players Club",
    subtitle: "Lorem Ipesum",
    logo: NPC,
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://national-players-club.myshopify.com/",
      label: "Learn More",
    },
    masterImage: NPC_HERO,
  },
];

const Incubation = () => {
  return (
    <PropertiesLayout properties={properties}>
      <h1 className="big">Properties</h1>
      <p className="h3">
        We were born out of culture.

        So we’re able to anticipate what’s next...
      </p>
    </PropertiesLayout>
  );
};

export default Incubation;
