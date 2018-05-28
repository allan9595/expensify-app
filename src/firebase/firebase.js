import * as firebase from 'firebase';

const config = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
 };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider,  database as default };

/*
firebase.database().ref('expenses')
  .on('value',(snapshot ) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id : childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });
  //firebase.database().ref('expenses').on('child_changed', (snapshot) => {
    //console.log(snapshot.key, snapshot.val());
  });

firebase.database().ref('expenses').push({
  description:'rent',
  amount: 20,
  createdAt: 1000,
  note: ''
});

firebase.database().ref('expenses').push({
  description:'food',
  amount: 20,
  createdAt: 1000,
  note: ''
});

firebase.database().ref('expenses').push({
  description:'travel',
  amount: 20,
  createdAt: 1000,
  note: ''
});



firebase.database().ref().set({
  name:'allan',
  age: 26,
  isSingle: false,
  job: {
    title: 'software developer',
    stressLevel: 6,
    company: 'Google'
  },
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This Failed', e);
});


firebase.database().ref().update({
  'job/title' : 'manager',
  'job/stressLevel': 9,
  'job/company': 'amazon'
});

//firebase.database().ref('inSingle').remove();


const name = firebase.database().ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});
*/
