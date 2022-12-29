import HttpClient from './utils/HttpClient';

class GetDatasAPIService {
  constructor() {
    this.httpClient = new HttpClient('https://servicodados.ibge.gov.br/api/v1/localidades');
  }

  async listStates() {
    return this.httpClient.get('/estados');
  }

  async listCountysForUF(UF) {
    return this.httpClient.get(`/estados/${UF}/municipios`);
  }

  async listDetailsToCounty(countySelected) {
    return this.httpClient.get(`/municipios/${countySelected}`);
  }
}

export default new GetDatasAPIService();
