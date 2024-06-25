import { StdhubPluginApi } from 'stdhub-plugin-api';
import { stdApiDemo } from "./demo";

export const pluginName = 'stdhub-plugin-template';
export const api = new StdhubPluginApi(pluginName);

stdApiDemo();