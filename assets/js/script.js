
let urlApi = "http://localhost:5678/api";

// Affichage des works
function getWorks() {
    fetch(urlApi + "/works")
    .then(function (response) {
        return response.json();
    })
    .then(function (works) {
console.log(works);
        const gallery = document.querySelector("#gallery");
        gallery.innerHTML = "";
        for (let i in works) {
            //console.log(work.title, work.id);
            figure = createFigure(works[i]);
            gallery.appendChild(figure);
        }
    })
}

getWorks();

function getCategories() {
    fetch(urlApi + "/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (categories) {
        // Boucle sur les catégories
        const gallery = document.querySelector("#essai");


        // Faire ce bloc la
        // Création boutton "TOUS"
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
        
        // createButton(0, "Tous")
        // createButton(categories[i].id, categories[i].name)
        // function createButton(id, text)
        // let buttonContent = document.createTextNode(text);
        // buttonTous.dataset.categorie = id;


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

        }
            
})
}
getCategories();

// Création d'un titre
function createFigure(work) {
    // Création d'une image
    let image = document.createElement("img");
    image.src = work.imageUrl;
    image.alt = work.title;

    // création d'une figcaption
    let figcaption = document.createElement("figcaption");
    let figcaptionContent = document.createTextNode(work.title);
    figcaption.appendChild(figcaptionContent)
   
    // création d'une figure 
    let figure = document.createElement("figure");
    figure.appendChild(image);
    figure.appendChild(figcaption);

    return figure;
 }

// création fonction event listener
function eventListener() {
    const buttons = document.querySelectorAll("button");
console.log(buttons)
   // affichage de tout les boutons 
   buttons.forEach((button) => {
    button.addEventListener('click', () => {
    });
  });
}
eventListener();

// 
function getWorksByCategorie(id) {
    fetch(urlApi + "/works")
    .then(function (response) {
        return response.json();
    })
    .then(function (works) {
        const gallery = document.querySelector("#gallery");
        // vider la galerie + renseigner sur le innerHTML
      gallery.innerHTML = "";
        // Ajouter les autres éléments 
        for (let i in works) {
            // Si catégories egal 0 OU si catégorie egal works i
            if (id == 0 || id == works[i].categoryId) {    
                figure = createFigure(works[i]);
                gallery.appendChild(figure);
            }
        }
    }
)}

