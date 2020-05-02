import { expect } from 'chai';
import 'mocha';
import { logWeatherAndTime } from '../src/index'
import {searchLocation, getWeather} from '../util/apiquery';

describe('Test  logWeatherAndTime function ', () => {
  const location =['10005', 'Tokyo', 'São Paulo', 'Pluto']
    it('logWeatherAndTime should be a function',()=>{
      expect(logWeatherAndTime).to.be.ok 
    })

    it('SearchLocation should return an object',(done)=>{
      const givenLocation = 'Kampala';
      const result = searchLocation(givenLocation);
      result.then(data=>{
        expect(data).to.eql({"lat": 0.3177137,"lng": 32.5813539})
        done()
        }).catch(done)

    }).timeout(10000)

    it('getWeather should return an object',(done)=>{
      const givenLocationCoordinates ={
        "lat": 0.3177137,"lng": 32.5813539
      }
      const result = getWeather(givenLocationCoordinates);
      result.then(data=>{
        expect(data).to.eql([ 'Africa/Kampala',
        'Possible light rain and humid throughout the day.' ])
        done()
        }).catch(done)

    }).timeout(10000)


  });