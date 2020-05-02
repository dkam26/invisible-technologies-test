import * as chalk from 'chalk'
import {searchLocation, getWeather} from '../util/apiquery';


export const logWeatherAndTime =(locations:Array<String>)=>{
    locations.map(location=>{
        searchLocation(location).then(data=>{
            getWeather(data).then(
                data=>{
                    let time = new Date().toLocaleString("en-US", {
                        timeZone: data[0]
                      })
                    let weatherDescription = data[1]
                    console.log('Time: ',chalk.cyan(time), 'Weather: ',chalk.cyan(weatherDescription))
                }).catch(err=>console.log(err))
         }
        ).catch(err=>console.log(err))
    })
}

const location =['10005', 'Tokyo', 'São Paulo', 'Pluto']
logWeatherAndTime(location)