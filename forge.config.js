module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './public/imgs/logo.png',
        format: 'ULFO',
        name: 'AIO',
        overwrite: true,
        additionalDMGOptions: {
          window: {
            position: {
              x: 110,
              y: 150
            },
            size: {
              height: 600,
              width: 500
            }
          }
        }
      }
    }
  ],
};
