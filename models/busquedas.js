const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {
    //TODO: Leer DB si existe
  }

  async ciudad(lugar = "") {
    try {
      // peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?access_token=pk.eyJ1Ijoic295YWxpY2lhZmxvcmVzIiwiYSI6ImNrcW03N2NwZTBrbmcybnAyam9lMnZleHIifQ.omzsGKQAbaAT7kRnjpbLpQ&cachebuster=1625272084609&autocomplete=true&limit=5&language=es`,
      });

      const resp = await instance.get();

      console.log(resp.data.features);
      return []; //retornar los lugares
    } catch (error) {
      return [];
    }
    return [];
  }
}

module.exports = Busquedas;
