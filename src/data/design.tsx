import DiwataPortfolioImage from '../assets/images/design/diwata-portfolio.png';

export interface DesignDataElement {
  image: string;
  title: string;
  description?: string;
}

const DesignData: DesignDataElement[] = [
  {
    image: DiwataPortfolioImage,
    title: 'UPV Diwata Esports (2023)',
    description:
      "Worked as a social media manager and graphic designer for the university's official esports organization. Created various digital artworks, including social media posts, event posters, and promotional materials to enhance the organization's online presence. The UP logo and wordmark used in the designs are official trademarks of the University of the Philippines and are used with explicit permission from the Office of Student Affairs."
  }
];

export default DesignData;
