import { StdhubPluginApi } from 'stdhub-plugin-api';
import { stdhubApiDemo } from './stdhub-api-demo';

export const pluginName = 'demo';
export const api = new StdhubPluginApi(pluginName);

stdhubApiDemo();