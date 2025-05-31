# 🚀 Muhaimin Jobayer - Portfolio Website

A modern, responsive portfolio website built with **Vite + React + Tailwind CSS**, showcasing my skills, projects, and experience as a Full-Stack Software Engineer.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with dark theme
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - CSS animations and Lucide React icons
- 📧 **Contact Form** - Integrated with Formspree for seamless communication
- 🌟 **Interactive Elements** - Hover effects, particle background, gradient overlays
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies
- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.511.0
- **Forms**: Formspree React 3.0.0

### Development Tools
- **PostCSS**: For CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting
- **Hot Module Replacement**: Instant updates during development

## 📦 Installation & Setup

### Prerequisites
- **Node.js** v16 or higher
- **npm**, **yarn**, or **pnpm**

### Quick Start

1. **Clone or create the project**
   ```bash
   # Option 1: Create new Vite project
   npm create vite@latest muhaimin-portfolio -- --template react
   cd muhaimin-portfolio
   
   # Option 2: Clone this repository
   git clone <repository-url>
   cd muhaimin-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   
   # Install additional packages
   npm install @formspree/react lucide-react
   npm install -D tailwindcss postcss autoprefixer
   
   # Initialize Tailwind CSS
   npx tailwindcss init -p
   ```

3. **Replace default files**
   - Copy all provided source files to their respective locations
   - Ensure file structure matches the project organization below

4. **Add your assets**
   ```bash
   # Add your profile picture
   public/profile-picture.jpg
   
   # Add your resume (optional)
   public/resume.pdf
   ```

5. **Configure Formspree (optional)**
   - Sign up at [formspree.io](https://formspree.io/)
   - Get your form endpoint ID
   - Replace `"mvowwkry"` in `ContactForm.jsx` with your form ID

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Build for production**
   ```bash
   npm run build
   npm run preview  # Preview production build locally
   ```

## 📁 Project Structure

```
muhaimin-portfolio/
├── public/
│   ├── profile-picture.jpg     # Your profile photo
│   ├── resume.pdf             # Your resume (optional)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   └── AboutSection.jsx
│   │   ├── Contact/
│   │   │   ├── ContactSection.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Hero/
│   │   │   └── HeroSection.jsx
│   │   ├── Navigation/
│   │   │   └── Navigation.jsx
│   │   ├── Projects/
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Skills/
│   │   │   ├── SkillsSection.jsx
│   │   │   └── SkillGroup.jsx
│   │   └── common/
│   │       ├── BackgroundParticles.jsx
│   │       └── LoadingScreen.jsx
│   ├── data/
│   │   ├── projects.js         # Your projects data
│   │   └── skills.js          # Your skills data
│   ├── styles/
│   │   ├── globals.css        # Global styles
│   │   └── animations.css     # Animation definitions
│   ├── App.jsx               # Main app component
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json            # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization Guide

### Personal Information
1. **Update Projects** - Edit `src/data/projects.js`
   ```javascript
   // Add your own projects with live demos and GitHub links
   {
     title: "Your Project",
     subtitle: "Project Description",
     tech: ["React", "Node.js"],
     github: "https://github.com/yourusername/project",
     live: "https://yourproject.com"
   }
   ```

2. **Update Skills** - Edit `src/data/skills.js`
   ```javascript
   // Customize your skill categories and items
   {
     category: "Frontend",
     items: ["React", "JavaScript", "CSS"],
     color: "from-blue-500 to-cyan-500"
   }
   ```

3. **Update Social Links** - Update URLs in components:
   - GitHub: `https://github.com/mmj05` → `https://github.com/yourusername`
   - LinkedIn: `https://www.linkedin.com/in/muhaimin-jobayer` → `https://www.linkedin.com/in/yourprofile`

### Styling & Theme
- **Colors**: Modify gradient colors in components
- **Fonts**: Update font imports in `globals.css`
- **Animations**: Customize animations in `animations.css`
- **Layout**: Adjust responsive breakpoints in Tailwind classes

### Contact Form
- **Formspree**: Replace form ID in `ContactForm.jsx`
- **Alternative**: Implement your own backend API
- **Email Services**: Use EmailJS, Netlify Forms, or similar

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm run build
```
- Connect your GitHub repository to Vercel
- Automatic deployments on push to main branch

### Netlify
```bash
npm run build
```
- Drag and drop the `dist` folder to Netlify
- Or connect via Git for continuous deployment

### GitHub Pages
```bash
npm run build
```
- Use GitHub Actions to deploy the `dist` folder

### Other Platforms
- **Railway**: Direct Git deployment
- **Surge**: `npm install -g surge && surge dist`
- **Firebase Hosting**: `firebase deploy`

## ⚡ Performance Features

- **Vite HMR**: Instant hot module replacement
- **Code Splitting**: Automatic bundle optimization
- **Asset Optimization**: Image and CSS minification
- **Tree Shaking**: Remove unused code
- **Modern ES Modules**: Faster loading and execution

## 📊 Performance Metrics

- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Largest Contentful Paint**: < 2.5s
- 📱 **Mobile PageSpeed Score**: 90+
- 💻 **Desktop PageSpeed Score**: 95+

## 🛡️ Browser Support

- ✅ **Chrome** 88+
- ✅ **Firefox** 85+
- ✅ **Safari** 14+
- ✅ **Edge** 88+

## 🤝 Contributing

Found a bug or want to improve something? Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

If you have questions or need help customizing the portfolio:

- 📧 **Email**: muhaimin.jobayer@example.com
- 💼 **LinkedIn**: [Muhaimin Jobayer](https://www.linkedin.com/in/muhaimin-jobayer)
- 🐙 **GitHub**: [mmj05](https://github.com/mmj05)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using Vite + React + Tailwind CSS**

⭐ **Star this repo if it helped you build your portfolio!** ⭐

</div>