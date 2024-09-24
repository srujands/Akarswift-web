const express = require('express');
const multer = require('multer');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 5123;

// Set up SendGrid API key (replace with your actual SendGrid API key)
sgMail.setApiKey('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');

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Configure multer for file uploads (using memory storage to keep the file in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint to handle form submission
app.post('/api/apply', upload.single('resume'), (req, res) => {
    const { jobTitle, name, email, phone, about } = req.body;
    const resume = req.file;

    if (!resume) {
        return res.status(400).send('No resume file uploaded.');
    }

    // Prepare the SendGrid message
    const msg = {
        to: 'careers@akarmaxs.in', // The recipient email
        from: {
            name: "Akarswift Career", // Custom label
            email: "manjunath@akarmaxs.in" // Verified sender email
        },
        replyTo:email,
        subject: `Job Application: ${name}`,
        text: `Job Title: ${jobTitle}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAbout: ${about}`,
        attachments: [
            {
                content: resume.buffer.toString('base64'),
                filename: resume.originalname,
                type: resume.mimetype,
                disposition: 'attachment',
            },
        ],
    };

    // Send the email using SendGrid
    sgMail
        .send(msg)
        .then(() => res.send('Application submitted successfully'))
        .catch((error) => {
            console.error('Error sending email:', error.response.body.errors);
            res.status(500).send('Failed to submit application');
        });
});



app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
  
    const msg = {
      to: 'careers@akarmaxs.in', // The recipient email
      from: `Akarswift Contact Us Support <manjunath@akarmaxs.in>`, // The verified sender email
      subject: `Job Application: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).send('Message sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending message');
    }
  });
  
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });








// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
