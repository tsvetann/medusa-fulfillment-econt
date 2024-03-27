import { request } from "undici";

class EcontRouter {
  private api: string = 'https://demo.econt.com/ee/services';
  private base64Credentials: string = '';

  constructor(api: string, username: string, password: string) {
    this.api = api;
    this.base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
  }

  private async makeRequest(endpoint: string, params: Record<string, any>) {
    const url = new URL(`${this.api}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
      const { statusCode, headers, body } = await request(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${this.base64Credentials}`
        },
        body: JSON.stringify(params)
      });

      if (statusCode !== 200) {
        throw new Error(`Request failed with status code: ${statusCode}`);
      }

      let data = '';
      for await (const chunk of body) {
        data += chunk;
      }

      return JSON.parse(data);
    } catch (error) {
      // Handle error appropriately
      console.error('Error making request to Econt API:', error);
      throw error;
    }
  }

  public async getCities() {
    return this.makeRequest('/Nomenclatures/NomenclaturesService.getCities.json', { countryCode: "BGR" });
  }

  public async getOffices() {
    return this.makeRequest('/Nomenclatures/NomenclaturesService.getOffices.json', { countryCode: "BGR" });
  }
}

export default EcontRouter;