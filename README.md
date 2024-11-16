
## MilkyWay 프로젝트 React Native 변환 🚀

기존 웹으로 제작된 MilkyWay 프로젝트를 React Native로 변환하는 작업을 진행 중입니다.  React Native CLI를 사용하여 프로젝트를 생성하였으며, 사용 중인 React Native 버전은 `0.76.1`입니다.

---

## **설치 및 실행 가이드**

### **1. 글로벌 의존성 설치**
프로젝트 루트 디렉터리에서 아래 명령어를 실행하여 의존성을 설치:

```bash
npm install
```

---

### **2. iOS 의존성 설치**
ios 네이티브 의존성 설치를 위하여 `ios/` 디렉터리로 이동하여 CocoaPods를 실행:

```bash
cd ios
pod install
cd ..
```

---

### **3. Metro 번들러 시작**
React Native의 Metro 번들러를 실행하여 앱 번들링 시작:

```bash
npm run start
```

또는:

```bash
npx react-native start
```

---

### **4. 앱 실행**
CLI를 사용하여 iOS 또는 Android 앱을 바로 실행할 수 있습니다. 아래 명령어를 참고:

#### iOS 실행
```bash
npx react-native run-ios
```

#### Android 실행
```bash
npx react-native run-android
```

#### CLI 빌드 실패 시 (iOS)
CLI에서 iOS 빌드가 실패하는 경우, Xcode를 사용하여 빌드 및 실행

