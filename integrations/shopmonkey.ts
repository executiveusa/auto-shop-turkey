import axios from 'axios';

type ShopmonkeyConfig = {
  apiKey: string;
  baseUrl?: string;
};

type AppointmentPayload = {
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  notes?: string;
};

const DEFAULT_BASE_URL = 'https://api.shopmonkey.io/v1';

export class ShopmonkeyClient {
  private readonly api: ReturnType<typeof axios.create>;

  constructor({ apiKey, baseUrl = DEFAULT_BASE_URL }: ShopmonkeyConfig) {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async createAppointment(tenantId: string, payload: AppointmentPayload) {
    return this.api.post(`/tenants/${tenantId}/appointments`, payload);
  }

  async listAppointments(tenantId: string) {
    const { data } = await this.api.get(`/tenants/${tenantId}/appointments`);
    return data;
  }

  async syncQuote(tenantId: string, quote: Record<string, unknown>) {
    return this.api.post(`/tenants/${tenantId}/quotes`, quote);
  }
}

export default ShopmonkeyClient;
