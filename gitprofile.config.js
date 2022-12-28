// gitprofile.config.js

const config = {
  github: {
    username: 'mirzasaikatahmmed', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 16, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mirzasaikatahmmed',
    twitter: 'Mirza_Saikat',
    facebook: 'mirzasaikat.ahmmed',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'mirzasaikatahmmed',
    website: 'https://mirzasaikatahmmed.info',
    phone: '+8801571195489',
    email: 'mirzasaikatahmmed@gmail.com',
  },
  skills: [
    'C++',
    'Java',
    'PHP',
    'Python',
    'Linux',
    //'C#',
    //'QT-5',
    //'OpenGL',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    // 'Nest.js',
    'MySQL',
    'Git',
    'Docker',
    // 'PHPUnit',
    'CSS',
    // 'Antd',
    // 'Tailwind',
    'Bootstrap',
    'Java',
    'Photography'
  ],
  experiences: [
    {
      company: 'AIUB Computer Club',
      position: 'General Member',
      from: 'September 2022',
      to: 'Present',
    },
    {
      company: 'Willes Photography Club',
      position: 'Chief Executive',
      from: 'March 2021',
      to: 'September 2022',
    },
    {
      company: 'Mirza Saikat Ahmmed',
      position: 'Owner & Photographer',
      from: 'December 2018',
      to: 'Present',
    },
    {
      company: 'Fiver',
      position: 'Web Developer',
      from: 'December 2020',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: 'American International University-Bangladesh',
      degree: 'Bachelor of Computer Science and Engineering',
      from: '2022',
      to: '',
    },
    {
      institution: 'Willes Little Flower School and College',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Adarsha High School, Kaitola',
      degree: 'Secondary School Certificate (SSC)',
      from: '2014',
      to: '2019',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mirzasaikatahmmed',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-XTJQL7VC6J', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    // id: '2617601', //  Please remove this and use your own id or keep it empty
    // snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
