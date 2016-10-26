
(function () {
    'use strict';
    angular.module('dsi.bluetooth')
        .factory('AttemptReconnectService', AttemptReconnectService);

    AttemptReconnectService.$inject = ['$injector'];

    function AttemptReconnectService($injector, $cordovaToast) {
        var timer = null;
        var count = 0;
        var _state = 'stop';
        //var suspendCount = 0;

        function start() {
            count = count + 1;
            var delayTime = _secondsWaitingForCallReconnect(count);
            _state = 'start';
            timer = setTimeout(function() {    
                 console.log("Attempt to reconnect bluetooth : " + count + " " + moment().format("YYYY MM DD HH:mm:ss"));
            }, 20 * 1000);
        }

        function stop() {
            _state = 'stop';
            count = 0;
            window.clearTimeout(timer);
        }


        function reset() {
            count = 0;
        }

        function state() {
            return _state;
        }

        function _secondsWaitingForCallReconnect(countToCal) {
            if (countToCal <= 5) {
                return 0;
            }
            return 15 * 1000;
        }

        //function _setSuspendCount(number) {
        //    suspendCount = number;
        //}

        return {
            start: start,
            stop: stop,
            reset: reset,
            state: state
        };
    }
})();