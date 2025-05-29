document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Toggle Burger Animation
        burger.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('table.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const main = document.querySelector('main');
            const types = xmlDoc.getElementsByTagName('type');

            // Create a container for the table with the same styling
            const container = document.createElement('div');
            container.className = 'diseases-table';
            main.appendChild(container);

            // Process each type section
            Array.from(types).forEach(type => {
                const typeDiv = document.createElement('div');
                typeDiv.className = 'type-section';

                // Add the type name
                const nameElements = type.getElementsByTagName('name');
                if (nameElements.length > 0) {
                    const nameDiv = document.createElement('div');
                    nameDiv.className = 'type-name';
                    nameDiv.textContent = nameElements[0].textContent;
                    typeDiv.appendChild(nameDiv);
                }

                // Add diseases
                const diseases = type.getElementsByTagName('disease');
                Array.from(diseases).forEach(disease => {
                    const diseaseDiv = document.createElement('div');
                    diseaseDiv.className = 'disease-item';
                    diseaseDiv.textContent = disease.textContent;
                    typeDiv.appendChild(diseaseDiv);
                });

                container.appendChild(typeDiv);
            });
        })
        .catch(error => console.error('Error loading XML:', error));
}); 