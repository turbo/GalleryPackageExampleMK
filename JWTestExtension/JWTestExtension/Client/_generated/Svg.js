/// <amd-bundling root="true" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var JWTestExtension;
    (function (JWTestExtension) {
        "use strict";
        var repeatingFragment = " class='msportalfx-svg-placeholder' role='presentation' focusable='false' xmlns:svg='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><title></title>";
        var _commonViewBox50 = "0 0 50 50";
        var _commonViewBox16 = "0 0 16 16";
        var _msportalfxSvgColorClass = " class='msportalfx-svg-c";
        var _enableBackgroundNew = " enable-background='new '";
        var _polygonPoint = "<polygon points='";
        var createSvgImage = FxImpl.DefinitionBuilder.createSvgImage;
        function _setData(data, resources) {
            resources.forEach(function (v) {
                data[v[0]] = createSvgImage(v[1], v[2]);
            });
        }
        function _svgViewBox(viewbox, content) {
            return "<svg viewBox='" + viewbox + "'" + repeatingFragment + content + "</g></svg>";
        }
        function _widthHeightAttribs(width, height) {
            return " width='" + width + "' height='" + height + "'";
        }
        function _rectXY(x, y) {
            return "<rect x='" + x + "' y='" + y + "'";
        }
        function _pathOpacity(x) {
            return '<path' + _opacity(x);
        }
        function _opacity(x) {
            return " opacity='" + x + "'";
        }
        function _circleCxCyR(cx, cy, r) {
            return "<circle cx='" + cx + "' cy='" + cy + "' r='" + r + "'";
        }
        var Content;
        (function (Content) {
            var SVG;
            (function (SVG_1) {
                var data = [
                    ["sample", _svgViewBox(_commonViewBox50, "<path d='M43.339 18.659c.195-.911.291-1.779.291-2.643C43.63 9.39 38.232 4 31.595 4a12 12 0 0 0-10.81 6.736 8.661 8.661 0 0 0-6.114-2.523c-4.763 0-8.638 3.875-8.638 8.637 0 .646.072 1.298.218 1.968C2.328 20.416 0 23.731 0 27.763c0 5.437 4.443 9.696 10.113 9.696h.646c.11 4.968 4.18 8.975 9.164 8.975a9.138 9.138 0 0 0 7.996-4.681 6.65 6.65 0 0 0 4.36 1.628c3.42 0 6.249-2.591 6.65-5.922h.961c5.67 0 10.11-4.259 10.11-9.696 0-4.199-2.544-7.654-6.661-9.104'" + _msportalfxSvgColorClass + "05'/><path d='M39.437 23.192l.736-1.743-.213-.184-1.607-1.396.008-1.411 1.812-1.62-.713-1.753-.279.019-2.125.152-.992-1.006.135-2.428-1.742-.735-.184.212-1.397 1.609-1.412-.01-1.621-1.81-1.752.711.02.281.15 2.125-1.004.99-2.428-.135-.736 1.743.213.184 1.608 1.397-.009 1.412-1.81 1.621.711 1.752.281-.021 2.123-.149.992 1.005-.135 2.426 1.743.736.184-.213 1.396-1.608 1.412.01 1.621 1.812 1.752-.712-.02-.282-.15-2.124 1.006-.992 2.426.135zm-8.809-.499a3.871 3.871 0 1 1 3.01-7.135 3.871 3.871 0 0 1-3.01 7.135m-2.271 9.255v-1.893l-.266-.086-2.025-.663-.539-1.304 1.04-2.198-1.336-1.337-.251.127-1.899.962-1.305-.541-.818-2.289-1.891-.002-.087.269-.663 2.023-1.304.539-2.198-1.039-1.337 1.337.127.251.962 1.9-.54 1.302-2.29.819-.001 1.891.267.088 2.025.661.539 1.306-1.04 2.196 1.336 1.34.251-.128 1.901-.964 1.302.541.819 2.289 1.891.001.087-.266.663-2.025 1.305-.539 2.196 1.04 1.339-1.336-.127-.251-.964-1.899.542-1.305 2.289-.817zm-8.313 2.96a3.872 3.872 0 1 1 .007-7.745 3.872 3.872 0 0 1-.007 7.745'" + _msportalfxSvgColorClass + "01'/><path d='M34.449 20.103a2.513 2.513 0 1 1-4.63-1.953 2.513 2.513 0 0 1 4.63 1.953M22.561 31.037a2.513 2.513 0 0 1-5.026-.003 2.513 2.513 0 1 1 5.026.003'" + _msportalfxSvgColorClass + "13'/>")]
                ];
                _setData(SVG, data);
            })(SVG = Content.SVG || (Content.SVG = {}));
        })(Content = JWTestExtension.Content || (JWTestExtension.Content = {}));
    })(JWTestExtension || (JWTestExtension = {}));
    return JWTestExtension;
});
