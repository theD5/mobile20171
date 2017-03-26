angular.module('starter.services', [])
  .factory('Books', function(){
    var books = [{
      id: 0,
      author:'A1',
      title: 'T1',
      publication:'P1'
    }, {
      id: 1,
      author:'A2',
      title: 'T2',
      publication:'P2'
    }, {
      id: 2,
      author:'A3',
      title: 'T3',
      publication:'P3'
    }, {
      id: 3,
      author:'A4',
      title: 'T4',
      publication:'P4'
    }];
    return {
      all: function () {
        return books;
      }
    }
  })

  .factory('Predictions', function(){
    var predictions = [
      "Signs point to yes",
      "Yes",
      "Reply hazy, try again",
      "Without a doubt",
      "My sources say no",
      "As I see it, yes",
      "You may rely on it",
      "Concentrate and ask again",
      "Outlook not so good",
      "It is decidedly so",
      "Better not tell you now",
      "Very doubtful",
      "Yes - definitely",
      "It is certain",
      "Cannot predict now",
      "Most likely",
      "Ask again later",
      "My reply is no",
      "Outlook good",
      "Don't count on it"
    ];
    return {
      all: function () {
        return predictions;
      }
    }
  })
  .factory('Movies', function(){
    var movies = [{
      id: 0,
      title: 'Jaws',
      director: 'Steven Spielberg'
    }, {
      id: 1,
      title: 'ET',
      director: 'Steven Spielberg'
    }, {
      id: 2,
      title: 'SuperMan',
      director: 'Richard Donner'
    }, {
      id: 3,
      title: 'Batman',
      director: 'Chris Nolan'
    }];
    return {
      all: function () {
        return movies;
      }
    }
  })
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
