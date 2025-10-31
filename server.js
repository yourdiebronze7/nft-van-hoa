const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chào mừng đến với NFT Văn Hoá!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
