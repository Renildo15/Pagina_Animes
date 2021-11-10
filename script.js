var animes =[
    {

      url: "https://myanimelist.net/anime/1535/Death_Note",

      image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",

      title: "Death Note",

      score: 8.63,

      start_date: "2006-10-04T00:00:00+00:00",

    },

    {

      url: "https://myanimelist.net/anime/28223/Death_Parade",

      image_url: "https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08",

      title: "Death Parade",

      score: 8.18,

      start_date: "2015-01-10T00:00:00+00:00",

    },

    {

      url: "https://myanimelist.net/anime/14353/Death_Billiards",

      image_url: "https://cdn.myanimelist.net/images/anime/11/48721.jpg?s=4728f1efeabefb313634e64ac91f514b",

      title: "Death Billiards",

      score: 7.91,

      start_date: "2013-03-02T00:00:00+00:00",

    }

]

function tabelaAnimes(){
    return animes.map(f => `<div>${f.title} - ${f.start_date} - <a href="#" onclick="carregarImagem(event,'${f.image_url}')">Carregar</a> </div>`)
} 

const carregarImagem = (event, url) => {
    event.preventDefault()
    document.getElementById("imagem").innerHTML = `<img src="${url}"  width="200px"/>`

}
 document.getElementById("tabela").innerHTML = `Titulo - Ano - Imagem<br/> ${tabelaAnimes().join('\n')}`;