import { api, pluginName } from "./main";

/**
 * This function contains a full demo of APIs of `v0.1.0`.
 */
export async function stdApiDemo() {
  console.log('Read allowlist.json:');
  const allowlist = await api.readFileAsText('allowlist.json');
  console.log(allowlist);

  console.log('Read allowlist.json as bytes:');
  const allowlistBytes = await api.readFileAsBytes('allowlist.json');
  console.log(allowlistBytes);

  console.log('Read config with defaults:');
  const config = await api.readRootConfig({
    foo: 'bar'
  });
  console.log(JSON.stringify(config));

  console.log('The written config file:');
  const configText = await api.readFileAsText(`plugins/${pluginName}/config.yaml`);
  console.log(configText);

  console.log('Read sub config file with defaults:');
  const subConfig = await api.readSubConfig('sub', {
    foo: 'bar'
  });
  console.log(JSON.stringify(subConfig));

  console.log('The written sub config file:');
  const subConfigText = await api.readFileAsText(`plugins/${pluginName}/config.yaml`);
  console.log(subConfigText);

  console.log('Write data:');
  await api.writeData('foo.json', { key: 'val' });
  console.log('Data is successfully written.');

  console.log('Read data:');
  const data = await api.readData('foo.json');
  console.log(JSON.stringify(data));

  console.log('Delete data:');
  await api.deleteData('foo.json');
  console.log('Now read it again. An error will be thrown:');
  await api.readData('foo.json');
}