import * as app from "tns-core-modules/application";

declare class co {
    public static codility;
}

declare class android {
    public static content;
}

const context = app.android.context;

export class InAppCallPopup {
    constructor() {
        
    }

    register() {
        let filter = new android.content.IntentFilter();
        filter.addAction(android.content.Intent.ACTION_NEW_OUTGOING_CALL);
        // filter.addAction("NEW_OUTGOING_CALL");

        context.registerReceiver(co.codility.nsincallpopup.CallReceiver["class"], filter);
    }
}