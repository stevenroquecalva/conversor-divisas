const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir recibir JSON y conexiones externas
app.use(express.json());
app.use(cors());

// Factores de conversión (Valores aproximados fijos para el ejercicio)
const TASAS = {
    EURO: 21.50, // 1 Euro = 21.50 MXN
    USD: 20.10,  // 1 Dólar = 20.10 MXN
    CAD: 14.20,  // 1 Dólar Canadiense = 14.20 MXN
    GBP: 25.30   // 1 Libra = 25.30 MXN
};

// Ruta base para verificar que el servidor vive
app.get('/', (req, res) => {
    res.send('Servicio de Divisas Activo - Steven Roque - UPP');
});

// --- MÉTODOS DE MONEDA EXTRANJERA A PESOS MXN ---

// 1. Euro a Pesos
app.post('/api/euro-mxn', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad * TASAS.EURO;
    res.json({ origen: 'Euro', destino: 'MXN', cantidad, resultado });
});

// 2. Dólar US a Pesos
app.post('/api/usd-mxn', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad * TASAS.USD;
    res.json({ origen: 'USD', destino: 'MXN', cantidad, resultado });
});

// 3. Dólar Canadiense a Pesos
app.post('/api/cad-mxn', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad * TASAS.CAD;
    res.json({ origen: 'CAD', destino: 'MXN', cantidad, resultado });
});

// 4. Libra a Pesos
app.post('/api/gbp-mxn', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad * TASAS.GBP;
    res.json({ origen: 'GBP', destino: 'MXN', cantidad, resultado });
});

// --- MÉTODOS DE PESOS MXN A MONEDA EXTRANJERA ---

// 5. Pesos a Euro
app.post('/api/mxn-euro', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad / TASAS.EURO;
    res.json({ origen: 'MXN', destino: 'Euro', cantidad, resultado: resultado.toFixed(2) });
});

// 6. Pesos a Dólar US
app.post('/api/mxn-usd', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad / TASAS.USD;
    res.json({ origen: 'MXN', destino: 'USD', cantidad, resultado: resultado.toFixed(2) });
});

// 7. Pesos a Dólar Canadiense
app.post('/api/mxn-cad', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad / TASAS.CAD;
    res.json({ origen: 'MXN', destino: 'CAD', cantidad, resultado: resultado.toFixed(2) });
});

// 8. Pesos a Libra
app.post('/api/mxn-gbp', (req, res) => {
    const { cantidad } = req.body;
    const resultado = cantidad / TASAS.GBP;
    res.json({ origen: 'MXN', destino: 'GBP', cantidad, resultado: resultado.toFixed(2) });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});