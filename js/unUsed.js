const PurgeCSS = require('purgecss');
const purgeCSS = new PurgeCSS({
  content: ['about.html'],
  css: ['tooplate-clean-work.css'],
});
purgeCSS.purge().then(result => console.log(result));