export interface ServicesDataElement {
  title: string;
  frameworks?: string;
  icon_classname?: string;
}

export const ServicesData: ServicesDataElement[] = [
  {
    title: 'Full-Stack Web Applications',
    frameworks: 'Typescript, Node.js, React, Next.js, Vue.js',
    icon_classname: 'fi-sr-code-window'
  },
  {
    title: 'iOS and Android Mobile Apps',
    frameworks: 'Flutter, Dart, Swift',
    icon_classname: 'fi-sr-mobile-button'
  },
  {
    title: 'Game Design and Development',
    frameworks: 'Unity, Godot, C#',
    icon_classname: 'fi-sr-console-controller'
  },
  {
    title: 'UI/UX Design and Prototyping',
    icon_classname: 'fi-sr-user-interface-ui'
  },
  {
    title: 'Arduino and IoT Projects',
    frameworks: 'Arduino, C/C++, Rust',
    icon_classname: 'fi-sr-user-robot'
  },
  {
    title: 'Math and Physics Simulations',
    frameworks: 'MATLAB, Python, OpenCV',
    icon_classname: 'fi-sr-function-square'
  },
  {
    title: 'DevOps and Cloud Solutions',
    frameworks: 'AWS, GCP, Docker, Kubernetes',
    icon_classname: 'fi-sr-cloud-upload-alt'
  },
  {
    title: 'Technical Consulting and Code Reviews',
    icon_classname: 'fi-sr-grin-alt'
  }
];
