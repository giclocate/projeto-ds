const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { sessionMiddleware, setUserSession } = require("./middlewares/sessionMiddleware");
const sequelize = require('./config/database');

// IMPORTA OS MODELOS
const Product = require('./models/product');
const Favorite = require('./models/favorite');

// RELACIONAMENTOS
Product.hasMany(Favorite, { foreignKey: 'productId' });
Favorite.belongsTo(Product, { foreignKey: 'productId' });

const app = express();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco estabelecida.');

    await sequelize.query(`CREATE SCHEMA IF NOT EXISTS "produtos_sociais";`);
    console.log('✅ Schema produtos_sociais garantido.');

    // Sincroniza os modelos (em ordem implícita pela relação)
    await sequelize.sync({ alter: true });
    console.log('✅ Tabelas sincronizadas.');
  } catch (err) {
    console.error('❌ Erro ao sincronizar tabelas:', err);
  }
})();

// Middlewares
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3008",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(sessionMiddleware);
app.use(setUserSession);

// Rotas
app.use('/products', require('./routes/products'));
app.use('/favorites', require('./routes/favorites'));
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

const PORT = process.env.PORT || 3018;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
