const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('./../webpack/common.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(require('webpack-hot-middleware')(compiler));
}

const htmlTemplate = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Project</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;
}

// Production middleware
if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(__dirname + './../dist'));
}

// Middlewares
app.disable('x-powered-by')
app.use(cors());
app.use(bodyParser.json());

// Client-side routing excluding static files
app.get(/^(?!\/static\/).*/, (req, res) => {
  res.send(htmlTemplate());
});

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🌎  Express server listening on port %s', port)
  }
});
