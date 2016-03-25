 // Main Controller
myApp.controller("ChatroomController", ["$scope", "$rootScope", "$firebaseArray", function($scope, $rootScope, $firebaseArray) {

        // App Title
        // $rootScope.appTitle = "Chat-room";

        // Firebase
        var ref = new Firebase( appApiPath );

        // Result
        $scope.messages = $firebaseArray(ref);

        // REMOVE MESSAGE
        $scope.removeChat = function(e){
            // alert("re");
            $scope.messages.$remove(e);
        };

        //ADD MESSAGE METHOD
        $scope.addChat = function(e) {

            if ($scope.msg) {

                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || "anonymous";

                var getDatetime = new Date();

                $scope.messages.$add({
                    from: name, 
                    body: $scope.msg,
                    created: new Date().toISOString()
                    // created : getDatetime.toString() // No idea why has to be String
                });

                // console.log( getDatetime );
                //RESET MESSAGE
                $scope.msg = "";

                setTimeout(function () {
                    window.scrollTo(0, 0);
                }, 200);

                // setTimeout(function () {
                //     window.scrollTo(0, document.body.scrollHeight);
                // }, 200);

            }
            
        }

    }
]);