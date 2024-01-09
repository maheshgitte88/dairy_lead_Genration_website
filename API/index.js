const express = require('express')
const cors = require('cors');
const sequelize = require('./config');
const Dairy = require('./models/Dairy');
const app = express();
app.use(express.json())
app.use(cors());
const port = 1000
sequelize.sync();


app.post('/api/dairy/leads', async (req, res) => {
    try {
        const DairyFormData = req.body;

        // Log the received data
        console.log('Received Data:', DairyFormData);

        // Ensure required fields are present
        if (!DairyFormData.name || !DairyFormData.email || !DairyFormData.subject || !DairyFormData.message) {
            return res.status(400).json({ error: 'Incomplete form data. All fields are required.' });
        }

        // Continue with creating the Dairy record
        await Dairy.create(DairyFormData);
        res.json('Form submitted successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});



app.listen(port, () => {
    console.log(`server live one port ${port}`)
})


