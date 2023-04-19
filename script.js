    // website counter
      var counterContainer = document.querySelector(".website-counter");
      var resetButton = document.querySelector("#reset");
      var visitCount = localStorage.getItem("page_view");

      // Check if page_view entry is present
      if (visitCount) {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
      } else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
      }
      counterContainer.innerHTML = visitCount;

      // Adding onClick event listener
      resetButton.addEventListener("click", () => {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
        counterContainer.innerHTML = visitCount;
      });
      const button = document.querySelector('#button');

      const disableButton = () => {
        console.log("va");
          button.disabled = true;
      };
      button.addEventListener('click', disableButton);

    //   angular routing
      var app = angular.module('myApp', ['ngRoute']);
        app.config(function($routeProvider){

        $routeProvider
        .when('/career',{
            templateUrl: 'career.html'
        })
        .when('/',{
            templateUrl: 'biography.html'
        })
        .when('/awards',{
            templateUrl: 'awards.html'
        })
        .when('/books',{
          templateUrl: 'books.html'
        })
        .when('/death',{
          templateUrl: 'death.html'
        })
        .when('/gallery',{
          templateUrl: 'gallery.html'
        })
        .when('/site', {
          templateUrl: 'siteMap.html'
        })
    })
