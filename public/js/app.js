  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXp1GKlfoTF4eY49tx2inZSOrE3peimNQ",
    authDomain: "photo-blog-85739.firebaseapp.com",
    databaseURL: "https://photo-blog-85739.firebaseio.com",
    projectId: "photo-blog-85739",
    storageBucket: "photo-blog-85739.appspot.com",
    messagingSenderId: "735786168913"
  };
  firebase.initializeApp(config);

  console.log('app running');

  const router = new Navigo(null, true, '#!')
  
    router.on({
      'admin': () => showAdminPage(),
      'login': () => {
        console.log('Login form app');
        showLoginPage();
      },
      'signup': () => showSignupPage(),
      'logout': () => showLoginPage(),
      'home': () => showHomePage(),
      ':category': (params) => showCategoryPage(params),
      ':category/:post': (params) => showPostPage(params),
    })
    .resolve();