import Service from '@ember/service';

export default Service.extend({
    action: function(entry) {
        console.log(entry); // eslint-disable-line no-console
    },

    error: function(entry) {
        console.log(entry); // eslint-disable-line no-console
    },

    info: function(entry) {
        console.log(entry); // eslint-disable-line no-console
    }
});
