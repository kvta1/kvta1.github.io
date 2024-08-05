// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kvta1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['kvta1/RO47002','kvta1/LeagueOfLegendsBot', 'remla24-team7/operation', 'remla24-team7/model-training'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Delft Hyperloop',
          description:
            'As Lead Thermal Management at Delft Hyperloop I lead a department of three engineers to design, produce and test a thermal management system for a Hyperloop system. I was responsible for all technical integration with different partments within Delft Hyperloo',
          imageUrl:
            '/images/DH07_pod_reveal.jpeg',
          link: 'https://www.delfthyperloop.nl/',
        },
        {
          title: 'ESA Vacuum test',
          description:
            'With Delft Hyperloop I had the unique privilege of overseeing a vacuum test of our Hyperloop prototype at ESTECs Phenix Thermal Vacuum chamber, in collaboration with ESA. My responsiblity was to ensure safe performance of our prototype in vacuum.',
          imageUrl:
            '/images/kevin_esa.jpg',
          link: 'https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Test_centre/Phenix_Thermal_Vacuum_Chamber',
        },
        {
          title: 'Multidisciplinary Project Robotics',
          description:
            'During my master I worked in a multidisciplinary team to develop a robotic solution for a barn-cleaning robot. We implemented a ROS based solution containing global and local planning, computer vision and manipulation nodes.',
          imageUrl:
            '/images/MDP_group_photo.jpg',
          link: '',
        },
        {
          title: 'Thesis: Robotic rowing boat',
          description:
            'For my Bachelor thesis we developed and tested a robotic rowing robot to study the hydrodynamics of different rowing oar angles. Our measurements show a 0.4% increase in rowing speed with a forward tilted oar blade.',
          imageUrl:
            '/images/BEP_completepicture.JPEG',
          link: 'https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2023.1109494/full',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kevin-tran-734997218',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kevintran@live.nl',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'ROS',
    'Pytorch',
    'Jax',
    'OpenAI Gym',
    'Docker',
    'DevOps',
    'C++',
  ],
  experiences: [
    {
      company: 'TU Delft',
      position: 'Teaching Support Assistant',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://www.tudelft.nl/teaching-support',
    },
    {
      company: 'Delft Hyperloop',
      position: 'Lead Thermal Management',
      from: 'August 2022',
      to: 'September 2023',
      companyLink: 'https://www.delfthyperloop.nl/',
    },
    {
      company: 'TU Delft',
      position: 'Student Researcher',
      from: 'March 2022',
      to: 'August 2022',
      companyLink: 'https://www.tudelft.nl/me/over/afdelingen/process-energy/research/fluid-mechanics',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Delft University of Technology',
      degree: 'MSc Robotics',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Delft University of Technology',
      degree: 'BSc Mechanical Engineering',
      from: '2019',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Improving rowing performance by adjusting oar blade size and angle',
      conferenceName: '',
      journalName: 'Frontiers in Sports and Active Living',
      authors: 'Kevin Tran, William van Nieuwburg, Bram van Spreuwel, Ming Da Yang, Arnoud Greidanus, Gertjan Mulder, Mark Tummers, Jerry Westerweel, ',
      link: 'https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2023.1109494/full',
      description:
        'In this work we demonstrate that a forward tilted rowing blade would result in a more efficient and effective motion of the blade through the water. Our measurements demonstrate that a modified rowing blade result in faster rowing by 0.4% at the same input power.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
