/* global firebase, Navigo */
import homeController from '../controllers/home.controller';
import adminController from '../controllers/admin.controller';
import authenticationController from '../controllers/authentication.controller';
import categoriesController from '../controllers/categories.controller';
import postsController from '../controllers/posts.controller';
import firebaseConfig from '../js/utils/settings';

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  console.log('app running');

  // const router = new Navigo()

  // router.updatePageLinks()

  // router
  //   .on({
  //     '/admin': () => showAdminPage(),
  //     '/login': () => showLoginPage(),
  //     '/signup': () => showSignupPage(),
  //     '/logout': () => logoutUser(),
  //     '/home': () => {
  //       showHomePage();
  //       console.log('Loading Home page from App')
  //     },
  //     '/categories/:category': (params) => showCategoryPage(params),
  //     '/categories/:category/:post': (params) => showPostPage(params),
  //     // '/': () => router.navigate('/home')
  //   })
  //   .resolve();

  const router = new Navigo(null, true, '#!');

  router.updatePageLinks();

    router.on({
      'admin': () => adminController.showAdminPage(),
      // 'admin/addcategory': () => router.navigate('admin'),
      'login': () => authenticationController.showLoginPage(),
      'signup': () => authenticationController.showSignupPage(),
      'logout': () => authenticationController.logoutUser(),
      'home': () => {
        homeController.showHomePage();
        console.log('Loading Home page from App');
      },
      'categories/:category': (params) => categoriesController.showCategoryPage(params),
      'categories/:category/:post': (params) => postsController.showPostPage(params),
      // '': () => {router.navigate('#home')}
    })
    .resolve();
