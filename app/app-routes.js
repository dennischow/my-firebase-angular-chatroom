myApp
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/ChatroomView.html',
                controller: 'ChatroomController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/static/about.html'
            });
    //     .when('/blog/', {
    //         templateUrl: viewsPath + 'blog/viewBlog.html',
    //         controller: 'blogController'
    //         // controllerAs: 'chapter'
    //     })
    //     .when('/blog/:id', {
    //         templateUrl: viewsPath + 'blog/viewBlog-details.html',
    //         controller: 'blogDetailsController'
    //         // controllerAs: 'chapter'
    //     })
    //     .when('/instagram/', {
    //         templateUrl: viewsPath + 'instagram/viewInstagram.html',
    //         controller: 'instagramController'
    //         // controllerAs: 'chapter'
    //     })
    //     .otherwise({
    //         redirectTo: '/home/'
    //     });

    // $urlRouterProvider.html5Mode(true);
    }]);