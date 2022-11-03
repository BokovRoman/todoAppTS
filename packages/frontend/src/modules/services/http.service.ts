// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { IStatusPrivate, IStatusCompleted } from '../common/types/todos.type';
import { IUser } from '../common/types/user.types';

interface IInitialValue {
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
}

interface IConfig {
  url: string;
  data?: IInitialValue | IUser | IStatusPrivate | IStatusCompleted;
  id?: string;
  [key: string]: any;
}

export class HttpSerivce {
  baseUrl: string | undefined;

  fetchingService: any;

  apiVersion: string;

  constructor(baseUrl = 'http://localhost:4200', fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig(): { Authorization: string | null } {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')?.slice(1, -1)}`
    };
  }

  private extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }: IConfig) {
    return configWithoutDataAndUrl;
  }

  get(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  add(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  getOne(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(`${config.url}/${config.id}`),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  remove(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(`${config.url}/${config.id}`),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(`${config.url}/${config.id}`),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  updatePrivateField(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.patch(
      this.getFullApiUrl(`${config.url}/${config.id}/private`),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  updateCompletedField(config: IConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.patch(
      this.getFullApiUrl(`${config.url}/${config.id}/completed`),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
