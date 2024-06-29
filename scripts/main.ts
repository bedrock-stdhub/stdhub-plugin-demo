import { StdhubPluginApi } from 'stdhub-plugin-api';
import { stdhubApiDemo } from './stdhub-api-demo';
import { commandDemo } from './command-demo';

export const pluginName = 'demo';
export const api = new StdhubPluginApi(pluginName);

stdhubApiDemo();
commandDemo(); // execute custom command with prefix `.` instead of `/`