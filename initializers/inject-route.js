export function initialize(application) {
  application.inject('component', 'router', 'route:application');
}

export default { initialize };
