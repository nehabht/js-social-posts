/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: */

const posts = [
    {
        id: 1,
        nome_autore: 'Anthony Bridgerton',
        foto_autore: 'https://picsum.photos/200/200/',
        data: "12-11-2022",
        testo_post: "lorem ipsum dolor",
        immagine_post: 'https://picsum.photos/900/800',
        numero_likes: 20
    },
    {
        id: 2,
        nome_autore: 'Kate Sharma',
        foto_autore: 'https://picsum.photos/100/100',
        data: "10-11-2022",
        testo_post: "lorem ipsum dolor",
        immagine_post: 'https://picsum.photos/1000/900',
        numero_likes: 10
    },
/*     {
        id: 3,
        nome_autore: 'Penelope',
        foto_autore: 'https://unsplash.it/300/300?',
        data: "01-11-2022",
        testo_post: "lorem ipsum dolor",
        immagine_post: 'https://unsplash.it/300/300?image=',
        numero_likes: 10
    }, */
];


/* Milestone 2
Prendendo come riferimento il layout di esempio presente 
nell'html, stampiamo i post del nostro feed. */


let cards = "";

posts.forEach((post, i) => {
    cards += `
    <div class="card">
    <div class="card_head">
        <img src="${posts[i].foto_autore}" alt="">
        <div class="d_flex flex-column">
            <span class="author_name">${posts[i].nome_autore}</span>
            <span class="date">${posts[i].data}</span>
        </div>
    </div>

    <div class="card_main">
        <p>lorem and stuff</p>
        <img src="${posts[i].immagine_post}" alt="">
    </div>

    <div class="card_footer d-flex">
        <button class="likes_btn">
            <i class="fa-solid fa-thumbs-up"></i>
            <span class="nonPressed">Mi piace</span>
        </button>
        <button>Piace a <b><span id="numbero_likes" class="likes">  ${posts[i].numero_likes}</span></b> persone</button>
    </div>
</div>
    `
});

const containerElement = document.querySelector(".cards");
containerElement.innerHTML = cards;


/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */


// riprendo il numero per i likes dove incrementare
let likes = document.querySelectorAll(".likes")
//console.log(likes)

// riprendo il bottone dove cliccare per l'incremento
let likesBtn = document.querySelectorAll(".likes_btn")

const arrayLiked = [];



likesBtn.forEach((element, i, array) =>{
    likesBtn[i].addEventListener("click", function(){

        if (!likesBtn[i].classList.contains("likePressed"));
        posts[i]["numero_likes"] += 1;
        
        likes[i].innerHTML = posts[i]["numero_likes"];
        //incremento nell'arrau 
        arrayLiked.push(posts[i]["id"]);
        console.log(arrayLiked);
        //aggiungi classe per cambiare il colore allo span
        likesBtn[i].classList.add("likePressed")


    }) 
})