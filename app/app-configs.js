
myApp.run(function($rootScope) {

    // Global Variable
    $rootScope.appTitle = 'Simple WebApp';

});

// DB APT
var appApiPath = "https://flickering-inferno-893.firebaseIO.com/";

// Custom made a Reverse Filter
// http://stackoverflow.com/questions/20611511/how-to-reverse-an-array-in-angular-js-without-creating-a-filter
myApp.filter("reverse", function(){
    return function(items){
        return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
    };
});

myApp.directive("scrollView", function($rootScope, $anchorScroll) {

    return function(scope, element) {
        // Discussion : https://github.com/angular/angular.js/issues/6718
        // Demo : http://jsfiddle.net/jfLcx/3/
        // Solution : // http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
        $rootScope.$on('$stateChangeStart', function() {
            $anchorScroll(); 
        });
    };

});