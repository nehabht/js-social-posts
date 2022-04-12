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
        numero_likes:20
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
        <button onclick="buttonClick();">
            <i class="fa-solid fa-thumbs-up"></i>
            Mi piace
        </button>
        <input type="text" id="count" value="0"/>
    </div>
</div>
    `
});

const containerElement = document.querySelector(".cards");
containerElement.innerHTML = cards;



let i = 0;
function buttonClick() {
    document.getElementById('count').value = `Piace a ${++i} persone`;
}



