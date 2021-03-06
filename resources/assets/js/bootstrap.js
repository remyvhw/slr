require('vue2-animate/dist/vue2-animate.min.css')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    window.alert('CSRF token not found.');
}

/**
 * Load and provision mapbox.
 */
window.mapbox = require('mapbox-gl/dist/mapbox-gl.js');
window.mapbox.accessToken = document.head.querySelector('meta[name="mapbox-pk"]').content;


window.apiRoot = document.head.querySelector('meta[name="api-root"]').content;