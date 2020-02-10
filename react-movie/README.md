# React Movie App
영화 예매 서비스 React View - (2020 update)

## 컴포넌트 
* component는 html를 반환하는 함수
* ex) ``ReactDOM.render(<App />, document.getElementById('root'));`` -> 컴포넌트 형태 
* 즉 JSX 형태로 사용

## Axios
* fetch() 위에 있는 작은 Layer
* 설치
    * ``npm i axios``

## async & await
* javascript에서 최근에 나온 비동기 처리 패턴
* 기존의 비동기 처릴 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와주는 코드
* 사용하는 이유?
    * 순서를 보장받기 위해
    * 좀 더 깔끔하게 보여줄 수 있음
    * 비동기 처리 콜백 함수

## 기타
* html class는 Jsx에서 ClassName
    * class나 className이나 같지만 react애서는 class로 만들기 때문에 className으로 속성을 선언해야함