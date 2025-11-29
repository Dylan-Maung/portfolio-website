export const NAV_ITEMS = ["About", "Projects", "Experience", "Contact"]

 export const PROJECT_LIST = [
    {
      id: 1,
      title: "BingeFlix",
      techStack: ["Express.js", "HTML", "MongoDB", "Node.js", "React", "Tailwind CSS"],
      description: "Unified streaming search platform",
      fullDescription: [
        "In today's fragmented digital entertainment landscape, consumers struggle to locate shows across multiple " +
        "streaming platforms, leading to frustration and decision fatigue. BingeFlix solves this by aggregating content " +
        "from all major streaming services into a single, unified platform.",
        
        "Users can maintain a personalized watchlist and receive tailored content recommendations based on their viewing " +
        "preferences and watch history. For sports enthusiasts, BingeFlix offers a dedicated feature to track favorite " +
        "teams allowing you to keep up with game schedules, win/loss records, standings, and more.",

        "Whether you're binge watching the latest series or keeping up with your team's playoff run, BingeFlix brings " +
        "everything you love into one seamless experience."
      ],
      demo: [`${import.meta.env.BASE_URL}/projects/bingeflix/architecture.jpg`],
      features: [
        "Sign in with your Google account",
        "Works with Netflix, Hulu, Disney+, and more",
        "Save your favorite shows and movies",
        "Get personalized recommendations",
        "Track and keep up with your favorite sports teams"
      ],
      team: ["Arin Gadre", "Dylan Maung", "Kahan Shah", "Truman Vu",],
      role: "Full Stack Developer",
      contributions: [
        "Designed and implemented the login and landing page user interfaces",
        "Developed and integrated API calls for data retrieval, submission, and updates to backend services",
        "Contributed to the development of sports watchlist functionality and a movie recommendation feature"
      ],
      challenges: [
        "Structuring user data in MongoDB to efficiently handle both media watchlists and sports team tracking without sacrificing query performance.",
        "Prioritizing features and managing scope within agile sprint cycles to deliver an MVP on schedule"
      ],
      nextSteps: [
        "Push notifications when new episodes drop for shows in your watchlist",
        "Full integration with sports streaming services",
      ],
    },
    {
      id: 2,
      title: "Wildfire Prediction Model",
      techStack: ["Pandas", "PyTorch", "Python"],
      description: "Machine learning model for proactive wildfire risk",
      fullDescription: [],
      demo: [],
      team: [],
      role: " ",
      challenges: [

      ],
      nextSteps: [],
    },
    {
      id: 3,
      title: "Personal Portfolio",
      techStack: ["React", "Three.js", "GSAP", "Blender", "Tailwind CSS"],
      description: "3D interactive portfolio with custom animations and Blender-modeled assets",
      fullDescription: [],
      demo: [],
      team: [],
      role: " ",
      challenges: " ",
      nextSteps: [],
    }
  ]

  export const EXPERIENCE_LIST = [
    {
      id: 1,
      jobTitle: "Software Engineer Intern",
      company: "SMount HealthTech",
      type: "Internship",
      location: "San Jose, California, United States",
      startYear: 2024,
      startMonth: 11,
      endYear: null,
      endMonth: null,
      description: [
        "Developed front end for core administrative functionality of a patient-centric healthcare management mobile app, improving operational efficiency for healthcare administrators overseeing patient care",
        "Designed and integrated an intuitive user interface, enhancing workflow efficiency for healthcare administrators",
        "Integrating front end with backend services to support a responsive and scalable user experience"
      ],
    },
    {
      id: 2,
      jobTitle: "Data Scientist Intern",
      company: "Rimini Street",
      type: "Internship",
      location: "Santa Cruz, California, United States",
      startYear: 2024,
      startMonth: 9,
      endYear: 2024,
      endMonth: 12,
      description: [
        "Quarter-long industry project with Rimini Street through the UCSC Senior Capstone Course",
        "Enhanced predictive performance of existing sales opportunity model (Columbo 1.0) by optimizing text vectorization and engineering additional features",
        "Improved predictive precision by 12% and recall by 10% for Won outcomes, while significantly boosting precision by 48% and recall by 52% for Loss outcomes, resulting in an overall accuracy improvement of 18%"
      ],
    },
    {
      id: 3,
      jobTitle: "Course Reader",
      company: "University of California Santa Cruz",
      type: "Part-time",
      location: "Santa Cruz, California, United States",
      startYear: 2024,
      startMonth: 1,
      endYear: 2024,
      endMonth: 3,
      description: [
        "Graded and provided feedback on labs, pre-labs, and homework assignments for the CSE 100 Logic Design Course",
        "Communicated with peer graders and professor to distribute work and set deadlines"
      ],
    },
    {
      id: 4,
      jobTitle: "Administrative Assistant",
      company: "Elite Educational Institute",
      type: "Part-time",
      location: "San Francisco, California, United States",
      startYear: 2019,
      startMonth: 12,
      endYear: 2021,
      endMonth: 9,
      description: [
        "Prepared test prep materials and curriculum for both student and instructors",
        "Organized and coordinated office calendar and schedule with instructors, director, and other office associates",
        "Stepped up to independently manage office on management's behalf when needed, including handling billing and proctoring tests"
      ],
    },
    {
      id: 5,
      jobTitle: "High School Explainer",
      company: "Exploratorium",
      type: "Part-time",
      location: "San Francisco, California, United States",
      startYear: 2019,
      startMonth: 6,
      endYear: 2019,
      endMonth: 8,
      description: [
        "Supervised galleries and participated in staff training and team building exercises on scientific topics",
        "Led regular dissections and demonstrations on a variety of scientific topics to crowds of over 15 people"
      ],
    }

  ]