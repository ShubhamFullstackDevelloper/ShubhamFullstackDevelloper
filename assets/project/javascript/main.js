// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.getElementById("projectGrid");

    // Array of projects (You can fetch from API in the future)
    const projects = [
        { title: "HTML Project", category: "web", img: "assets/image/html.png", link: "assets/project/html/html_project.html" },
        { title: "CSS Project", category: "game", img: "assets/image/css-3.svg", link: "css_project.html" },
        { title: "JavaScript Project", category: "design", img: "assets/image/js.png", link: "js_project.html" },
        { title: "React Project", category: "web", img: "assets/image/reactpng.png", link: "#" },
        { title: "Manual Testing", category: "game", img: "assets/image/manualtest.png", link: "#" },
        { title: "Node.js Project", category: "design", img: "assets/image/Node.js_logo.svg", link: "#" }
    ];

    // Function to generate project cards dynamically
    function loadProjects() {
        projectGrid.innerHTML = ""; // Clear previous projects
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = `project__card mix ${project.category}`;
            projectCard.innerHTML = `
                <a href="${project.link}" target="_blank">
                    <img src="${project.img}" alt="${project.title}">
                </a>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    // Load Projects
    loadProjects();

    // Initialize MixItUp for filtering
    var mixer = mixitup(".project__grid", {
        selectors: {
            target: ".project__card"
        },
        animation: {
            duration: 300
        }
    });
});
