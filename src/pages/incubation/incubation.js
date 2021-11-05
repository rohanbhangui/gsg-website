import PropertiesLayout from "../../components/propertiesLayout";

// property logos
import TCL from "../../assets/img/tcl.png";
import NPC from "../../assets/img/npc.png";
import OGM from "../../assets/img/ogm.png";

// hero images
import TCL_HERO from "../../assets/img/tcl-masterImage.png";
import NPC_HERO from "../../assets/img/npc-masterImage.png";
import OGM_HERO from "../../assets/img/ogm-masterImage.jpeg";

const properties = [
  {
    id: "the-crew-league",
    title: "The Crew League",
    subtitle: "Your artist's favourite league.",
    logo: TCL,
    description: `GSG Incubated a first-of-its-kind, unscripted competition series where celebrities and their "crews" face off against each other for bragging rights and a grand prize. `,
    link: {
      url: "https://thecrewleague.com/",
      label: "Learn More",
    },
    masterImage: TCL_HERO,
  },
  {
    id: "national-players-club",
    title: "National Players Club",
    subtitle: "Where Black makes the first move.",
    logo: NPC,
    description: `GSG incubated a new-age chess competition where we took the antiquated game of chess that has grown immensely in 2020 (2.8 million new players on Chess.com & sales up 87%) and created a never-seen-before unsubdued spin that connects with Gen-Z & millennial consumers in a relevant way.`,
    link: {
      url: "https://national-players-club.myshopify.com/",
      label: "Learn More",
    },
    masterImage: NPC_HERO,
  },
  {
    id: "our-generation-music",
    title: "Our Generation Music",
    subtitle: "Generational revolution against the antiquated media platforms of old",
    logo: OGM,
    description: `OGM is the destination of Gen-Z & Millennials for all things trending in music, culture, sneakers, fashion, and entertainment news. Our mission is to expand into a new-age multimedia platform that offers “Our Generation” (Gen-Z & Millennials) a trusted name for music, entertainment, & pop culture happenings.`,
    link: {
      url: "https://ourgenerationmusic.com/",
      label: "Learn More",
    },
    masterImage: OGM_HERO,
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
