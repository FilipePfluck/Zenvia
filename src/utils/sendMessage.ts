import api from '../services/zenvia-api';

export default (message: string, to: string) => { 
  return new Promise(async (resolve, reject) => {
    const response = await api.post('messages', {
      from: 'cheddar-source',
      to,
      contents: [
        {
          type: 'text',
          text: message
        }
      ],
    });
  
    if(response.status === 200) {
      resolve(response.data);
    }else {
      reject('There was an error.')
    }
  })
}