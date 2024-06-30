import { StdhubPluginApi } from 'stdhub-plugin-api';
import { storageApiDemo } from './storage-api-demo';
import { commandDemo } from './command-demo';

export const pluginName = 'demo';
export const api = new StdhubPluginApi(pluginName);

storageApiDemo();
commandDemo(); // execute custom command with prefix `.` instead of `/`