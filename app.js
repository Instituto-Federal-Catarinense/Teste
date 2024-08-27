const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRouter');
const musicRoutes = require('./routes/musicRouter');
const exercicoRoutes = require('./routes/exercicoRoutes'); // Corrigir nome do arquivo de rotas
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/musics', musicRoutes);
app.use('/exercicios', exercicoRoutes); // Corrigir nome do arquivo de rotas

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
