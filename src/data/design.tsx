import DiwataPortfolioImage from '../assets/images/design/diwata-portfolio.png';
import PahampangPortfolioImage from '../assets/images/design/pahampang-portfolio.png';

export interface DesignDataElement {
  image: string;
  title: string;
  description?: string;
  footnote?: string;
}

const DesignData: DesignDataElement[] = [
  {
    image: DiwataPortfolioImage,
    title: 'UPV Diwata Esports (2023)',
    description:
      "Worked as a social media manager and graphic designer for the university's official esports organization. Created various digital artworks, including social media posts, event posters, and promotional materials to enhance the organization's online presence.",
    footnote: 'The UP logo and wordmark used in the designs are official trademarks of the University of the Philippines and are used with explicit permission from the Office of Student Affairs.'
  },
  {
    image: PahampangPortfolioImage,
    title: '2023 UPV Pahampang - Esports Category',
    description:
      "Served as a graphic designer for the esports division of the university's annual inter-collegiate tournament. Designed digital assets such as match results, scheduling, promotions, stream overlays, and broadcast graphics.",
    footnote:
      'The official logo of League of Legends: Wild Rift is a trademark of Riot Games, Inc. The official logo of Mobile Legends: Bang Bang is a trademark of Moonton and ByteDance Ltd. The official logo of Call of Duty: Mobile is a trademark of Activision and TiMi Studio Group. All logos and trademarks are used for illustrative purposes only and belong to their respective owners and is not affiliated with the University of the Philippines Visayas.'
  }
];

export default DesignData;
