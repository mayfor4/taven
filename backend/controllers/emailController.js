/*const nodemailer = require('nodemailer');

// Configura el transportador de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'diegoorios97@gmail.com', // Reemplaza con tu correo electrónico
        pass: 'dejt ofdx zybh vrgr' // Reemplaza con tu contraseña de correo electrónico
    }
});

const sendEmail = async (req, res) => {
    const { nombre_cli, tel_cli, cotizacion } = req.body;

    const mailOptions = {
        from: 'diegoorios97@gmail.com', // Reemplaza con tu correo electrónico
        to: 'diegoorios97@gmail.com', // Reemplaza con el correo electrónico de destino
        subject: 'Nueva Solicitud de Cotización',
        text: `Nombre del cliente: ${nombre_cli}\nTeléfono del cliente: ${tel_cli}\nCotización: ${cotizacion}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al enviar el correo', error: err });
    }
};

module.exports = {
    sendEmail
};
*/