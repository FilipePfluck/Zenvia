require('dotenv').config();

const desconstructedConnectionURI = {
  protocol: 'mongodb+srv',
  username: 'hack-zenvia',
  password: process.env.DATABASE_PASSWORD,
  domain: 'cluster0.1ar44.mongodb.net', // do not change
  database: 'whatsapp-bot-zenvia',
  params: 'retryWrites=true&w=majority', // do not change
}

const connectionURI = 
  desconstructedConnectionURI.protocol +
  "://" +
  desconstructedConnectionURI.username +
  ":" +
  desconstructedConnectionURI.password +
  "@" + 
  desconstructedConnectionURI.domain +
  "/" +
  desconstructedConnectionURI.database + 
  "?" + 
  desconstructedConnectionURI.params;

export default connectionURI;