

document.addEventListener("DOMContentLoaded", () => {
    const page_acceuil = document.querySelector('.page-acceuil');
    const page_principal = document.querySelector('.page-principale');
    const page_visualisation = document.querySelector('.page-visualisation');

    const btn_acces_principale = document.querySelector('.btn-acces');

    //Fermer la page d'acceuil pour ouvrir celle principale:
    btn_acces_principale.addEventListener('click',() => {
        page_acceuil.style.display = 'none';
        page_principal.style.display='block';
    })

    //Récupérons les données du formulaire
    const button_form = document.querySelector('.form-button');
    button_form.addEventListener('click',()=>{
        const formulaire = document.querySelector('form');
        const formData = new FormData(formulaire);
        const titre = formData.get('titre');
        const logo = formData.get('logo-user');
        const categorie = formData.get('category');
        const contenu = formData.get('contenu');
        const fond = formData.get('background');

        //Basculons vers la page de visualisation:
        if (titre || logo|| categorie || contenu||fond){
            page_principal.style.display="none";
            page_visualisation.style.display="block";
        }
        else{
           return'';
        }
        
        //Selectionnons les champs à remplir:
        const logo_visuel = document.querySelector('.logo-visuel'); 
        const category_visuel = document.querySelector('.theme'); 
        const titre_visuel = document.querySelector('.titre-visuel'); 
        

        //Remplissons le visuel:
        if(categorie)category_visuel.textContent=categorie;
        if(titre)titre_visuel.textContent=titre;

        //Gerons le logo et l'image de fond:
        if (logo && logo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(e) {
               logo_visuel.src = e.target.result;
            }
            reader.readAsDataURL(logo);
        }

        //l'image de fond

        const visuel = document.querySelector('.visuel'); 

        if (fond && fond.type.startsWith("image/")) {
            const fondURL = URL.createObjectURL(fond);
            visuel.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.021)), 
            url(${fondURL})`;
        }

        

        formulaire.reset();

    })

});