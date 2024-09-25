const axios = require('axios');

exports.handler = async function(event, context) {
  const API_KEY = process.env.GIPHY_API_KEY; // Carga la clave API desde variables de entorno
  const query = event.queryStringParameters.q || 'funny';
  
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: 10
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data from Giphy API', error })
    };
  }
};
