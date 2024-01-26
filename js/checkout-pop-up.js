$(document).ready(function () {
    'user strict';
    
    (function () {
        var login = {
          init: function () {
            this.cacheDom();
            this.addEvents();
          },
          cacheDom: function () {
            this.$loginBtn    = $('#login');
            this.$loginPopup  = $('.login-popup');
            this.$closePopup  = $('.close-icon');
          },
          addEvents: function () {
            this.$loginBtn.on('click', this.showLogin.bind(this));
            this.$closePopup.on('click', this.hideLogin.bind(this));
          },
          showLogin: function (e) {
            e.preventDefault();
            this.$loginPopup.fadeIn('fast');
          },
          hideLogin: function () {
            this.$loginPopup.fadeOut('fast');
          }
        }
        login.init();
  
    })();
  });