import fetch from 'cross-fetch';

export class healthz {
  constructor() {}

  public async getHealthz(): Promise<{ data?: any; error?: string }> {
    try {
      const res = await fetch('https://api.rootexit.com/rex/v5/apis/healthz');

      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      const data = await res.json();
      return {
        data: data
      };
    } catch (err) {
      console.error(err);
      return {
        error: err instanceof Error ? err.message : 'Unknown error'
      };
    }
  }
}
