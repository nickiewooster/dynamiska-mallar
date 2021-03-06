(function() {
    'use strict';

    angular.module('bestallning')
        .filter('jsonToHtml', jsonHtml);

    function jsonHtml($filter) {
        return function(items) {
            return jsonToHtml(items, false);
        };

        function jsonToHtml(jsonData, noMargin) {
            var formattedHtml = noMargin ? '<ul style="list-style: none; margin: 0;">' : '<ul style="list-style: none; margin: 0 1em;">';
            _.forEach(jsonData, function(value, key) {
                // Ignore all keys that starts with $
                if(_.startsWith(key, '$')) {
                    return;
                }

                formattedHtml += '<li><b>' + _.capitalize(mapKeyValue(key)) + '</b>';

                if (isPrimitive(value)) {
                    formattedHtml += ': ' + extractValue(value);
                } else {
                    formattedHtml += jsonToHtml(value, true);
                }

                formattedHtml += '</li>';
            });

            formattedHtml += '</ul>';

            return formattedHtml;
        }

        function extractValue(obj) {
            if (_.isNull(obj) || _.isUndefined(obj) || _.isObject(obj) && _.isEmpty(obj)) {
                return 'Uppgift saknas';
            }

            if (isPrimitive(obj)) {
                if (isDate(obj)) {
                    return $filter('date')(obj, 'yyyy-MM-dd');
                } else if(_.isBoolean(obj)) {
                    if(obj) {
                        return 'ja';
                    } else {
                        return 'nej';
                    }
                }
            }

            return obj;
        }

        function isPrimitive(obj) {
            return !obj || _.isEmpty(obj) || (_.isString(obj) || _.isNumber(obj) || _.isBoolean(obj) || isDate(obj));
        }

        function isDate(obj) {
            return _.isDate(obj);
        }

        function mapKeyValue(key) {
            if(!_.isString(key)) {
                if(_.isNumber(key)) {
                    return '+';
                }
                return key;
            }

            var knownKeys = {
                name: 'namn',
                employmenttype: 'anställningstyp',
                firstname: 'förnamn',
                lastname: 'efternamn',
                pris: 'pris (kr/st)',
                explanations: 'Tillhörande behörigheter',
                mobile: 'mobil',
                phone: 'telefon'
            };

            return knownKeys[key.toLowerCase()] || key;
        }
    }
})();