const PurgeCSS = require('purgecss');
const unUsed = new PurgeCSS({
  content: ['about.html','contact.html','services.html'],
  css: ['tooplate-clean-work.css'],
});
unUsed.purge().then(cleanCSS => console.log(cleanCSS));
