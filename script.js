*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    --res:calc(0.01 * 10vmin);
}
header{
    display:flex;
    justify-content: space-between;
    padding:calc(20 * var(--res));
    border-bottom: 1px solid #dadada;
}
.logo{
    width:calc(300 * var(--res));
}
.point-recherche{
    width:calc(100 * var(--res));
}


.section-recherche{
    position: absolute;
    top:-100%;
    left:0%; 
    padding:calc(20 * var(--res));
    background-color: #fff;
    width:100%;
    transition: .5s;
}
.active{
    position:absolute;
    top:0;
    left:0;
}

.conteneur-btn-exit{
    display:flex;
    justify-content: end;
    margin-bottom:40px;
}
.conteneur-btn-exit img{
    width:calc(80*var(--res));
}
.conteneur-recherche{
    border: 1px solid #dfdfdf;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    padding:calc(08* var(--res));
}
.conteneur-recherche input{
    flex-grow: 1;
    font-size: calc(50 * var(--res));
    border: none;
    outline: none;
}
.conteneur-recherche input::placeholder{
    color:#dfdfdf;
}
.conteneur-recherche button{
    background-color: #2764E7;
    border:none;
    padding:calc(20 * var(--res));
    border-radius: 50%;
}
.conteneur-recherche img{
    width:calc(70 * var(--res));
    height: auto;
}
.resultat{
    padding:20px;
}


/*Travaillons sur le Navbar*/
.navbar{
    position:fixed;
    bottom:0;
    width:100%;
    background-color: #ff9898;
    border-top:1px solid #E85353;
    z-index: 1;
}
.nav-list{
    display:flex;
    padding:10px;
    justify-content: space-around;
}
.nav-list li{
    list-style: none;
}
.nav-list li img{
    width:calc(100*var(--res));
}

/*Travaillons sur les options de l'utilisateur*/
.conteneur-option-user{
    width:60%;
    min-width: 70%;
    height:40vh;
    background-color: #fff;
    border:2px solid #dfdfdf;
    box-shadow: 0px 0px 30px 5px #dfdfdf;
    padding:20px;
    position:absolute;
    bottom:0;
    right: 1200%;
    transition:0.2s cubic-bezier(.8,0,.11,.93);
}
.affiche-option-user{
    right:0;
}
.hedaer-option-user{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    margin-bottom: calc(20*var(--res));
}
.hedaer-option-user img{
    width:calc(120*var(--res));
}
.hedaer-option-user p{
    font-size:calc(70 * var(--res));
    color:#2764E7;
    font-weight: bold;
}
hr{
    margin:calc(30 * var(--res)) calc(0 * var(--res));
}
.nav-list-profil-user{
    list-style: none;
}
.nav-list-profil-user a{
    display:flex;
    gap:15px;
    margin-bottom:20px;
    text-decoration: none;
}
.nav-list-profil-user a img{
    width:calc(70*var(--res));

}
.nav-list-profil-user a li{
    font-size:calc(60*var(--res));
    color:#525252;
}
