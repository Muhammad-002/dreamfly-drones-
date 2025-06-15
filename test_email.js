const nodemailer = require('nodemailer');
const fs = require('fs');

// Читаем .env файл
const envContent = fs.readFileSync('/home/ubuntu/droneshow/app/.env', 'utf8');
const envLines = envContent.split('\n');
const env = {};

envLines.forEach(line => {
  if (line.includes('=') && !line.startsWith('#')) {
    const [key, value] = line.split('=');
    env[key] = value.replace(/"/g, '');
  }
});

console.log('EMAIL_USER:', env.EMAIL_USER);
console.log('EMAIL_PASS length:', env.EMAIL_PASS ? env.EMAIL_PASS.length : 'undefined');

// Создаем транспортер
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS
  }
});

// Тестируем подключение
console.log('Тестируем подключение к Gmail...');
transporter.verify((error, success) => {
  if (error) {
    console.error('Ошибка подключения:', error);
  } else {
    console.log('✅ Подключение к Gmail успешно!');
    
    // Отправляем тестовое письмо
    const mailOptions = {
      from: env.EMAIL_USER,
      to: env.EMAIL_USER,
      subject: 'Тест email уведомлений DroneShow',
      html: `
        <h2>🚁 Тест email системы DroneShow</h2>
        <p>Это тестовое письмо для проверки работы email уведомлений.</p>
        <p>Время отправки: ${new Date().toLocaleString('ru-RU')}</p>
        <p>Пароль приложения Gmail работает корректно!</p>
      `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Ошибка отправки:', error);
      } else {
        console.log('✅ Тестовое письмо отправлено успешно!');
        console.log('Message ID:', info.messageId);
      }
    });
  }
});
