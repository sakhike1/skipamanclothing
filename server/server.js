import express from 'express';
import { envs, Client } from 'stytch'; // Fixed import for Client
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const client = new Client({ // Changed variable name to client
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: envs.test
});

const port = process.env.PORT || 3333; // Corrected the spelling of PORT

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { email, password } = req.body; // Extracted email and password from request body
    try {
        const resp = await client.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60
        });
        res.json({
            success: true, // Changed 'Success' to 'success' for consistency
            message: 'User created successfully',
            token: resp.session_token
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.error_message,
            err: err
        });
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`)); // Fixed template literal
