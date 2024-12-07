module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // React가 반드시 scope에 있어야 한다는 규칙 비활성화
  },
};
