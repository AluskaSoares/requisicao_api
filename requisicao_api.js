const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  axios.get('https://calendarific.com/api/v2/holidays', {
    params: {
      api_key: '97bfee977e60285eab08fb50bf9dc4bdf3773579',
      country: 'BR', 
      year: '2023',
    },
  })
    .then(response => {
      const holidays = response.data.response.holidays;
      let html = '<h1>Datas Comemorativas</h1>';
      holidays.forEach(holiday => {
        html += `<p>${holiday.name}</p>`;
      });
      res.send(html);
    })
    .catch(error => {
      console.error(error);
      res.send('Erro ao obter as datas comemorativas');
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


