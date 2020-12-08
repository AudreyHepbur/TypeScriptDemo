"use strict";
var Components;
(function (Components) {
    var Subcomponents;
    (function (Subcomponents) {
        var Header = (function () {
            function Header() {
                var elem = document.createElement('div');
                elem.innerText = 'This. is Header';
                document.body.appendChild(elem);
            }
            return Header;
        }());
        Subcomponents.Header = Header;
        var Content = (function () {
            function Content() {
                var elem = document.createElement('div');
                elem.innerText = 'This. is Content';
                document.body.appendChild(elem);
            }
            return Content;
        }());
        Subcomponents.Content = Content;
        var Footer = (function () {
            function Footer() {
                var elem = document.createElement('div');
                elem.innerText = 'This. is Footer';
                document.body.appendChild(elem);
            }
            return Footer;
        }());
        Subcomponents.Footer = Footer;
    })(Subcomponents = Components.Subcomponents || (Components.Subcomponents = {}));
})(Components || (Components = {}));
