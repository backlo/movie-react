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

## React Hook
* state를 가지기 위해서 더이상 class component가 필요없음 
* class component 방식을 다른 방식으로 일함
* 전혀 다른 구조

## Router
* React navigation
* Home, Menu등 페이지에 배치하기 위해 사용
* 심플한 리액트 컴포넌트
    * ``/home -> Home.js으로 보내주는 역할``
    * ex) * ``<Route path="/about" component={About}/>`` // /about에 가면 About.js 보여주는 코드
* Router에도 종류가 있음
    * HashRouter
    * Router
    * BrowserRouter -> github page 설정하기 어려움
* exact
    * path가 중복으로 들어올때 그 path형식만 아니면 랜더링 안한다는 뜻
* Router안에 모든 component를 넣을 필요가 없다
    
## Link
* 새롭게 랜더링 시키는게 아니라 기존 페이지를 부름
* 빠르게 페이지를 보여준다.
* Link를 사용할 경우 router 안에 있어야 한다.

## 기타
* html class는 Jsx에서 ClassName
    * class나 className이나 같지만 react애서는 class로 만들기 때문에 className으로 속성을 선언해야함
* javascript로 문자열 자르기
    * ``{summary.slice(0, 180)}`` //0부터 180글자 까지 보여준다.
