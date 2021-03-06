(function(angular) {
  'use strict';

  angular.module('calcentral.directives').directive('ccLoadingDirective', ['$timeout', function($timeout) {
    return {
      link: function(scope, elm, attrs, ctrl) {

        var cc_loading_class = 'cc-loading';
        var cc_loading_classes = 'cc-loading-error cc-loading-process cc-loading-success';

        var setHtml = function (html, indicator) {
          html = html || '';
          var icon = '';

          if (indicator === 'Error') {
            icon = 'exclamation';
          } else if (indicator === 'Process') {
            icon = 'spinner icon-spin';
          } else if (indicator === 'Success') {
            icon = 'ok';
          }

          if (icon) {
            icon = '<i class="icon-' + icon + '"></i>';
          }

          elm.html(icon + html);
        };

        var setClass = function(indicator) {
          elm.removeClass(cc_loading_classes);

          if (indicator) {
            elm.addClass('cc-loading-' + indicator.toLowerCase());
          }
        };

        scope.$watch(attrs.ccLoadingDirective, function(indicator) {
          var html;

          if (indicator) {
            html = attrs['ccLoading' + indicator];
          }

          setHtml(html, indicator);
          setClass(indicator);
        });

        elm.addClass(cc_loading_class);
      }
    };
  }]);

})(window.angular);
