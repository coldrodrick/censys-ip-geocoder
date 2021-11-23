// pages/api/geocodeIp.js

const Reader = require('@maxmind/geoip2-node').Reader;


export default function handler(req, res) {
  Reader.open('/usr/src/app/public/GeoLite2-City.mmdb', {})
    .then(reader => {
      const location = reader.city(req.body.ip_address).location;
      res.status(200).json({ location_geocoded: location });
    })
    .catch(err =>res.status(500).send(err));
}