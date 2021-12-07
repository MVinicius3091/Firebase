var config = {
  apiKey: "AIzaSyB9DY416QFxtye6GvrGdiI6NKtHvo_9b3A",
  authDomain: "colegio-4d620.firebaseapp.com",
  dataBaseURL:"https://colegio-4d620.firebase.com",
  projectId: "colegio-4d620",
  storageBucket: "colegio-4d620.appspot.com",
  messagingSenderId: "1020613487734",
};

firebase.initializeApp(config);

//atribuindo o firebase.initializeApp(config); dentro da variável db;
// let db = firebase.firestore();
// const turma = 'turmaA';

//collection é uma função para chamar a coleção criada no firebase.

//o método get() é para pegar tudo dentro da coleção. É uma promisse a ser resolvida.

//com o método then() se obtém o resultado da promisse (é um caallback);
  db.collection(turma).get().then(snapshot=>{
    snapshot.forEach(doc =>{
      //com o método data() se pode obter o conteúdo que está na coleção;
     let aluno = doc.data();
     console.log( aluno.nome);
     console.log( aluno.sobrenome);
     console.log( aluno.notas.nota1);
     console.log( aluno.notas.nota2);
    })
  });

//com o método where() obtém-se um parâmetro entre sinais de maior, menor ou igual. Com isso, pode-se fazer buscas precisas dentro da coleção.
 db.collection(turma).where('nome', '<', 'Maykon').get().then(snapshot =>{
   snapshot.forEach(doc => {
     let aluno = doc.data();
     console.log(aluno.nome, aluno.sobrenome, aluno.notas.nota1, aluno.notas.nota2);
   });
 })


//função pra inserir um novo aluno instântaneamente pelo VSCODE.
 db.collection(turma).doc('alunoNovo').add(
  { 
     nome: 'Valério',
     sobrenome: 'Brancalion',
     notas: {nota1: 9.8, nota2: 8.5},
  }
 ).then(()=>{
   console.log('Documento iserido com sucesso: ');
 }).catch(err=>{
   console.log(err);
 });

   db.collection(turma).doc('alinoNovo').set(
    { 
       nome: 'Felipe',
       sobrenome: 'Araujo',
       notas: {nota1: 6.7, nota2: 6.5},
    }
   ).then(()=>{
     console.log('Documento iserido com sucesso: ');
   }).catch(err=>{
     console.log(err);
   });

 //função para atualizar um documento já inserido na coleção.
 db.collection(turma).doc('7pAxW8CCdugSamYQLskM').update({
 
   classe: 'turma 3b'
 }).then(()=>{
   console.log('Documento atualizado com sucesso!');

 }).catch((err)=>{
   console.log(err);
 });


//função para deletar um documento dentro da coleção.
 db.collection(turma).doc('').delete().then(()=>{
   console.log('Documento deletado com sucesso!');
 }).catch((error)=>{
   console.log(error);
 });

