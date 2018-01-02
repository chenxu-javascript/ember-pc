import Service from '@ember/service';

export default Service.extend({
  action(entry) {
    console.log(entry); // eslint-disable-line no-console
  },

  error(entry) {
    console.log(entry); // eslint-disable-line no-console
  },

  info(entry) {
    console.log(entry); // eslint-disable-line no-console
  }
});
