import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
// Enable CORS to allow requests from the front-end
app.use(cors({
    origin: 'http://localhost:3000',
}));
// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the back-end!!!!' });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map