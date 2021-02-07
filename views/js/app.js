'use strict';
var generateBuildings = function() {
  var width_max = 0;
  var building_count = 0;

  while (width_max <= 150) {
      building_count++;
      var width_building = ((Math.random() * 1)).toFixed();
      var height_building = ((Math.random() * 10)).toFixed();

      var $newBuilding = $('<span class="building elevate"/>').css({
          'width': width_building + '%',
          'height': height_building + '%',
          'top': 'calc(100% - ' + height_building + '%)'
      });

      if (building_count == 5) {
          $newBuilding.css({
              'margin-right': '1%'
          });
          width_max += 1;
          building_count = 0;
      }

      width_max += Number(width_building);
      $newBuilding.appendTo('.city');
  }
};

setTimeout(function() {
  $('.city .building').removeClass('elevate');
  $('i').removeClass('opacity');
  $('.content-box').addClass('content-box-animated');
  $('.content-box span').fadeOut();
}, 1500);

setTimeout(function() {
  $('.content-box').remove();
}, 2500);

/* ---- particles.js config ---- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 10,
        "duration": 2,
        "opacity": 8,
        "speed": 5
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
});