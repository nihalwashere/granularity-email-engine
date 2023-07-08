
module.exports = async ({config, mode}) => {
  config.node = {fs: 'empty', tls: 'empty', net: 'empty', module: 'empty'};
  return config;
  
};