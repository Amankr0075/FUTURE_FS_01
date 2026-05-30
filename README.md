<<<<<<< HEAD
# 🚀 Aman Kumar - Personal Portfolio Website

![Portfolio Preview](./public/preview.png)

A **modern, professional, fully responsive** personal portfolio website built with **React.js + Vite**, featuring:
- 🌙 Dark/Light mode toggle
- ⌨️ Typing text animation
- ✨ Smooth scroll animations
- 📱 Fully mobile responsive
- ⚡ Fast & SEO optimized
- 🎨 Glassmorphism design

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React.js 19 + Vite 8 |
| **Styling** | Vanilla CSS with CSS Custom Properties |
| **Animations** | CSS Animations + Intersection Observer |
| **Icons** | Emojis (no external dependencies) |
| **Contact** | Web3Forms API |
| **Deployment** | GitHub Pages |

## 📁 Project Structure

```
Portfolio_/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Resume.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── LoadingScreen.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/amankumar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

## ⚙️ Customization

### 1. Personal Information
Update your details in each component under `src/components/`:
- `Hero.jsx` — Name, title, description
- `About.jsx` — Bio and highlights
- `Projects.jsx` — Add/edit projects
- `Contact.jsx` — Email, LinkedIn, GitHub links
- `Footer.jsx` — Social media links

### 2. Contact Form (Web3Forms)
1. Go to [web3forms.com](https://web3forms.com)
2. Create a free account and get your Access Key
3. In `Contact.jsx`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key:
   ```js
   const WEB3FORMS_KEY = 'your-actual-access-key';
   ```

### 3. Resume
Place your resume PDF at `public/resume.pdf` — the Download button will automatically work.

### 4. Colors & Theme
The entire design system is in `src/index.css` under the `:root` CSS variables. Easily change:
- `--accent-primary` — Main purple color
- `--accent-secondary` — Pink accent
- `--gradient-primary` — Primary gradient

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Update vite.config.js base to your repo name
# base: '/your-repo-name/'

# Deploy
npm run deploy
```

### Deploy to Vercel/Netlify
Simply connect your GitHub repository to Vercel or Netlify for automatic deployments.

## 🎨 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated greeting with typing effect and stats |
| **About** | Personal intro with highlights |
| **Skills** | Categorized tech skills with proficiency bars |
| **Projects** | Project cards with GitHub & demo links |
| **Education** | Timeline layout |
| **Resume** | Download section with highlights |
| **Certifications** | Certificate cards with status |
| **Achievements** | Accomplishment cards |
| **Contact** | Contact form + social links |

## 📧 Contact

**Aman Kumar**  
📧 amankumar@email.com  
💼 [LinkedIn](https://linkedin.com/in/amankumar)  
🐙 [GitHub](https://github.com/amankumar)

---

> *Built with ❤️ by Aman Kumar — © 2026*
=======
# FUTURE_FS_01
>>>>>>> 7c7f09a5a547891572f13e5ac75393484999ea64
