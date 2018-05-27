// ---------------------------------------- données ----------------------------------------
var books = [// objet !!
  {
    title: 'CSS: The Definitive Guide',
    author: 'Eric Meyer',
    image: 'https://covers.oreillystatic.com/images/0636920012726/lrg.jpg',
    type: 'css'
  },
  {
    title: 'CSS Development with CSS3',
    author: 'Zachary Kingston',
    image: 'https://covers.oreillystatic.com/images/0636920057970/lrg.jpg',
    type: 'css'
  },
  {
    title: 'You Don\'t Know JS: Up & Going',
    author: 'Kyle Simpson',
    image: 'https://covers.oreillystatic.com/images/0636920039303/lrg.jpg',
    type: 'js'
  },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    image: 'https://covers.oreillystatic.com/images/0636920033141/lrg.jpg',
    type: 'js'
  },
  {
    title: 'Modern JavaScript Develop and Design',
    author: 'Ullman Larry',
    image: 'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780321812520/modern-javascript.jpg',
    type: 'js'
  }
];

var buttons =['css', 'js', 'php', 'python', 'TOUS'];
// ---------------------------------------------------------------------------------------------

window.onload = () => {
  //ajout des boutons de filtre
  var div = document.createElement('div');// création du form
  div.setAttribute('id', 'buttons');//id du form
  document.body.appendChild(div);

  var el=document.getElementById('buttons');//rappel de la div id buttons
  i=0;//init i
  buttons.forEach(() => {// boucle sur tableau buttons
      var button=document.createElement('input');// ajout d'un input
      //ajout des attributes de l'input
      button.setAttribute('type', 'button');
      button.setAttribute('value', buttons[i]);
      button.setAttribute('name', buttons[i]);
      el.appendChild(button);
    i++;
  });

  i=0;//(re)init i
  //boucle dans le tableau
  books.forEach((books) => {
    var ul = document.createElement("ul");//création ul
    ul.className='ul'+i
    var el=document.getElementById('buttons');//rappel de la div id buttons  
    //ajout d'un nom de classe incrémenté ==> autres solutions ?????
    document.body.appendChild(ul);// ajout ul
    //boucle sur les objets du tableau
    var nbrObjet = Object.keys(books).length;
    for (j=0; j<nbrObjet; j++) {
      //Appel de l'ul parents
      var el=document.getElementsByClassName('ul'+i)[0];//rappel de l'ul
      //traitement spécifique si img (complété par css)
      if (Object.keys(books)[j]==='image') {
        var img = document.createElement('img');
        img.setAttribute('src', Object.values(books)[j]);;// asetAttributejout attribut src
        img.setAttribute('alt', Object.values(books)[j]);// ajout attribut alt
        el.appendChild(img);
      } else {
        //création li 
        var li = document.createElement('li');
        li.className=Object.keys(books)[j];//ajout del key en classe (pour le css)
        //contenu de la li
        var content = document.createTextNode(Object.keys(books)[j]+': '+Object.values(books)[j]); //on integre la clé et la valeur
        li.appendChild(content);  
        // ajout de la li
        el.appendChild(li);
      }
    }
    i++; //incrémente i pour un nom de class qui s'incrémente sur l'ul
  });

  //gestion des boutons de filtre ----------------------------------------------
  var form=document.getElementById('buttons');
  for (i=0;i<form.children.length;i++) {
    form.children[i].addEventListener("click", (event) => {
      detectClic=event.currentTarget.value;//on récupère le name cliqué
      var nbrObjet = Object.keys(books).length;
      for (j=0; j<nbrObjet; j++) {//nbr 
        var el=document.getElementsByClassName('ul'+j)[0];//rappel de l'ul parents
        var compar=el.lastElementChild.innerHTML;//on recupère la valeur à comparer
        var ctrl=compar.indexOf(detectClic);
        if (ctrl>0 || detectClic==='TOUS') {//controle
          el.style.display='grid';
        } else {
          el.style.display='none';
        }     
      }      
    });
  };




  
}


// test
//### 2. Ajouter 2 boutons intitulés JS et CSS dans la page html qui permettent de filtrer, respectivement, les livres de type CSS et JS.
//ajouter le alt dans img
