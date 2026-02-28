# PICT NSS Unit Website

A  beautiful, modern React website for the National Service Scheme (NSS) unit at PICT. Built with React 18, React Router, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux (Ubuntu/Debian)](#linux-ubuntudebian)
  - [Linux (Fedora/RHEL)](#linux-fedorarhel)
  - [Linux (Arch)](#linux-arch)
- [Running the Project](#-running-the-project)
- [Building for Production](#-building-for-production)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## ✨ Features

- 🏠 **Home Page** - Hero carousel, featured activities, and quick links
- 📚 **Activities** - Year-wise activity listings with detailed pages
- 🏕️ **NSS Camps** - Camp overviews with day-wise schedules, testimonials, galleries, and activity details
- 📖 **Magazine** - Digital magazine viewer
- 🖼️ **Gallery** - Masonry photo gallery with lightbox
- 👥 **Team** - Team member profiles and roles
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Smooth animations, shadows, and transitions

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| React Router DOM | 6.20.0 | Client-side routing |
| Tailwind CSS | 3.3.5 | Utility-first CSS |
| PostCSS | 8.4.31 | CSS processing |
| Autoprefixer | 10.4.16 | CSS vendor prefixes |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

| Software | Minimum Version | Recommended Version | Download Link |
|----------|-----------------|---------------------|---------------|
| Node.js | 16.x | 18.x or 20.x (LTS) | [nodejs.org](https://nodejs.org/) |
| npm | 8.x | 9.x or 10.x | Comes with Node.js |
| Git | 2.x | Latest | [git-scm.com](https://git-scm.com/) |

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## 🚀 Installation

### Windows

#### Option 1: Using Windows Installer (Recommended for Beginners)

1. **Install Node.js**
   - Download the LTS version from [nodejs.org](https://nodejs.org/)
   - Run the installer (`.msi` file)
   - Follow the installation wizard (keep default settings)
   - Restart your terminal/command prompt

2. **Install Git**
   - Download from [git-scm.com](https://git-scm.com/download/win)
   - Run the installer
   - Use default settings (or customize as needed)

3. **Clone and Setup Project**
   ```cmd
   # Open Command Prompt or PowerShell
   
   # Clone the repository
   git clone https://github.com/your-username/pict-nss-unit.git
   
   # Navigate to project directory
   cd pict-nss-unit
   
   # Install dependencies
   npm install
   ```

#### Option 2: Using Chocolatey (Package Manager)

```powershell
# Install Chocolatey (Run PowerShell as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js and Git
choco install nodejs-lts git -y

# Restart PowerShell, then clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

#### Option 3: Using winget (Windows Package Manager)

```powershell
# Install Node.js
winget install OpenJS.NodeJS.LTS

# Install Git
winget install Git.Git

# Restart terminal, then clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

---

### macOS

#### Option 1: Using Homebrew (Recommended)

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js and Git
brew install node git

# Clone the repository
git clone https://github.com/your-username/pict-nss-unit.git

# Navigate to project directory
cd pict-nss-unit

# Install dependencies
npm install
```

#### Option 2: Using Official Installers

1. **Install Node.js**
   - Download macOS installer from [nodejs.org](https://nodejs.org/)
   - Open the `.pkg` file and follow instructions

2. **Install Git**
   - Git comes pre-installed on macOS
   - Or install via Xcode Command Line Tools: `xcode-select --install`

3. **Clone and Setup**
   ```bash
   git clone https://github.com/your-username/pict-nss-unit.git
   cd pict-nss-unit
   npm install
   ```

#### Option 3: Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run
source ~/.zshrc  # or ~/.bashrc

# Install Node.js LTS
nvm install --lts
nvm use --lts

# Clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

---

### Linux (Ubuntu/Debian)

#### Option 1: Using NodeSource Repository (Recommended)

```bash
# Update package list
sudo apt update

# Install curl if not present
sudo apt install -y curl

# Add NodeSource repository (Node.js 20.x LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js and Git
sudo apt install -y nodejs git

# Verify installation
node --version
npm --version

# Clone the repository
git clone https://github.com/your-username/pict-nss-unit.git

# Navigate to project directory
cd pict-nss-unit

# Install dependencies
npm install
```

#### Option 2: Using Snap

```bash
# Install Node.js via Snap
sudo snap install node --classic

# Install Git
sudo apt install -y git

# Clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

#### Option 3: Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run
source ~/.bashrc

# Install Node.js LTS
nvm install --lts

# Install Git
sudo apt install -y git

# Clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

---

### Linux (Fedora/RHEL)

```bash
# Install Node.js (Fedora 37+)
sudo dnf install -y nodejs npm

# Or for RHEL/CentOS, use NodeSource
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Install Git
sudo dnf install -y git

# Clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

---

### Linux (Arch)

```bash
# Install Node.js, npm, and Git
sudo pacman -S nodejs npm git

# Clone and setup
git clone https://github.com/your-username/pict-nss-unit.git
cd pict-nss-unit
npm install
```

---

## ▶️ Running the Project

### Development Server

```bash
# Start the development server
npm start
```

This will:
- Start the development server on `http://localhost:3000`
- Open your default browser automatically
- Enable hot-reloading (changes reflect instantly)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (irreversible) |

---

## 📦 Building for Production

```bash
# Create optimized production build
npm run build
```

This creates a `build/` folder with:
- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Ready for deployment

### Deploying the Build

#### Static Hosting (Netlify, Vercel, GitHub Pages)

```bash
# The build folder can be deployed directly
# For GitHub Pages, you might need:
npm install -g serve
serve -s build
```

#### Traditional Server (Apache/Nginx)

Copy the contents of `build/` folder to your web server's root directory.

**Nginx Configuration Example:**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/pict-nss/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📁 Project Structure

```
pict-nss-unit/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ActivityCard.jsx
│   │   ├── Carousel.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Footer.jsx
│   │   ├── Lightbox.jsx
│   │   ├── MagazineViewer.jsx
│   │   ├── MasonryGallery.jsx
│   │   ├── Navbar.jsx
│   │   └── TeamCard.jsx
│   ├── data/               # Static data files
│   │   ├── activities.js
│   │   ├── camps.js
│   │   ├── gallery.js
│   │   ├── magazine.js
│   │   └── team.js
│   ├── pages/              # Page components
│   │   ├── Activities.jsx
│   │   ├── ActivityDetails.jsx
│   │   ├── ActivityYear.jsx
│   │   ├── CampActivityDetails.jsx
│   │   ├── CampDetails.jsx
│   │   ├── Camps.jsx
│   │   ├── CampYear.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Magazine.jsx
│   │   └── Team.jsx
│   ├── styles/             # Global styles
│   │   ├── animations.css
│   │   └── globals.css
│   ├── App.jsx             # Main app with routing
│   └── index.js            # Entry point
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

---

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: "#C8F3D2",      // Light Green (background accents)
  secondary: "#1A744A",    // Deep Green (buttons, links)
  white: "#FFFFFF",
  softGrey: "#F6F6F6",     // Background color
  textDark: "#1A1A1A",     // Text color
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Adding Data

Edit the files in `src/data/` to add:
- Activities (`activities.js`)
- Camps (`camps.js`)
- Gallery images (`gallery.js`)
- Team members (`team.js`)
- Magazine content (`magazine.js`)

---

## 🔧 Troubleshooting

### Common Issues

#### 1. `npm install` fails with permission errors

**Linux/macOS:**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
Run Command Prompt/PowerShell as Administrator.

#### 2. Port 3000 already in use

```bash
# Find and kill the process (Linux/macOS)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

**Windows:**
```cmd
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### 3. Node version compatibility issues

```bash
# Use nvm to switch Node versions
nvm install 18
nvm use 18
```

#### 4. Tailwind CSS not working

Make sure your CSS files include Tailwind directives:

```css
/* In src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 5. Blank page after build

For deployment to subdirectories, add to `package.json`:
```json
"homepage": "/your-subdirectory"
```

#### 6. Images not loading

- Check that image paths are correct
- For public folder images, use absolute paths: `/images/photo.jpg`
- For src folder images, import them: `import image from './image.jpg'`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [Issues](https://github.com/your-username/pict-nss-unit/issues)
3. Create a new issue with detailed information

---

<div align="center">
  <p>Made with ❤️ by PICT NSS Unit</p>
  <p>
    <a href="https://github.com/your-username/pict-nss-unit">⭐ Star this repo</a>
  </p>
</div>
