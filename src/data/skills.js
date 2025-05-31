import { Code, Server, Database, Terminal } from 'lucide-react';

export const skillsData = [
  { 
    category: "Front End", 
    icon: Code, 
    items: ["React", "Redux", "HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery"], 
    color: "from-blue-500 to-cyan-500" 
  },
  { 
    category: "Back End", 
    icon: Server, 
    items: ["Java", "Spring Boot", "SQL", "PostgreSQL", "Node.js", "Express.js", "MySQL"], 
    color: "from-purple-500 to-pink-500" 
  },
  { 
    category: "Additional Skills", 
    icon: Database, 
    items: ["Unit Testing", "RESTful APIs", "Git", "Docker", "GitHub"], 
    color: "from-green-500 to-emerald-500" 
  },
  { 
    category: "Learning", 
    icon: Terminal, 
    items: ["Cloud Services", "Microservices", "CI/CD", "System Design", "Data Structures"], 
    color: "from-orange-500 to-red-500" 
  }
];