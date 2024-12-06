import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class DndApiService {
  private readonly apiBaseUrl: string;

  constructor(private configService: ConfigService) {
    this.apiBaseUrl = this.configService.get<string>('DND_API_URL');
    if (!this.apiBaseUrl) {
      throw new Error(
        'DND_API_URL is not defined in the environment variables',
      );
    }
  }

  async getApiResource(endpoint: string) {
    try {
      const url = `${this.apiBaseUrl}/${endpoint}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching D&D API resource: ${error.message}`);
      throw new Error('Failed to fetch resource from D&D API');
    }
  }
}
