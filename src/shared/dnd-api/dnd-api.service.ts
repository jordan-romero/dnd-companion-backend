import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DndApiService {
  private readonly apiBaseUrl: string = process.env.DND_API_URL || '';

  async getApiResource<T>(endpoint: string): Promise<T> {
    try {
      const url = `${this.apiBaseUrl}/${endpoint}`;
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching API resource: ${error.message}`);
      throw new Error('Failed to fetch resource from D&D API');
    }
  }
}
