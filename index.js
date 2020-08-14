const app = require('./src/app');
require('./src/database/database');

app.listen(app.set('port'));
console.log('server running on port '+ app.set('port'))

module.exports = app;