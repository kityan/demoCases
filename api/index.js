const
  express = require('express'),
  fs = require('fs'),
  path = require('path')

const
  app = express(),
  router = express.Router()

const credentials = {
  login: 'root',
  password: 'admin'
}

const cases = JSON.parse(fs.readFileSync(path.resolve(__dirname, './testData.json')))

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  res.set('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', router)

require('http').createServer(app).listen(process.argv[2])

router.get('/cases', (req, res) => res.json(cases))

router.get('/case/:id', (req, res) => res.json(cases.filter((item) => item.caseUid == req.params.id)[0]))

