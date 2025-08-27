

document.addEventListener("DOMContentLoaded", () => {
    const page_acceuil = document.querySelector('.page-acceuil');
    const page_principal = document.querySelector('.page-principale');
    const page_visualisation = document.querySelector('.page-visualisation');
    const visuel = document.querySelector('.visuel'); 
    const formulaire = document.querySelector('form');
    

    const btn_acces_principale = document.querySelector('.btn-acces');

    //Fermer la page d'acceuil pour ouvrir celle principale:
    btn_acces_principale.addEventListener('click',() => {
        page_acceuil.style.display = 'none';
        page_principal.style.display='block';
    })

    //Récupérons les données du formulaire
    const button_form = document.querySelector('.form-button');
    button_form.addEventListener('click',()=>{
        const formData = new FormData(formulaire);
        const titre = formData.get('titre');
        const logo = formData.get('logo-user');
        const categorie = formData.get('category');
        const fond = formData.get('background');
        const category_container = document.querySelector('.theme-container');

        //Basculons vers la page de visualisation:
        if (titre || logo|| categorie || fond){
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
        if(categorie) {
            category_visuel.textContent = categorie;
            category_container.style.display = 'block';
        } else {
            category_visuel.textContent = '';
            category_container.style.display = 'none';
        }
        if(titre)titre_visuel.textContent=titre;

        //Gerons le logo et l'image de fond:
        if (logo &&  logo.size > 0 && logo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(e) {
               logo_visuel.src = e.target.result;
            }
            reader.readAsDataURL(logo);
        }

        //l'image de fond

        

        if (fond &&  fond.size > 0 && fond.type.startsWith("image/")) {
            const fondURL = URL.createObjectURL(fond);
            visuel.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.021)), 
            url(${fondURL})`;
        } 

        

    })

    //Section de Visualisation:
    //Bouton Retour:
    const btn_retour = document.querySelector('.btn-retour')
    btn_retour.addEventListener('click',(e)=>{
        e.preventDefault();
        page_visualisation.style.display="none";
        page_principal.style.display="block";
        // Réinitialiser l’aperçu si besoin :
        document.querySelector('.logo-visuel').src = "";
        document.querySelector('.theme').textContent = "";
        document.querySelector('.titre-visuel').textContent = "";
        visuel.style.backgroundImage = "";
        //Vidons le formulaire
    })

    //Pour le telechargement du visuel:
    const btn_download = document.querySelector('.btn-download');
    btn_download.addEventListener('click', (e) => {
    e.preventDefault();

    // On génère le canvas HD du visuel
    html2canvas(visuel, { useCORS: true, scale: 4 }).then(canvas => {
        // Conversion en Blob pour un téléchargement plus fiable
        canvas.toBlob((blob) => {
            if (!blob) {
                alert("Erreur lors de la génération de l'image.");
                return;
            }
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.download = 'visuel.png';
            link.click();

            // Nettoyage
            URL.revokeObjectURL(url);
        }, 'image/png', 1.0);
    }).catch(err => {
        console.error("Erreur html2canvas:", err);
        alert("Impossible de générer le visuel.");
    });
});

});
