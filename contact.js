const firebaseConfig = {
    apiKey: "AIzaSyAh0laUMIDIMAQgG-3bEzBCVDSZBfiiQSI",
    authDomain: "portfolio-77fd0.firebaseapp.com",
    databaseURL: "https://portfolio-77fd0-default-rtdb.firebaseio.com",
    projectId: "portfolio-77fd0",
    storageBucket: "portfolio-77fd0.appspot.com",
    messagingSenderId: "258140492230",
    appId: "1:258140492230:web:6cc7ab0f2c05d17b3122c7"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactDB = firebase.database().ref('Portfolio');

document.getElementById('contact').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name =getElementByVal('Name');
    var email =getElementByVal('Email');
    var subject =getElementByVal('Subject');
    var message =getElementByVal('Message');

    saveMessage(name,email,subject,message);
}

const saveMessage=(name,email,subject,message)=>{
    var newContactform = contactDB.push();

    newContactform.set({
        name : name,
        email : email,
        subject : subject,
        message : message
    })
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;

}
