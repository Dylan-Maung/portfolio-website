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
        "teams allowing you to keep up with game schedules, win/loss records, standings, and more. Whether you're " +
        "binge watching the latest series or keeping up with your team's playoff run, BingeFlix brings " +
        "everything you love into one seamless experience."
      ],
      demo: [
        {
          media: "https://www.youtube.com/embed/WiLgSWHEQ1E?si=DQGsp4X8LLqn5s6c",
          alt: "Website Demo",
          caption: "Full feature walkthrough"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/bingeflix/watchlist.png`,
          alt: "Movies & Shows Watchlist",
          caption: "Unified watchlist aggregating content across Netflix, Hulu, Disney+, HBO Max, and more"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/bingeflix/sportsWatchlist.png`,
          alt: "Sports Watchlist",
          caption: "Sports tracking dashboard that allows you to keep up with team schedules, standings, and more"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/bingeflix/recommendations.png`,
          alt: "Movies & Shows Recommendations",
          caption: "AI-powered movie and show recommendations using ChatGPT based on watchlist preferences"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/bingeflix/featuredMedia.png`,
          alt: "Featured Media",
          caption: "Featured content carousel showcasing trending movies and shows (currently displaying curated selections)"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/bingeflix/architecture.jpg`,
          alt: "System Architecture",
          caption: "Full-stack architecture aggregating data from streaming APIs and sports sources via URL parameters"
        }
      ],
      features: [
        "Sign in with your Google account",
        "Works with Netflix, Hulu, Disney+, and more",
        "Save your favorite shows and movies",
        "Get personalized recommendations",
        "Track and keep up with your favorite sports teams"
      ],
      team: "Arin Gadre, Dylan Maung, Kahan Shah, Truman Vu",
      role: "Full Stack Developer",
      contributions: {
        responsibilities: "Developed key frontend features and contributed to API integration for BingeFlix, focusing on creating an intuitive " +
        "and seamless user experience. Collaborated with a team of 4 to deliver core features within a 3-month timeline.",

        accomplishments: [
          "Designed and implemented the login and landing page user interfaces using React and Tailwind CSS",
          "Developed and integrated API calls for data retrieval, submission, and updates to backend services",
          "Contributed to the development of sports watchlist functionality, enabling users to track their favorite teams",
          "Integrated and refined the movie recommendation feature that utilises the ChatGPT API, debugging edge cases and optimizing prompts for more relevant suggestions"
        ],
      },
      challengesSolutions: {
        challenges: [
          "Structuring user data in MongoDB to efficiently handle both media watchlists and " +
          "sports team tracking without sacrificing query performance.",

          "Prioritizing features and managing scope within agile sprint cycles to deliver an MVP on schedule"
        ],
        solutions: [
          "Collaborated with the team to design a flexible MongoDB schema that efficiently supported all " +
          "app features while maintaining intuitive data relationships",
          
          "Implemented agile best practices including daily standups for team alignment, pair programming " +
          "sessions to resolve technical blockers, and Jira ticket management to track progress and " +
          "prioritize critical tasks throughout the development cycle"
        ]
      },
      nextSteps: {
        introduction: 
          "While Bingeflix offers a comprehensive feature set that streamlines the user experience, " +
          "there are opportunities to enhance the platform further by providing real-time updates for " +
          "favorite media and expanding streaming service integrations",
        
        futureFeatures: [
          "Push notifications when new episodes drop for shows in your watchlist",
          "Full integration with sports streaming services to enable live game viewing",
          "Connect featured carousel to recommendation API for dynamic and trending content"
        ],
        
        impact: 
          "These enhancements will enable users to receive timely notifications when new episodes of " +
          "their favorite shows are released, while also providing direct access to streaming services that offer " +
          "live sports games rather than just viewing statistics and scores"
      }
    },
    {
      id: 2,
      title: "Wildfire Prediction Model",
      techStack: ["Pandas", "PyTorch", "Python"],
      description: "Machine learning model for proactive wildfire risk",
      fullDescription: [
        "Wildfires represent a significant natural disaster with devastating consequences for human communities, " +
        "wildlife habitats, and environmental ecosystems. Existing wildfire detection systems face critical limitations, " +
        "including delayed response times, operational inefficiencies, and high implementation costs that prevent " +
        "widespread adoption and effective early intervention.",
        
        "Our solution involved designing and training a custom Convolutional Neural Network (CNN) architecture from " +
        "the ground up to predict wildfire risk through satellite imagery analysis. Using a pre-labeled Kaggle dataset, " +
        "we trained the model to classify satellite images and assess wildfire probability.The project included " +
        "benchmarking against fine-tuned industry-standard models such as ResNet and VGG, with our custom " +
        "architecture demonstrating comparable performance while maintaining scalability for real-world deployment."
      ],
      features: [
        "Custom CNN architecture designed for satellite imagery analysis",
        "Trained on a labeled dataset with over 40,000 wildfire satellite images",
        "Wildfire risk prediction from satellite data",
        "Benchmarked against industry-standard models including ResNet and VGG",
        "Achieved 95% accuracy and 92% recall on the test set"
      ],
      demo: [
        {
          media: `${import.meta.env.BASE_URL}projects/wildfire/customModelResults.png`,
          alt: "CNN from Scratch Results & Architecture",
          caption: "CNN from scratch architecture achieving 95% accuracy and 92% recall on wildfire prediction test set"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/wildfire/benchmarkResults.png`,
          alt: "Benchmark Comparison",
          caption: "Performance comparison against fine-tuned ResNet, VGG, and other models demonstrating competitive results"
        }
      ],
      team: "Elton Zeng, Daniel Hong, Dylan Maung, Peter Lee, William Ho",
      role: "Model Training & Benchmarking Engineer",
      contributions: {
        responsibilities: "Collaborated with team to identify an impactful and underexplored machine learning application. " +
          "Led model training, fine-tuning, and benchmarking tasks to compare custom CNN performance against industry standards.",

        accomplishments: [
          "Trained custom CNN model achieving 95% accuracy on test set from 40,000+ satellite images",
          "Finetuned VGG-16 mnodel for performance benchmarking against custom architecture"
        ]
      },
      challengesSolutions: {
        challenges: [
          "Training dataset limited to Southern Quebec region, potentially introducing geographical bias and " +
          "reducing model generalization to other climates and terrain types",
          
          "Inherent difficulty in predicting wildfire risk from satellite imagery alone without additional " +
          "contextual data such as weather patterns, humidity levels, and vegetation dryness",
          
          "Limited access to high-performance computing resources (GPUs/TPUs), constraining training time and " +
          "ability to experiment with larger, more complex model architectures"
        ],
        solutions: [
          "Optimized the model architecture by balancing the number of layers to achieve competitive " +
          "performance while maintaining reasonable training times on available hardware",
          
          "Identified multimodal data integration (weather patterns, geographical features, and vegetation data) as a " +
          "key priority for future development to enhance the model's predictive capabilities and address the " +
          "limitations of satellite imagery alone",
          
          "Leveraged accessible computing resources including personal GPUs and Google Colab's free tier, " +
          "strategically scheduling training sessions to maximize available compute time within budget constraints"
        ]
      },
      nextSteps: {
        introduction: "The next phase of development focuses on expanding the model's capabilities and preparing " +
          "it for real-world deployment as part of wildfire early warning systems.",
        
        futureFeatures: [
          "Integrate multimodal data sources including weather patterns, geographical features, and vegetation data",
          "Expand training dataset to include diverse geographical regions for improved generalization",
          "Develop an interactive heat map visualization to display wildfire risk predictions geographically"
        ],
        
        impact: "These enhancements would enable the model to serve as a comprehensive early warning system, potentially " +
          "saving lives and preventing environmental devastation through faster, more accurate predictions."
      }
    },
    {
      id: 3,
      title: "Personal Portfolio",
      techStack: ["React", "Three.js", "GSAP", "Blender", "Tailwind CSS", "Vite"],
      description: "3D interactive portfolio with custom animations and Blender-modeled assets",
      fullDescription: [
        "A personal portfolio website designed to showcase my professional work experience, technical projects, and " +
        "development skills through an interactive and visually engaging UI. Rather than a static resume, this" +
        "portfolios incorporates custom 3D assets and immersive animations to create a memorable user experience.",
        
        "Built with modern web technologies, the portfolio features a custom 3D Orthrus Turtle model created from " +
        "scratch in Blender, interactive Three.js scenes that respond to user input, and smooth GSAP-powered animations " +
        "that guide visitors through my work. Each project has an in-depth breakdown, including demos, visual features, " +
        "and more."
      ],
      features: [
        "Interactive 3D models and animations",
        "GSAP ScrollTrigger animations throughout",
        "Developer bio and technical skills",
        "Work experience timeline",
        "Project showcases with demos",
        "Contact information including social links and resume"
      ],
      demo: [
        {
          media: "https://www.youtube.com/embed/PYbg6k8nICg?si=ty-MnXCkyP1X9vOH",
          alt: "Website Demo",
          caption: "Demonstration of my portfolio website showcasing custom Three.js 3D models, smooth " +
            "GSAP scroll animations, and interactive project presentations. Built from scratch with React and " +
            "modern web development tools"
        },
        {
          media: `${import.meta.env.BASE_URL}projects/portfolio/scene.png`,
          alt: "Three.js Scene",
          caption: "Three.js scene featuring custom 3D model created in Blender, particle effects, and dynamic mesh geometry"
        },
      ],
      team: null,
      role: "Frontend Developer & 3D Designer",
      contributions: {
        responsibilities: "Conceptualized and built a fully interactive portfolio website. Wireframed the " +
        "user experience flow and implemented an interactive frontend that showcases my technical projects, work experience, " +
        "and development skills. Iteratively refined the UI based on user feedback to create an intuitive, engaging interface.",

        accomplishments: [
          "Modeled a custom 3D Orthrus Turtle asset in Blender",
          "Implemented interactive 3D scenes using Three.js and React Three Fiber",
          "Designed user flows through wireframing and recruiter-focused user stories to guide portfolio navigation",
          "Crafted GSAP timeline animations and ScrollTrigger effects for smooth, engaging transitions"
        ]
      },
      challengesSolutions: {
        challenges: [
          "Learning new development tools from scratch, including Blender for 3D modeling, Three.js for interactive " +
          "scenes, and GSAP for complex animations.",

          "Designing and wireframing the site's visual layout and user experience to ensure intuitive navigation " +
          "and smooth transitions between sections while incorporating 3D assets and animations.",
        ],
        solutions: [
          "Watched comprehensive tutorials and completed follow-along projects to build foundational skills, " +
          "studied official documentation to understand core concepts, and experimented hands-on to " +
          "get familiar with each tool's capabilities and workflows.",

          "Used trial and error to refine layouts and interactions, brainstormed ideas that fit the site's theme, " +
          "and researched films, shows, and characters with similar aesthetics for visual inspiration.",
        ]
      },
      nextSteps: {
        introduction: "This portfolio will continue to evolve as I gain new experiences and explore modern web " +
          "technologies, serving as both a professional showcase and a creative outlet.",
        
        futureFeatures: [
          "Add more interactive 3D elements and animations throughout the site",
          "Add more projects as I build them"
        ],
        
        impact: "Beyond showcasing my work, this portfolio demonstrates my ability to blend technical skills with " +
          "creative vision, creating experiences that are both functional and memorable."
      }
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