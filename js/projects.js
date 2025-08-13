const projects = [
    {
        title: 'Bigstone Sandbox',
        description: 'A datapack for building contraptions with Bigstone Components without needing to install mods!',
        technologies: ['Datapack', 'Resource Pack', 'NodeJS (For scripts)'],
        imageUrl: '/assets/project_thumbnails/bigstone_sandbox.png',
        link: 'https://sandbox.bigstone.dev'
    },
    {
        title: 'Bigstone Wiki',
        description: 'A wiki for Bigstone Sandbox and Bigstone port standards.',
        technologies: ['Markdown', 'Jekyll'],
        imageUrl: '/assets/project_thumbnails/bigstone_wiki.png',
        link: 'https://wiki.bigstone.dev'
    },
    {
        title: 'Bigstone Sandbox Website',
        description: 'A place to find and upload bigstone components. It interacts with the datapack for importing and exporting!',
        technologies: ['EJS', 'CSS', 'JS', "NodeJS"],
        imageUrl: '/assets/logo.png',
        link: 'https://sandbox.bigstone.dev'
    }
];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.addEventListener('click', () => {
        window.location.href = project.link;
    });

    const imageElement = document.createElement('img');
    imageElement.src = project.imageUrl;
    imageElement.draggable = false;
    projectElement.appendChild(imageElement);

    const metaElement = document.createElement('div');
    metaElement.className = 'project-meta';
    projectElement.appendChild(metaElement);

    const topElement = document.createElement('div');
    topElement.className = 'project-top';
    metaElement.appendChild(topElement);

    const titleElement = document.createElement('a');
    titleElement.className = 'project-title';
    titleElement.textContent = project.title;
    topElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'project-description';
    descriptionElement.textContent = project.description;
    topElement.appendChild(descriptionElement);

    const techElement = document.createElement('p');
    techElement.className = 'project-technologies';
    project.technologies.forEach(tech => {
        techElement.textContent += `${tech}, `;
    });
    techElement.textContent = techElement.textContent.slice(0, -2);
    metaElement.appendChild(techElement);

    document.querySelector("main .projects").appendChild(projectElement);
});
