console.log(categories);
        const gallery = document.querySelector("#essai");
        for (let i in categories) {
            //Création d'un button
            let button = document.createElement("button");
            let buttonContent = document.createTextNode(categories[i].name);
            button.appendChild(buttonContent);
            // Ajouter une classe à un élément
            button.classList.add("button");
            console.log(button);
            // Attacher au dom
                // Trouver un point de montage
                const categoriesDiv = document.querySelector("#categories");
                // Ajouter l'élément au point de montage
                categoriesDiv.appendChild(button);
            //console.log(category.title, category.id);
            // gallery.appendChild(figure);
        }







        
        let buttonTous = document.createElement("button");
        buttonTous.dataset.categorie = 0;
        let buttonTousContent = document.createTextNode("Tous");
        buttonTous.appendChild(buttonTousContent);
        buttonTous.classList.add("button")
        const categoriesDiv = document.querySelector("#categories")
        buttonTous.addEventListener('click', (e) => {
            // récupérer l'id de la catégorie
            console.log(e.target.getAttribute("data-categorie"));
            getWorksByCategorie(e.target.getAttribute("data-categorie"));
        });
        categoriesDiv.appendChild(buttonTous);


        // Création des autres bouttons
        for (let i in categories) {
             // Créer bouton
             let button = document.createElement("button");
             // Rajouter un dataset au bouton 
             button.dataset.categorie = categories[i].id;
             let buttonContent = document.createTextNode(categories[i].name);
             button.appendChild(buttonContent);
                // Ajouter class 
                button.classList.add("button")
                console.log(button);
                // ajouter un event listener
            button.addEventListener('click', (e) => {
                // récupérer l'id de la catégorie
                console.log(e.target.getAttribute("data-categorie"));
                getWorksByCategorie(e.target.getAttribute("data-categorie"));
              });
              // Ajouter bouton au point de montage
            categoriesDiv.appendChild(button);