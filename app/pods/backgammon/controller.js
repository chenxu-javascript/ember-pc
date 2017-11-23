import Controller from '@ember/controller';

const countries = [
  { name: 'United States',  id: 1 },
  { name: 'Spain',          id: 2 },
  { name: 'Portugal',       id: 3 },
  { name: 'Russia',         id: 4 },
  { name: 'Latvia',         id: 5 },
  { name: 'Brazil',         id: 6 },
  { name: 'United Kingdom', id: 7 },
];

export default Controller.extend({
  // body
  countries,
  destination: countries[2],
  errors: [
    { message: '测试1' },
    { message: '测试2' },
    { message: '测试3' }
  ],
  myText: '111',
  items: [
    { id: 1, name: '测试1' },
    { id: 2, name: '测试2' },
    { id: 3, name: '测试3' },
    { id: 4, name: '测试4' },
    { id: 5, name: '测试5' },
    { id: 6, name: '测试6' },
    { id: 7, name: '测试7' },
    { id: 8, name: '测试8' },
    { id: 9, name: '测试9' },
    { id: 10, name: '测试10' },
    { id: 11, name: '测试11' },
    { id: 12, name: '测试12' },
    { id: 13, name: '测试13' },
    { id: 14, name: '测试14' },
    { id: 15, name: '测试15' },
  ],
  actions: {
    foo(countries) {
      this.set('destination', countries);
    },
    changeinput(invalue) {
      this.set('invalue', invalue);
    },
    errorsaction() {
      this.set('errors', [
        { message: '测试1' },
        { message: '测试2' },
        { message: '测试3' }
      ]);
    }
  }
});
