//faire une to do list 
//Créer un formulaire avec un input et un bouton
// Quand on clique sur le bouton, cela crée une section avec la valeur du champ input qui sera le titre. 
// La section nouvellement créée dispose d'un bouton pour ce supprimer.

const body = document.querySelector('body'); 

// créer le formulaire de saisie
const formulaire = document.createElement('form');
body.appendChild(formulaire);
formulaire.id ='formulaire'
formulaire.setAttribute =('action',"");

const champLabel = document.createElement('label'); 
champLabel.textContent ='Ajouter un élément dans la toDO:';
formulaire.appendChild(champLabel);

const champInput = document.createElement('input'); 
formulaire.appendChild(champInput);
champInput.id ="idInput";
            // champInput.setAttribute(type,"text"); A tester
            // champInput.setAttribute(name,"nom");

// créer un bouton pour soumettre 
const Btsubmit = document.createElement('button'); 
formulaire.appendChild(Btsubmit);
Btsubmit.innerHTML="envoi";

// Creer le conteneur de la todo
const secToDo = document.createElement('section'); 
body.appendChild(secToDo);
secToDo.style.display = 'flex';
secToDo.style.flexDirection = 'column';

console.log("ok");
console.log(Btsubmit);

Btsubmit.addEventListener("click", function(e){
        e.preventDefault() ; // on bloque l’événement par défaut
        let NvlTodo = champInput.value;
        console.log(NvlTodo);

        const divTodo = document.createElement('div'); 
        secToDo.appendChild(divTodo);
        divTodo.className ="divTodo";
        // divTodo.style.display = "flex";
        // divTodo.style.flexDirection = "column";

        
        const textTodo = document.createElement('p'); 
        divTodo.appendChild(textTodo);
        textTodo.textContent = NvlTodo;
        textTodo.class ="texTodo";
        
        const btnSupTodo = document.createElement('button'); 
        divTodo.appendChild(btnSupTodo);
        btnSupTodo.textContent ='Supprimer';
        btnSupTodo.class ="btnTodo";

        btnSupTodo.addEventListener("click", function(e){
            divTodo.remove()})

    });



