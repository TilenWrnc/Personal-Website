const projects = [
  {
    title: "Sign Up Page",
    linkGit: "https://github.com/TilenWrnc/Sign-Up-Form-App",
    linkLive: "https://tilenwrnc.github.io/Sign-Up-Form-App/",
    image: "/images/Sign up form.png",
    description: "A sign up page built to practice HTML, CSS, and layout techniques. It includes a header, sections for content, and a call-to-action button, focusing on clean structure and responsive design."
  },
  {
    title: "Rock Paper Scissors",
    linkGit: "https://github.com/TilenWrnc/RockPaperScissors",
    linkLive: "https://tilenwrnc.github.io/RockPaperScissors/",
    image: "./images/RockPaperScissors.png",
    description: "A small JavaScript game where the player competes against the computer by choosing rock, paper, or scissors. It helped me practice conditionals, functions, and user interaction."
  },
  {
    title: "Etch A Sketch",
    linkGit: "https://github.com/TilenWrnc/EtchASketch",
    linkLive: "https://tilenwrnc.github.io/EtchASketch/",
    image: "/images/EtchASketch.png",
    description: "A drawing grid built with HTML, CSS, and JavaScript where users can 'draw' by hovering over squares. It was a fun way to learn DOM manipulation and event handling."
  },
  {
    title: "Calculator",
    linkGit: "https://github.com/TilenWrnc/Calculator",
    linkLive: "https://tilenwrnc.github.io/Calculator/",
    image: "./images/Calculator.png",
    description: "A basic calculator that performs simple math operations like addition, subtraction, multiplication, and division. Built to improve my skills in JavaScript logic and UI layout."
  },
  {
    title: "Library",
    linkGit: "https://github.com/TilenWrnc/Libary",
    linkLive: "https://tilenwrnc.github.io/Libary/",
    image: "./images/Library.png",
    description: "A small app to keep track of books with options to add, remove, and mark them as read. I built it using JavaScript and practiced working with objects, arrays, and dynamic DOM updates."
  },
  {
    title: "Tic Tac Toe",
    linkGit: "https://github.com/TilenWrnc/TicTacToe",
    linkLive: "https://tilenwrnc.github.io/TicTacToe/",
    image: "./images/TicTacToe.png",
    description: "A two-player game where players take turns marking X or O on a 3×3 grid. This project helped me learn about game logic, conditionals, and managing state in JavaScript."
  },
  {
    title: "Weather App",
    linkGit: "https://github.com/TilenWrnc/WeatherApp",
    linkLive: "https://tilenwrnc.github.io/WeatherApp/",
    image: "./images/WeatherApp.png",
    description: "An app that shows the current weather for any city using a weather API. It taught me how to work with APIs, fetch data, and display it dynamically with JavaScript."
  },
  {
    title: "BattleShip",
    linkGit: "https://github.com/TilenWrnc/BattleShip",
    linkLive: "https://tilenwrnc.github.io/BattleShip/",
    image: "./images/BattleShip.png",
    description: "A basic version of the classic game where the player tries to sink the computer's ships. This project helped me understand more complex logic, grid systems, and handling user interaction."
  },
  {
    title: "Memory Game",
    linkGit: "https://github.com/TilenWrnc/MemoryGame",
    linkLive: "https://memory-game-ten-ashy.vercel.app/",
    image: "./images/MemoryGame.png",
    description: "A classic card-matching memory game developed using React. Used hooks for state management and implemented game logic to track matches, moves, and win conditions. Focused on user interaction, simple animations, and modular component structure."
  },
  {
    title: "Shopping Cart",
    linkGit: "https://github.com/TilenWrnc/ShoppingCart",
    linkLive: "https://shopping-cart-liard-sigma.vercel.app/",
    image: "./images/ShoppingCart.png",
    description: "A dynamic online shop built with React, featuring product browsing, cart management, and quantity updates. Utilized React Router for navigation and state management to track items across pages. Focused on creating a responsive and user-friendly interface with real-time cart updates."
  },
  {
    title: "Trello Clone",
    linkGit: "https://github.com/TilenWrnc/trello-clone",
    linkLive: "",
    image: "./images/TrelloClone.png",
    description: "A full-stack project management web app built with Next.js, PostgreSQL, and BetterAutgh for authentication. Users can create boards, add lists and cards, and organize tasks in a kanban-style interface. The app features drag-and-drop functionality, real-time updates, and secure user authentication, demonstrating modern web development practices with server-side rendering, API routes, and responsive design."
  },
  {
    title: "The Odin Book",
    linkGit: "https://github.com/TilenWrnc/the-odin-book-remastered",
    linkLive: "/",
    image: "./images/TheOdinBook.png",
    description: "A full-stack social media application built with Next.js, PostgreSQL, and Clerk for authentication. Users can create accounts, log in securely, and share posts in a familiar social media interface. The app features real-time data fetching, a responsive design, and a clean user experience, showcasing modern web development practices with server-side rendering, API routes, and secure user authentication."
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".project-container");

  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.classList.add("fade-in-section");

    projectDiv.innerHTML = `
        <div class="project-card-intro">
          <h2 class="project-title">${project.title}</h2>
          <div class="links">
            <a href="${project.linkLive}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg></a>
            <a href="${project.linkGit}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
          </div>
        </div>
      <div class="project-main">
        <img src="${project.image}" class="project-pic" alt="${project.title}">
        <p class="project-description">${project.description}</p>
      </div>
    `;

    container.appendChild(projectDiv);
  });


  // ANIMATION FADE IN

  const elements = document.querySelectorAll('.fade-in-section, .personal-pic, .about-me');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});



