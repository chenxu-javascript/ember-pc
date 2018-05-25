/**
 * 检查business/目录下的组件是否在app目录下的文件中被使用，如果没有使用则删除
 * @author tongliang 2018 02 09
 **/
var path = require("path");
var fs = require("fs");
var arrJs = [];

var imgDir = 'app/';
var appDir = 'app';

walkImgDir(imgDir);

function walkImgDir(fileName) {
  if (!fs.existsSync(fileName)) return;
  if (isFile(fileName)) {
    checkAppForImg(fileName);
  }
  if (isDirectory(fileName)) {
    var files = fs.readdirSync(fileName);
    files.forEach(function(val) {
      var temp = path.join(fileName, val);
      if (isDirectory(temp)) walkImgDir(temp);
      if (isFile(temp)) checkAppForImg(temp);
    })
  }
}

function checkAppForImg(imgName) {
  if (walkAppDir(appDir, imgName)) {
  //  console.log('used:', imgName);
  } else {
    console.log('unused:', imgName);
  }
}

function walkAppDir(appDir, imgName) {
  var fileName = appDir;
  if (!fs.existsSync(fileName)) return false;
  if (isFile(fileName) && checkUsed(fileName, imgName)) {
    return true;
  }
  if (isDirectory(fileName)) {
    var files = fs.readdirSync(fileName);

    for(var i = 0; i< files.length; i++) {
      var val = files[i];
      var temp = path.join(fileName, val);
      if (isDirectory(temp) && walkAppDir(temp, imgName)) {
        return true;
      }
      if (isFile(temp) && checkUsed(temp, imgName)) {
        return true;
      }
    }
  }
  return false;
}

function checkUsed(appFile, imgFile) {
  if (imgFile.indexOf('DS_Store') !== -1) {
    return true;
  }
  if (imgFile.indexOf('.js') === -1) {
    return true;
  }
  if (imgFile.indexOf('home-custom-module') !== -1) {
    return true;
  }
  if (imgFile.indexOf('formbuilder') !== -1) {
    return true;
  }
  if (imgFile.indexOf('components') === -1 &&
      imgFile.indexOf('component.js') === -1
  ) {
    return true;
  }
  if (imgFile.indexOf('-') === -1) {
    return true;
  }
  // if (arrJs.indexOf(imgFile) === -1) {
  //   arrJs.push(imgFile);
  // }
  var data = readFile(appFile);
  var imgName = imgFile.replace(/app\/(pods\/)?(components\/)?(.*?)(\/component)?\.js/, '$3');
  imgName = imgName.replace(/\//g, '\\/').replace(/\-/g, '\\-');
  var exc = new RegExp('\\{\\{#?'+imgName);
  // var importExc = new RegExp('import .*?' + imgName);
  var importExc = new RegExp('import .*?' + imgName.replace(/^.*?([\w-]+)\.js$/, '$1') +'\';?$', 'm');
  var compHelperExc = new RegExp('component [\'"]' + imgName +'[\'"]');
  if (exc.test(data) || importExc.test(data) || compHelperExc.test(data)) {
    // console.log('used:', imgName, ', in file: ', appFile);
    return true;
  }
  return false;
}


function isDirectory(fileName) {
  if (fs.existsSync(fileName)) return fs.statSync(fileName).isDirectory();
}

function isFile(fileName) {
  if (fs.existsSync(fileName)) {
    return fs.statSync(fileName).isFile();
  }
}

function readFile(fileName) {
  if (fs.existsSync(fileName)) return fs.readFileSync(fileName, "utf-8");
}
