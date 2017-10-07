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
      'login': () => showLoginPage(),
      'signup': () => showSignupPage(),
      'logout': () => logoutUser(),
      'home': () => {
        showHomePage();
        console.log('Loading Home page from App')
      },
      ':category': (params) => showCategoryPage(params),
      ':category/:post': (params) => showPostPage(params),
    })
    .resolve();