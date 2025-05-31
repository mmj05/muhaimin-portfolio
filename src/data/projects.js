import { Sparkles, Layers, Globe } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: "Library Store",
    subtitle: "Full-Stack Library Management System",
    description: "Designed and implemented a user-centric, full-stack library system utilizing React, TypeScript, Spring Boot, PostgreSQL, and Okta authentication.",
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Okta", "Stripe API"],
    features: [
      "Comprehensive solution optimizing book selection and borrowing process",
      "Integrated Stripe API for streamlined checkout process",
      "Efficient communication system between users and administrators"
    ],
    github: "https://github.com/mmj05",
    live: "https://library-app-pearl.vercel.app/home",
    gradient: "from-blue-600 to-cyan-600",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Jamming",
    subtitle: "Spotify-Integrated Playlist Creator",
    description: "Interactive web application built using React where users can search for songs by title, artist, or album name, thanks to seamless Spotify API integration.",
    tech: ["React", "JavaScript", "Spotify API", "CSS3", "HTML5"],
    features: [
      "Search functionality for songs by title, artist, or album",
      "Create personalized playlists from search results",
      "Seamless integration with Spotify Web API"
    ],
    github: "https://github.com/mmj05/jamming",
    live: "https://jamming-mamming.netlify.app/",
    gradient: "from-green-600 to-emerald-600",
    icon: Layers
  },
  {
    id: 3,
    title: "Recipe Search App",
    subtitle: "Multi-API Recipe Discovery Platform",
    description: "Application empowering users to effortlessly search for recipes by dish name or available ingredients, simplifying meal planning.",
    tech: ["jQuery", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Search recipes by dish name or available ingredients",
      "Seamlessly melds data from two disparate APIs",
      "Comprehensive and diverse recipe library"
    ],
    github: "https://github.com/mmj05/recipe-search-app",
    live: "https://mmj05.github.io/recipe-search-app/",
    gradient: "from-purple-600 to-pink-600",
    icon: Globe
  }
];