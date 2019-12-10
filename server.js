const express = require('express');
path = require('path');
const app = express();

app.use(express.static('./dist/myapp'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/myapp/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000!')
})