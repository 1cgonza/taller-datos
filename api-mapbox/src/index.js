import './scss/styles.scss';
import mapbox from 'mapbox-gl';

const style = 'mapbox://styles/juancgonza/ck5y0rm0d9xu11ijyrpe3gcm2/draft';
const token = 'pk.eyJ1IjoianVhbmNnb256YSIsImEiOiJwTzBYblFBIn0.mrChbL1APmRc2iRak665kQ';

mapbox.accessToken = token;
var map = new mapbox.Map({
  container: 'map',
  style: style,
  zoom: 17.4,
  center: [-74.065, 4.601458]
});
