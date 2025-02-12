$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var openAudio = $("#openAudio")[0]; // Get the audio element

    // Click Events
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        openAudio.play(); // Play the audio when opening
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
