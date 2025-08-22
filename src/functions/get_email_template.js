function getEmailTemplate(name, email, message) {
    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mensagem</title>
        <style>
            /* Reset */
            body, p, div {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            }

            body {
            background-color: #f4f4f4;
            color: #333333;
            padding: 20px;
            }

            .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 20px;
            }

            .content {
            padding: 20px;
            font-size: 16px;
            line-height: 1.6;
            }

            .footer {
            text-align: center;
            font-size: 12px;
            color: #999999;
            padding: 15px;
            background-color: #f9f9f9;
            }

            @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 10px !important;
            }

            .content {
                font-size: 15px !important;
                padding: 15px !important;
            }

            .header {
                font-size: 18px !important;
                padding: 15px !important;
            }
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            Notificação da Sua Aplicação
            </div>
            <div class="content">
                <p>${name}</p>
                <p>${email}</p>
                <p>${message}</p>
            </div>
            <div class="footer">
            &copy; 2025 Sua Empresa. Todos os direitos reservados.
            </div>
        </div>
        </body>
        </html>
    `
}

module.exports = { getEmailTemplate }