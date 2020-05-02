
import * as request from 'request';
require('dotenv').config();
export const searchLocation = (location:String) => {
    return new Promise((resolve, reject) =>{
        request.get(encodeURI(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.GEOCODE_KEY}`), { json: true }, (error:any, response:any, body:any)=> {
          const locationCoordinates = body.results[0].geometry

        return resolve(locationCoordinates);
      });
    })
}

export const  getWeather = (coordinates) =>{
  return new Promise(function (resolve, reject) {
    request.get(`https://api.darksky.net/forecast/${process.env.DARKSKYAPI_KEY}/` + coordinates.lat + ',' + coordinates.lng + '?exclude=currently,hourly,flags', { json: true }, function (res, body) {
    const weatherDescription = [body['body'].timezone, body['body'].daily.data[2].summary]
    return resolve(weatherDescription);
    });
  });
};