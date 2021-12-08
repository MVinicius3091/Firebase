var config = {
  apiKey: "AIzaSyB9DY416QFxtye6GvrGdiI6NKtHvo_9b3A",
  authDomain: "colegio-4d620.firebaseapp.com",
  dataBaseURL:"https://colegio-4d620.firebase.com",
  projectId: "colegio-4d620",
  storageBucket: "colegio-4d620.appspot.com",
  messagingSenderId: "1020613487734",
};

firebase.initializeApp(config);

var db = firebase.firestore();
var turma = 'turmaA';

var dataBase = db.collection(turma);
var autentication = firebase.auth();

//função para criar um novo usuário.
function novoUsuario(){

  //com o método auth() pode-se criar um novo usuário no banco do Firebase.
  let username = '';
  let password = '';
  
  //createuser...() é o método para criar um login e senha. Esse método é uma Promisse.
  autentication.createUserWithEmailAndPassword(username, password)
  .then(user=>{
    console.log('Usuário inserido com sucesso!');
  }).catch(error=>{
    console.log('Usuário não inserido, erro: ' + error);
  });

};

//novoUsuario();

//função para verificar se o usuário está logado com a conta Firebase.
function login(){

  let usuariolog = 'maykon@teste.com';
  let passwordlog = 'vinicius';


    //signInWith....() confirma se o usuário existe!
    autentication.signInWithEmailAndPassword(usuariolog, passwordlog)
    .then(logged=>{
      console.log('Usuário logado com sucesso!');
      // console.log(autentication.currentUser);
    }).catch(error=>{
      console.log(error);
    });
}



//função para verificar se o usuário está logado.
function logAutenticado(){

  //onAuth..() confirma se o usuario está logado neste momento.
  autentication.onAuthStateChanged(user=>{

    if(user){
      console.log(user)
    }else{
      console.log('Ninguém logado no momento!');
    }
  })
}


//função para deslogar o usuário atual.
function Deslogado(){

  //signIn() desloga o usuário automáticamente.
  autentication.signOut().then(()=>{
    console.log('Usuário Deslogado com sucesso!');
  }).catch(error=>{
    console.log(error);
  })
}


//tempo para logar
setTimeout(login, 1000);
//tempo para autenticar o usuário
setTimeout(logAutenticado, 2000);
//tempo para deslogar
setTimeout(Deslogado, 3000);

