import axios from 'axios';

export default function GetRecipientLocation(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
