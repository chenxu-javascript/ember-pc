'use strict';

define('chenxu/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/main-content/header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/main-content/header/component.js should pass ESLint\n\n9:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n9:11 - \'$\' is not defined. (no-undef)\n10:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n10:9 - \'$\' is not defined. (no-undef)\n12:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n12:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/classNameChange.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/classNameChange.js should pass ESLint\n\n5:7 - \'array\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/is-eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-eq.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/set.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/set.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/logger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/logger.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/route-injector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/route-injector.js should pass ESLint\n\n');
  });

  QUnit.test('models/utils.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/utils.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/application/component.js should pass ESLint\n\n6:5 - \'bsLoad\' is not defined. (no-undef)');
  });

  QUnit.test('pods/application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/backgammon/blog-post/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/backgammon/blog-post/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/backgammon/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/backgammon/controller.js should pass ESLint\n\n17:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/backgammon/did-render/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/backgammon/did-render/component.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/backgammon/profile-editor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/backgammon/profile-editor/component.js should pass ESLint\n\n8:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/backgammon/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/backgammon/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/block-holder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/block-holder/component.js should pass ESLint\n\n10:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/components/ember-fn/embera/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/ember-fn/embera/component.js should pass ESLint\n\n11:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/components/main-content/footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/main-content/footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/main-content/header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/main-content/header/component.js should pass ESLint\n\n9:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n9:11 - \'$\' is not defined. (no-undef)\n10:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n10:9 - \'$\' is not defined. (no-undef)\n12:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n12:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/components/main-content/sidebar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/main-content/sidebar/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/main-content/wrapper/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/main-content/wrapper/component.js should pass ESLint\n\n8:5 - \'$\' is not defined. (no-undef)\n8:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n13:22 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n13:22 - \'$\' is not defined. (no-undef)\n14:24 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n14:24 - \'$\' is not defined. (no-undef)\n15:26 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n15:26 - \'$\' is not defined. (no-undef)\n17:25 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n17:25 - \'$\' is not defined. (no-undef)\n18:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n18:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/components/yield-blog/post/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/yield-blog/post/component.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/concurrency/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-five/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/version-five/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-four/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/version-four/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-one/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/concurrency/version-one/component.js should pass ESLint\n\n7:7 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/concurrency/version-seven/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/version-seven/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-six/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/version-six/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-three/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/concurrency/version-three/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/concurrency/version-two/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/concurrency/version-two/component.js should pass ESLint\n\n10:7 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/css/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/css/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/css/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/css/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/ember/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/ember/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/ember/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/ember/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/ember/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/ember/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/emberarray/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/emberarray/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/emberarray/em-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/emberarray/em-array/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/emberarray/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/emberarray/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/emberfn/embera/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/emberfn/embera/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/img/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/img/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/img/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/img/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/index-common/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/index-common/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/injectsevers/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/injectsevers/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/injectsevers/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/injectsevers/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/lottery/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/lottery/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/lottery/lottery-gift/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/lottery/lottery-gift/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/lottery/lottery-win/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/lottery/lottery-win/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/lottery/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/lottery/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/powerselect/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/powerselect/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/powerselect/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/powerselect/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/select/component.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:14 - \'_\' is not defined. (no-undef)');
  });

  QUnit.test('pods/select/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/select/controller.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/select/mulite-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/select/mulite-select/component.js should pass ESLint\n\n7:12 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('pods/select/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/select/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/select/single-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/select/single-select/component.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/select/singlemut-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/select/singlemut-select/component.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n10:12 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('pods/sfa/productrevenue/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/sfa/productrevenue/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/sfa/productrevenue/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/sfa/productrevenue/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/team/area-line/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/team/area-line/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/team/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/team/controller.js should pass ESLint\n\n5:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/team/header-content/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/team/header-content/component.js should pass ESLint\n\n7:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/team/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/team/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/team/team-industry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/team/team-industry/component.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/team/team-leader/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/team/team-leader/component.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/team/team-other/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/team/team-other/component.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('pods/teamv5/common-tree/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/teamv5/common-tree/component.js should pass ESLint\n\n11:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/teamv5/commonflex-tree/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/teamv5/commonflex-tree/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/teamv5/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/teamv5/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/teamv5/modal-tree/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/teamv5/modal-tree/component.js should pass ESLint\n\n10:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/teamv5/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/teamv5/route.js should pass ESLint\n\n5:12 - \'$\' is not defined. (no-undef)\n13:7 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/teamv5/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/teamv5/test.js should pass ESLint\n\n');
  });

  QUnit.test('pods/text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/text/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/text/my-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/text/my-text/component.js should pass ESLint\n\n7:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('pods/text/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/text/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/crlf-llf/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/crlf-llf/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/my-input/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/my-input/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/yield/yield-dialog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/yield/yield-dialog/component.js should pass ESLint\n\n9:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n9:11 - \'$\' is not defined. (no-undef)\n9:41 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n9:41 - \'$\' is not defined. (no-undef)\n23:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n23:7 - \'$\' is not defined. (no-undef)\n27:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n27:11 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('pods/yield/yield-yield/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/yield/yield-yield/component.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('services/logger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/logger.js should pass ESLint\n\n');
  });

  QUnit.test('services/shopping-cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/shopping-cart.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass ESLint\n\n3:12 - \'fade\' is defined but never used. (no-unused-vars)');
  });
});
define('chenxu/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('chenxu/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  var keyEvent = function keyEvent(app, attributes, type, element) {
    var event = (attributes || '').split('+').reduce(function (event, attribute) {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[attribute + 'Key'] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define('chenxu/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('chenxu/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'chenxu/tests/helpers/start-app', 'chenxu/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('chenxu/tests/helpers/resolver', ['exports', 'chenxu/resolver', 'chenxu/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('chenxu/tests/helpers/start-app', ['exports', 'chenxu/app', 'chenxu/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('chenxu/tests/helpers/x-select', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.select = select;


  /**
   * Picks an option from the select and sets it to be `selected` in the DOM.
   *
   * @method select
   * @param {string|<jQuery>} selector - selector for the select to pick from.
   * @param {string} texts - text of the option you are picking
   */
  function select(selector) {
    for (var _len = arguments.length, texts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      texts[_key - 1] = arguments[_key];
    }

    var $select = selector instanceof Ember.$ ? selector : Ember.$(selector);
    var $options = $select.find('option');

    if (!$options.length) {
      throw 'No options found in ' + selector;
    }

    $options.each(function () {
      var _this = this;

      var $option = Ember.$(this);

      Ember.run(function () {
        _this.selected = texts.some(function (text) {
          // uppercase both texts so the helper isn't case sensastive.
          var optionText = $option.text().trim().toUpperCase();

          return optionText === text.toUpperCase();
        });

        if (_this.selected) {
          $option.prop('selected', true).trigger('change');
        }
      });
    });
  }
});
define('chenxu/tests/test-helper', ['chenxu/app', 'chenxu/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('chenxu/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('chenxu/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
