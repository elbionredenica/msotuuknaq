firebase.auth().onAuthStateChanged((user) => {
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const phone = user.phoneNumber;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
  const randomFromUid = uid.split("");
  console.log(displayName, phone, uid);
  var temp_nickname = 'Guest' + Math.floor(Math.random()*90000) + randomFromUid[27] + randomFromUid[7];
    

    if (displayName !== null) {
      document.getElementById('name').value = displayName;
    } else if (phone !== null) {
      document.getElementById('name').value = phone;
    } else {
      document.getElementById('name').value = temp_nickname;
    }
    
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if

}
  });

function logOut() {
    firebase.auth().signOut().then(() => {
        console.log('logged out');
        window.location.replace('../index.html');
      }).catch((error) => {
        alert('Ndodhi nje gabim', error);
      });
}