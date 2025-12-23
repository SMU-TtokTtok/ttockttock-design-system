# Changesets로 npm 배포 자동화 설정 완료!

## 🚀 사용 방법

### 1️⃣ 변경사항 기록하기

```bash
npm run changeset
# 또는
npx changeset
```

터미널에서 대화형 프롬프트가 나타납니다:

```
🦋  Which packages would you like to include?
   ✔ ttockttock-design-system

🦋  What kind of change is this?
   ◉ patch (버그 수정)
   ◯ minor (기능 추가)
   ◯ major (Breaking change)

🦋  Summary: (변경 내용 작성)
   > Add dark mode support to Button
```

이렇게 하면 `.changeset/` 폴더에 변경 내용이 기록됩니다.

### 2️⃣ PR 생성 및 main 브랜치 머지

```bash
git add .
git commit -m "feat: add dark mode to Button"
git push origin feature/dark-mode
```

PR을 만들고 **main 브랜치에 머지**하면:

### 3️⃣ 자동으로 실행됨 🎉

GitHub Actions가 자동으로:

1. **변경사항 확인**

   - `.changeset/` 폴더에 파일이 있는지 확인

2. **Version PR 생성** (첫 번째 실행)

   - `package.json` 버전 업데이트
   - `CHANGELOG.md` 자동 생성
   - "Version Packages" PR 자동 생성

3. **Version PR 머지 시 자동 배포**
   - npm build 실행
   - npm 배포
   - GitHub Release 생성

---

## ⚙️ GitHub 설정 필요사항

### NPM_TOKEN 등록

1. **npm 토큰 생성**

   ```bash
   # npmjs.com에 로그인 후
   # Access Tokens → Generate New Token → Automation
   ```

2. **GitHub Repository Settings**

   ```
   Settings → Secrets and variables → Actions
   → New repository secret

   Name: NPM_TOKEN
   Secret: (npm 토큰 붙여넣기)
   ```

3. **GITHUB_TOKEN**은 자동으로 제공됨 (설정 불필요)

---

## 📝 워크플로우 예시

### 개발자 A: Button 컴포넌트 수정

```bash
# 1. 코드 수정
# 2. changeset 생성
npm run changeset
# ➜ patch 선택
# ➜ "Fix button hover animation"

# 3. 커밋 & PR
git add .
git commit -m "fix: button hover animation"
git push
```

### 개발자 B: Input 컴포넌트 추가

```bash
npm run changeset
# ➜ minor 선택
# ➜ "Add Input component with validation"

git add .
git commit -m "feat: add Input component"
git push
```

### main 브랜치 머지 후

→ GitHub Actions가 "Version Packages" PR 자동 생성:

```markdown
# Version Packages

## ttockttock-design-system@0.2.0

### Minor Changes

- a1b2c3d: Add Input component with validation

### Patch Changes

- d4e5f6: Fix button hover animation
```

### Version PR 머지 시

→ 자동으로 npm 배포! 🎉

---

## ✅ 장점

- ✅ 수동 버전 관리 불필요
- ✅ CHANGELOG 자동 생성
- ✅ 실수 방지 (changeset 없으면 배포 안 됨)
- ✅ 리뷰 가능한 버전 업데이트
- ✅ 완전 자동 배포

---

## 💡 팁

- **changeset 작성 시점**: PR 만들기 전
- **커밋 메시지**: changeset에 자세히 쓰면 커밋 메시지는 간단하게
- **Breaking change**: major 버전은 신중하게!

이제 코드만 작성하고 changeset 추가하면, 배포는 자동입니다! 🚀
