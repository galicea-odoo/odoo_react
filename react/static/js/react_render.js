odoo.define('react_dashboards.dashboard', function(require) {
    "use strict";
    
        var core = require('web.core');
    
/*
// Only on first display!:      
        core.bus.on('web_client_ready', null, function () {
*/
        core.bus.on('DOM_updated', null, function () {
            if (window.reactLink) {
              Object.keys(window.reactLink).forEach(item => {
                 console.log("React - check:" + item);
                 if (document.getElementById(item)) {
                    console.log('React Render');
                    window.reactLink[item]('');
                 }                
              });
            }
        });
});
