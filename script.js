var animes =[
    {

      url: "https://myanimelist.net/anime/1535/Death_Note",

      image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",

      title: "Death Note",

      score: 8.63,

      start_date: new Date("2006-10-04T00:00:00+00:00"),
      data: function (){
          return this.start_date.getFullYear()  + "-" + this.start_date.getMonth() + "-" + this.start_date.getDay();
      }

    },

    {

      url: "https://myanimelist.net/anime/28223/Death_Parade",

      image_url: "https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08",

      title: "Death Parade",

      score: 8.18,

      start_date: new Date("2015-01-10T00:00:00+00:00"),
      data: function (){
          return this.start_date.getFullYear() + "-" + this.start_date.getMonth() + "-" + this.start_date.getDay();
      }
    },

    {

      url: "https://myanimelist.net/anime/14353/Death_Billiards",

      image_url: "https://cdn.myanimelist.net/images/anime/11/48721.jpg?s=4728f1efeabefb313634e64ac91f514b",

      title: "Death Billiards",

      score: 7.91,

      start_date: new Date("2013-03-02T00:00:00+00:00"),

      data: function (){
          return this.start_date.getFullYear() + "-" + this.start_date.getMonth() + "-" + this.start_date.getDay();
      }

    }

]

function tabelaAnimes(){
    return animes.map(f => `
    <tr>
    <td><a href = "${f.url}" target = _blank>${f.title}</a></td>
    <td>${f.data()}</td>
    <td><button><a href="#" onclick="carregarImagem(event,'${f.image_url}')">Carregar</a></button></td>
    <td>${f.score}</td>
    </tr>`).join('');

    /*return animes.map(f => `<div> <a href = "${f.url}" target = _blank>${f.title}</a> - ${f.data()} - ${f.score} - <a href="#" onclick="carregarImagem(event,'${f.image_url}')">Carregar</a> </div>`)*/
} 

const carregarImagem = (event, url) => {
    event.preventDefault()
    document.getElementById("imagem").innerHTML = `<img src="${url}"  width="200px"/>`

}
 document.getElementById("conteudo").innerHTML = tabelaAnimes();

 /*`Titulo - Ano - Imagem - Score<br/> ${tabelaAnimes().join('\n')}`*/