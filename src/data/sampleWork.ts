import avsmCapitalImage from "@/assets/sample-work/avsm-capital.png";
import edenCareImage from "@/assets/sample-work/edencare360.png";
import edenElevationsImage from "@/assets/sample-work/eden-elevations-3.jpg";
import firstAchieversImage from "@/assets/sample-work/first-achievers.png";
import singineersImage from "@/assets/sample-work/singineers.png";
import theWarehouseImage from "@/assets/sample-work/the-warehouse.png";

export const sampleWork = [
  {
    name: "EdenCare 360",
    url: "https://edencare360.com/",
    image: edenCareImage,
    description: "MedSpa & wellness platform",
  },
  {
    name: "Singineers",
    url: "https://singineers.com/",
    image: singineersImage,
    description: "STEM educational songs platform",
  },
  {
    name: "The Warehouse by Black Creek",
    url: "https://thewarehousebyblackcreek.com/",
    image: theWarehouseImage,
    description: "Event venue website",
  },
  {
    name: "AVSM Capital",
    url: "https://avsmcapital.com/",
    image: avsmCapitalImage,
    description: "Investment management website",
  },
  {
    name: "First Achievers Childcare",
    url: "https://firstachieverschildcare.com/",
    image: firstAchieversImage,
    description: "Childcare and enrollment website",
  },
  {
    name: "Eden Elevations 3",
    url: "https://edenelevations3.com/",
    image: edenElevationsImage,
    description: "Multifamily investment website",
  },
] as const;
