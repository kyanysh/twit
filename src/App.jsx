import React from 'react';

const MainPage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать!</p>
    </div>
  );
};

export default MainPage;

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проведите проверку данных перед отправкой на сервер
    const errors = [];
    if (!formData.name) {
      errors.push('Введите имя.');
    }

    if (!formData.email) {
      errors.push('Введите email.');
    } else if (!isValidEmail(formData.email)) {
      errors.push('Введите корректный email.');
    }

    if (!formData.password) {
      errors.push('Введите пароль.');
    } else if (formData.password.length < 8) {
      errors.push('Пароль должен содержать не менее 8 символов.');
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      // Здесь должен быть ваш код для отправки данных на сервер
      // и обработки успешной регистрации.
      // Предположим, что успешная регистрация перенаправляет пользователя на главную страницу.
      // Здесь используется просто setTimeout для имитации обработки на сервере.
      setTimeout(() => {
        alert('Регистрация прошла успешно!');
        // Здесь вам нужно использовать react-router-dom или другой метод для перенаправления на главную страницу
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
      {errorMessages.length > 0 && (
        <div className="error-messages">
          {errorMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

function isValidEmail(email) {
  // Реализуйте функцию для проверки корректности email-адреса
  // Здесь можно использовать регулярные выражения или другие методы проверки
  return true;
}

