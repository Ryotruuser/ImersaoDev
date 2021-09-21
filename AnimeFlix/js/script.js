var animes = [
  "https://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire1/f2e9101be6f96bf61ad3dd7c59cf95151547049778_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire3/edcb896701e1dbd5cc2ea3ecd7f7d6461515623275_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/c86883b9efc479469371d4fdea72720a1432769696_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/4abc27f10c66f8ccd6bdad940175327b1611172222_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/06f2c7030f794acf0bfdd34e5735bd191465708255_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire1/85e8511125fe1704bd2f2741e66c329b1594706247_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire1/a36fca80fc4921ae3526be21f4ae20361420839553_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire3/fd16e4a8ada302acc780fcdc453838201349203837_full.jpg",
  "https://cdn.myanimelist.net/images/anime/1464/108330.jpg",
  "https://cdn.myanimelist.net/images/anime/13/80515.webp",
  "https://cdn.myanimelist.net/images/anime/10/80271.webp",
  "https://cdn.myanimelist.net/images/anime/13/57251.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/c33592b4651e7cccf7ec66244e0f8ee81555537663_full.jpg",
  "https://cdn.myanimelist.net/images/anime/5/77300.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/24452933dd3f9282b32e49f0ce5fdc5b1546985597_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/a9c1f36167964b81371db1bde94087861580166621_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/25627becf63b169d19af7efee6122e791555537428_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/f4ca1a545a471a9ce6e43eef8e8d72541539734102_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire3/43d580a5ec49edf6101a573e267500501603756654_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire3/4fe71ff4ce4cf1b0d13b814d42ba51bc1404629753_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire1/b6cb5d2061b72df2e04e6b9678acfa631483619277_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire1/be611b65eb36149005789b740efc7a361333664528_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/e75203df3d9fbee76d042cb172994f1d1571271082_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/ca81ded75159b3eba12bdc433184abab1500918988_thumb.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/7b0b1d0858c0aeaad7fbb264b91f634e1593645590_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/f39842bd473e2db08ea8a1d8849c93ae1412197326_full.jpg"
];

var nomeAnimes = [
  "HunterxHunter",
  "Doukyounin",
  "KazenoStigma",
  "Amagi Park",
  "World Trigger",
  "ReLife",
  "Oregairu",
  "World Break",
  "Btoom",
  "Moriarty",
  "91 Days",
  "Drifters",
  "Code Breaker",
  "Bungo Stray",
  "Nurarihyon",
  "One Piece",
  "Mob 100",
  "Haikyu",
  "Shield Hero",
  "Fairy Tail",
  "Tower of God",
  "Akame Ga Kill",
  "Youjo Senki",
  "Kuroko",
  "Radiant",
  "Knights and Magic",
  "God of highschool",
  "Log Horizon"
];

var linksAnime = [
  "https://www.crunchyroll.com/pt-br/hunter-x-hunter",
  "https://www.crunchyroll.com/pt-br/my-roommate-is-a-cat",
  "https://www.crunchyroll.com/pt-br/kaze-no-stigma",
  "https://www.crunchyroll.com/pt-br/amagi-brilliant-park",
  "https://www.crunchyroll.com/pt-br/world-trigger",
  "https://www.crunchyroll.com/pt-br/relife",
  "https://www.crunchyroll.com/pt-br/my-teen-romantic-comedy-snafu",
  "https://www.crunchyroll.com/pt-br/world-break-aria-of-curse-for-a-holy-swordsman",
  "https://www.crunchyroll.com/pt-br/btooom",
  "https://www.funimation.com/shows/moriarty-the-patriot/",
  "https://www.crunchyroll.com/pt-br/91-days",
  "https://www.crunchyroll.com/pt-br/drifters",
  "https://myanimelist.net/anime/11703/Code_Breaker",
  "https://www.crunchyroll.com/pt-br/bungo-stray-dogs",
  "https://myanimelist.net/anime/7592/Nurarihyon_no_Mago",
  "https://www.crunchyroll.com/pt-br/one-piece",
  "https://www.crunchyroll.com/pt-br/mob-psycho-100",
  "https://www.crunchyroll.com/pt-br/haikyu",
  "https://www.crunchyroll.com/pt-br/the-rising-of-the-shield-hero",
  "https://www.crunchyroll.com/pt-br/fairy-tail",
  "https://www.crunchyroll.com/pt-br/tower-of-god",
  "https://www.crunchyroll.com/pt-br/akame-ga-kill",
  "https://www.crunchyroll.com/pt-br/saga-of-tanya-the-evil",
  "https://www.crunchyroll.com/pt-br/kurokos-basketball",
  "https://www.crunchyroll.com/pt-br/radiant",
  "https://www.crunchyroll.com/pt-br/knights-magic",
  "https://www.crunchyroll.com/pt-br/the-god-of-high-school",
  "https://www.crunchyroll.com/pt-br/log-horizon"
];

for (var indice = 0; indice < animes.length; indice += 1) {
  document.write(`<a href=${linksAnime[indice]}><figure class="figura">
    <img class="animg" src="${animes[indice]}">
    <figcaption class="title-anime">${nomeAnimes[indice]}</figcaption>
</figure></a>`);
}

Add = () => {
  console.log(animes.length)
  var nomeAnime = document.querySelector(".nomeanime").value;
  var linkAnime = document.querySelector(".linkanime").value;
  var imgAnime = document.querySelector(".linkimagem").value;
  if (nomeAnime && linkAnime && imgAnime !== null) {
   var nomeAnime = String(document.querySelector(".nomeanime").value);
   var linkAnime = String(document.querySelector(".linkanime").value);
   var imgAnime = String(document.querySelector(".linkimagem").value);

  // inserindo na lista
   animes.push(imgAnime);
   nomeAnimes.push(nomeAnime);
   linksAnime.push(imgAnime);
    
   var tamanhoImgAnimes = animes.length - 1;
    var tamanhoNomeAnimes = nomeAnimes.length - 1;
    var tamanhoLinkAnimes = linksAnime.length - 1;

  // coloca na tela
   document.body.innerHTML +=
    `<a href=${linksAnime[tamanhoLinkAnimes]}"><figure class="figura">
    <img class="animg" src="${animes[tamanhoImgAnimes]}">
    <figcaption class="title-anime">${nomeAnimes[tamanhoNomeAnimes]}</figcaption>
</figure></a>`;
    
}
  else
    return (document.querySelector(".result").innerHTM = `Preencha as informações`);
};


