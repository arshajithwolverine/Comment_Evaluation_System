function logout() {
    firebase.auth().signOut().then(function () {
        console.log("signed out")
        location.replace('/Admin/examples/login.html');
    }).catch(function (error) {
        console.log("error")
        // An error happened.
    });
}