"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.get('/hotel', (req, res) => {
    return res.json([
        { id: 1, nama: 'Hotel Teste 1' },
        { id: 2, nama: 'Hotel Teste 2' },
        { id: 3, nama: 'Hotel Teste 3' }
    ]);
});
app.listen(port, () => {
    console.info("api rodando");
});
