const express = require('express');
const urlRoute = require('./routes/url')
const {connectToMongo} = require('./connection')
const URL = require('./models/url')

const app = express();
const PORT = 8001;

connectToMongo('mongodb://127.0.0.1:27017/urlShortner').then(()=> console.log("MongoDB connected")).catch((err)=> console.log('Error: ', err));

app.use(express.json())
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory:{
            timestamp: Date.now(),
        }
    }})
    res.redirect(entry.redirectURL)
})

app.listen(PORT, ()=> console.log(`Server Started at port: ${PORT}`))