"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var context = app.android.context;
var InAppCallPopup = (function () {
    function InAppCallPopup() {
    }
    InAppCallPopup.prototype.register = function () {
        var filter = new android.content.IntentFilter();
        filter.addAction(android.content.Intent.ACTION_NEW_OUTGOING_CALL);
        context.registerReceiver(co.codility.nsincallpopup.CallReceiver["class"], filter);
    };
    return InAppCallPopup;
}());
exports.InAppCallPopup = InAppCallPopup;
//# sourceMappingURL=index.js.map