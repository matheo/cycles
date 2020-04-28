module.exports = {
  name: 'threejs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/threejs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
