import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.zenvia.com/v1/channels/whatsapp',
  headers: {
    'Content-Type': 'application/json',
    'X-API-TOKEN': 'FH8z_qMy70nuWnCLqsEDMIiT6_pdKvFLJker'
  } 
});

/* {
    "from":"cheddar-source",
    "to":"5535991857011",
    "contents":[
      {
        "type": "text",
        "text": "Salve"
      }
    ]
  }
*/