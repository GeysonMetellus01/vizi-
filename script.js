

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
        // Gestion logo et fond
        if (logo && logo.size > 0 && logo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                logo_visuel.src = e.target.result; // DataURL
            };
            reader.readAsDataURL(logo);
        }

        const bgVisuel = document.querySelector('.bg-visuel');
        if (fond && fond.size > 0 && fond.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                bgVisuel.src = e.target.result; // DataURL → fiable et net
            };
            reader.readAsDataURL(fond);
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

    // Pour le téléchargement du visuel
    async function waitForImagesOf(root) {
        const imgs = Array.from(root.querySelectorAll('img')).filter(i => !i.complete);
        if (imgs.length === 0) return;
        await Promise.all(
            imgs.map(img => new Promise(res => {
                img.onload = img.onerror = res;
            }))
        );
    }

    const btn_download = document.querySelector('.btn-download');
    btn_download.addEventListener('click', async (e) => {
        e.preventDefault();

        const originalW = visuel.style.width;
        const originalMaxW = visuel.style.maxWidth;

        // élargir temporairement
        visuel.style.width = "1600px";
        visuel.style.maxWidth = "1600px";

        await waitForImagesOf(visuel);

        try {
            const canvas = await html2canvas(visuel, {
                useCORS: true,
                backgroundColor: null,
                scale: 4,  // qualité meilleure
                logging: false
            });

            // remettre la taille normale
            visuel.style.width = originalW;
            visuel.style.maxWidth = originalMaxW;

            canvas.toBlob((blob) => {
                if (!blob) return alert("Erreur lors de la génération de l'image.");
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `visuel_${Math.floor(Math.random()*100)}.png`;
                a.click();
                URL.revokeObjectURL(url);
            }, 'image/png', 1.0);

        } catch (err) {
            visuel.style.width = originalW;
            visuel.style.maxWidth = originalMaxW;
            console.error(err);
            alert("Impossible de générer le visuel.");
        }
    });

});

