"use strict";

// Project Data information from JSON file to HTML
fetch('lt-portfolio.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');

        data.projects.forEach(project => {
            // Create the card wrapper
            const projectCard = document.createElement('a');
            // projectCard.href = project.link;
            projectCard.classList.add('project-card', 'block', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition', 'transform', 'hover:scale-105');

            // Create inner card wrapper for flip effect
            const cardInner = document.createElement('div');
            cardInner.classList.add('project-card-inner');

            // Front side of the card (image + text)
            const cardFront = document.createElement('div');
            cardFront.classList.add('project-card-front');
            
            const projectImage = document.createElement('img');
            projectImage.src = project.image;
            projectImage.alt = project.title;
            projectImage.classList.add('w-full', 'h-48', 'object-cover', 'rounded-lg');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.title;
            projectTitle.classList.add('project-card-title');
            
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            projectDescription.classList.add('project-card-description');

            // Link button under the description on the front side
            const projectLink = document.createElement('div');
            projectLink.classList.add('project-card-link');
            const linkElement = document.createElement('a');
            linkElement.href = project.link;
            linkElement.textContent = 'Flip for more info';
            projectLink.appendChild(linkElement);

            // Add the image, title, description, and link to the front card
            cardFront.appendChild(projectImage);
            cardFront.appendChild(projectTitle);
            cardFront.appendChild(projectDescription);
            cardFront.appendChild(projectLink);

            // Back side of the card (about text)
            const cardBack = document.createElement('div');
            cardBack.classList.add('project-card-back');
            const projectAbout = document.createElement('p');
            projectAbout.textContent = project.about;
            projectAbout.classList.add('project-card-about');
            cardBack.appendChild(projectAbout);

            // Append the front and back to the card's inner container
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);

            // Append the inner card to the project card wrapper
            projectCard.appendChild(cardInner);

            // Append the project card to the container
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error

    ));

// Enhance socials buttons on hover
const icons = document.querySelectorAll('#socials i');

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transition = 'transform 0.2s ease-in-out';
    icon.style.transform = 'scale(1.4)';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transition = 'transform 0.2s ease-in-out';
    icon.style.transform = 'scale(1)';
  });
});

// Back to top button
const backToTopBtn = document.getElementById("backToTopBtn");


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show button
    } else {
        backToTopBtn.style.display = "none"; // Hide button
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};