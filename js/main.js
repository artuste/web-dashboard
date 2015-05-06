(function() {
    "use strict";

    harimata.init(
        'WebClient',
        '70fdb7b56227077c8df02c7a576f8937',
        'WebClient',
        "WebClient", {});


    harimata.startSession({
        age: 4,
        gender: "m", // 'm' for male, 'f' for female
        device: "Browser",
        appName: "YDP Game 1",
        comment: "example of comment",
        disorders: "list, of, disorders"
    });

    //
    //harimata.endSession()
    //    .then(function() { alert("export finished"); })
    //    .catch(function() { alert("connection lost"); });

})();
