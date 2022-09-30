require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REFRESH_TOKEN;


function getActivities(res) {
  const activity_url = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}&`
  let result = [];

  fetch(activity_url) 
  .then (res => res.json())
  .then (res => {
    if (res.length > 0) {
      for(let i = 0; i< res.length; i++){
        let obj= {};
        obj.id = res.length -i;
        obj.distance = Number(((res[i].distance)/1000).toFixed(1));
        dateFormatter
        // obj.startDate = res[i].start_date;
        obj.startDate = dateFormatter(res[i].start_date);
        result.push(obj);
      }
    }
    result.reverse();
    console.log('today, you ran: ', sumCalculator(result), result);
////////////////////////////////////////////////////////////////////////////////////////////////

    app.get('/api/records', (req, res) => {
      res.json(result)
      console.log('records sent')
    })

    app.get('/api/sum', (req, res) => {
      const sum = sumCalculator(result);
      res.json(sum)
      console.log('sum sent')
    })

  }) 
}

function reAuthorize() {
  const auth_url = `https://www.strava.com/oauth/token`;

  fetch(auth_url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      client_id: client_id, 
      client_secret: client_secret,
      refresh_token: refresh_token,
      grant_type: 'refresh_token'
    })
  })
  .then(res => res.json())
  .then(res => getActivities(res))
}

function sumCalculator( data ) {
  // let initialValue = 0;
  // const sum = data.reduce((prev, curr) => {prev+curr}, initialValue);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].distance;
  }
  return sum;
}


function dateFormatter(date) {
  const rawDate = new Date(date);
  let dd = rawDate.getDate();
  let mm = rawDate.getMonth() + 1;
  let yyyy = rawDate.getFullYear();

  if(dd<10) {
    dd = '0' + dd;
  }
  if(mm < 10) {
    mm = '0' + mm;
  }

  const formattedDate = yyyy + '/' + mm + '/' + dd;
  return formattedDate; 
}


reAuthorize();

////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const cors = require('cors')
 
app.use(cors())

const PORT = 3003;
app.listen(PORT, ()=> {console.log(`Server Running on ${PORT}`)});

// app.get("/api2", (req, res) => {
//   res.json(
//     {"result": result}
//     )
// })


