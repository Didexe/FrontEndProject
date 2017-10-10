/* global firebase, Navigo */
import homeController from '../controllers/home.controller';
import adminController from '../controllers/admin.controller';
import authenticationController from '../controllers/authentication.controller';
import categoriesController from '../controllers/categories.controller';
import postsController from '../controllers/posts.controller';


// firebase.initializeApp(settings.firebaseConfig);

console.log('app running');

  const router = new Navigo(null, true, '#!');

  router.updatePageLinks();

    router.on({
      'admin': () => adminController.showAdminPage(),
      'admin/addslide': () => adminController.addNewSlide(),
      'admin/addnewpost': () => adminController.addNewPost(),
      'admin/addnewgategory': () => adminController.addNewCategory(),
      'admin/addnewmultimedia': () => adminController.addNewMultimedia(),
      'admin/addnewarticle': () => adminController.addNewMultimedia(),
      'login': () => authenticationController.showLoginPage(),
      'signup': () => authenticationController.showSignupPage(),
      'logout': () => authenticationController.logoutUser(),
      'home': () => homeController.showHomePage(),
      'categories/:category': (params) => categoriesController.showCategoryPage(params),
      'categories/:category/page/:page': (params) => categoriesController.updateCategoryPage(params),
      'categories/:category/:post': (params) => postsController.showPostPage(),
  
      '': () => router.navigate('home'),
    })
    .resolve();
