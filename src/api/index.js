
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {


// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '301dc842ddmshb32b37149e9054ap1b196cjsn95cef2dbc1c7',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })

        return data
    } catch (error) {
        console.log(error);
    }
}