/**
 * @name GagOrder
 * @version 0.0.1
 * @description Removes chat text interface.
 * @author Blackbeard
 * @website https://unforeseenocean.github.io/
 */
 
class GagOrder {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Settings  Panel
    getSettingsPanel() {
        return "<p>No options available for this plugin, moreover you can't speak.</p>";
    }
    
    // Load/Unload
    load() { }

    unload() { }

    // Start/Stop
    start() {
		BdApi.injectCSS("gagorder",".avatar-1EWyVD, .nameTag-sc-gpq { filter: blur(5px) grayscale(1) }; .form-3gdLxP { display: none };");
    }
       
    stop() {
		BdApi.clearCSS("gagorder");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
    }
}

/*
.containerDefault-YUSmu3 a[data-list-item-id$="idOfVoiceChannel"] {
    display:none;
}
usernameContainer-3PPkWq (username)
container-YkUktl (possibly the container for user info and such)
avatar-1EWyVD (probably the user profile picture)
avatarWrapper-1B9FTW (profile picture container)
form-3gdLxP (probably the chat window)
containerDefault-YUSmu3 (possibly the channel selector)
channelTextArea-1FufC0 channelTextArea-1VQBuV
channelTextAreaDisabled-1p2fQv
nameTag-sc-gpq
*/