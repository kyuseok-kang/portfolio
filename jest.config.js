module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg'
  }
};
