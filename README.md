# React 스터디 저장소

리액트 스터디 저장소 입니다. 노마드코더 강의 기준으로 정리하여 올리겠습니다. :)


## 목차 
1. React란?
    1. [React 소개](#react-소개)
    2. [Angular vs React vs Vue](#angular-vs-react-vs-vue)
    3. [Why React?](#why-react)
2. React에 대하여
    1. [ES6란?](#es6)
    2. [Webpack](#webpack)
    3. [JSX](#jsx)
    4. [React vs React DOM](#react-vs-react-dom)
    5. [Props vs State](#state-vs-props)
        1. [Props](#props)
        2. [State](#State)
    6. [React LifeCycle](#react-lifecycle)

## React 소개
* 컴포넌트라는 개념이 집중되어 있는 라이브러리
    * 프레임워크가 아니다!!!
* JavaScript + 약간의 HTML
* 데이터를 넣으면 우리가 지정한 인터페이스를 조립해서 보여줌
    * 빈 Html을 보여준 후 React가 컴포넌트를 조립해서 해당 Html에 조립해서 보여준다
* React는 View이기 때문에 원하는데에서 사용할 수 있는 장점
    * React + Spring Boot
    * React + Ruby on Rails
    * React + Node JS ...


## Angular vs React vs Vue

#### Angular
* http 클라이언트, 라우터, 다국어 지원
* 많은 기업에서 사용
* 많은 다른 라이브러리로 넘어가는 추세
* 인지도 측면에서 성장하는 단계지만 메인으로 잘 안씀
* 타입스크립트 사용이 기본

#### React
* 컴포넌트 개념이 집중되어 있는 라이브러리
* 위에 설명 참고

#### Vue
* CDN으로 불러와서 사용
* Html같은 템플릿을 사용
* Markup이나 Publisher가 있으면 작업 흐름이 쉬운편
* Angular 디렉터 + react virtual 컴포넌트 기능이 혼합된 라이브러리


## Why React?
* 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 리엑트를 만듬
    * 특정 이벤트가 발생했을 때 모델의 변화를 일으키고 그 변화에 따라 어떤 DOM을 가지고 와서 어떻게 업데이트를 해야 할지 생각함
    * 즉 데이터가 바뀌면 바뀐 부분만 비교하여 view를 랜더링 시킴
    * 이러면 바뀐 데이터만 랜더링 시키기 때문에 성능이 향상
* React와 옛 라이브러리들의 공통점은 Model
    * 옛 라이브러리들은 MVC, MVVM, MVW등 이러한 패턴을 사용
* 많은 회사에서 React 사용
    * FaceBook
    * Airbnb
    * Google
    * NetFlix
    * Spotify
    * Slack...

## ES6
* 최근에 나온 자바스크립트 버전
* const : 상수선언 할 때 사용
    * 한번 선언 하면 고정적인 값
* var : 스코프가 함수라서 다시 선언하면 바뀜
    * es6에선 사용을 하지 않음
* let : 스코프가 블록단위로 설정 되어있어서 블록 내에서 사용하면 새로 만듬
    * 유동적인 값
    * 차이 예제

    ``` javascript
    // var, let 함수 밖에서 차이점
    function example() {
        var a = 1;
        var b = 2;

        console.log(b) // 2출력
    }

    console.log(a) // Reference 에러 -> 밖에서 선언 하면 참조 못함
    ```

    ``` javascript
    function example2() {
        var c = 1;
        let d = 2;

        if(true) {
            var c = 2;
            let d = 3;

            console.log(c); // 2출력
            console.log(d); // 3출력
        }

        console.log(c); // 2출력
        console.log(d); // 2출력 (if 블럭이랑 다른 변수)
    }
    
    example2();

    ```

    ``` javascript
    function example3() {
        var a = 1;
        var a = 2;

        console.log(a) // 2출력

        let b = 1;
        let b = 2; // syntaxError -> let은 두번 같은 블록에 같은 이름으로 선언 할 수 없음
        console.log(b);
    }
    ```

* es6 주석
    * ``/* 블라블라 */``
    * 태그 사이의 주석
    ```
    <h1
        var something = "something" //블라블라
    >
    ```

## Webpack 
* 리액트 코드를 브라우저가 이해할 수 있는 코드로 변경해주는 역할, 툴
    * 링크 : [https://webpack.js.org](https://webpack.js.org)
* 코드들을 의존하는 순서대로 잘 합쳐서 하나 또는 여러개의 파일로 결과를 만듬
    * ex) 이미지 파일을 웹팩을 통해 png파일로 변경
    * 이때 하는 작업을 bundling작업이라 부름
    * bundling 작업을 할 때 확장자마다 어떠한 처리 작업을 하도록 준비해준다.
    * 즉 import 할때 연결된 파일을 불러와 저장한다.
* create-react-app
    * 웹팩과 같은 툴을 사용할 필요 없이 손쉽게 리액트를 만들어 주는 툴
    * 웹팩 파일이 숨어있는 셈
    * 즉 편리하게 작업하기 위한 툴
    * 명령어
        * ``npx create-react-app [앱 이름]`` 앱 생성
        * ``npm start`` npm 시작

## JSX
* 리액트로 HTML을 사용하는 JavaScript 확장 문법
* ex) ``ReactDOM.render(<App />, document.getElementById('root'))`` JSX의 형태
    * ``ReactDOM.render(<App /> < App2/>, document.getElementById('root'))`` -> 하나의 컴포넌트만 랜더링 시키기 때문에 오류 발생
    * 따라서 2개 이상 컴포넌트를 랜더링 시킬 때 한개 컴포넌트 안에 다른 컴포넌트를 집어 넣어야 함
* 두개 이상의 태그 일 경우 ``<div>`` 태그로 닫음
    * Fragment 모듈을 사용하면 ``<div>`` 태그 사용 안해도 됨

## React vs React DOM
* 리액트 : UI라이브러리 , 유저 인터페이스
* 리액트 DOM : 웹사이트에 출력(Render) 하는 걸 도와주는 모델 -> 1개의 컴포넌트를 출력
    * 리액트 사용해서 웹에 올릴경우 React Dom
    * 리액트를 모바일 환경에서 올릴경우 React Native

## State vs Props

### Props
* 컴포넌트의 정보를 가저오는 방법
* 부모 컴포넌트가 자식 컴포넌트한테 값을 전달 할 때 사용
* 동적으로 rendering하는 방법
    * javascript map 사용!
* props를 사용할 땐 id 즉 unique key가 필요하다
    * 겉으로는 상관없지만 react 내부상 unique key가 필요하기 때문에 id를 적어주는 것이 중요
* 예시
``` es6
function Food({ fav }) {            // function Food(props) {
    return <h1> I like {fav} </h1>; // return <h1> I like {props.fav} </h1> } 이렇게 변경 가능
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Food fav="kimchi" />
        <Food fav="Ramen" />
        <Food fav="samgiopsal" />
        <Food fav="chukumi" />
        <Movie />
      </div>
    );
  }
}
```
* 결과
![props-result](./images/props-result.png)

* props-types
    * 전달받은 props가 자신이 원하는 props 인지 확인하는 라이브러리
    * 속성을 틀리게 할 경우 등 찾아서 확인 해줌
    * 즉 검증 라이브러리

    ``` es6
    Food.propTypes = {
        name: PropTypes.string.isRequired, // name이 String 타입인지
        picture: PropTypes.string.isRequired, // picture가 String 타입인지
        rating: PropTypes.number.isRequired // rating가 number 타입인지
    }
    ```

### State
* Function Component vs Class Component
    * Function Component는 return을 하고 screen에 표시
    * Class Component는 react Component로 부터 확장하고 screen에 표시
        * react는 자동적으로 class component의 render method를 자동으로 실행
    * Class Component를 사용해야하는 이유?
        * State라는 Object를 사용해야하기 때문에
    
* State
    * 데이터를 자유자재로 변경하기 위해 사용
    * 값이 바뀌면 Rerandering
    
    ```es6
    state = {
        count : 0
    };

    add = () => {
        this.setState({count : this.state.count + 1});
    };

    minus = () => {
        this.setState({count : this.state.count - 1});
    };
    
    render() {
        return (
            <div className="App">
                <h1> The number is : {this.state.count}</h1>
                <button onClick={this.add}> Add </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        );
    }
    ```

    * state는 직접 변경하면 안됌
        * 이유는 새로운 state와 render function이 호출 하지 않음
        * setState를 통해 변경 가능
            * setState를 부르는 순간 react는 render Function을 한번 더 호출
            * 이로써 react는 변경된 부분만 변경

    * 직접 state 호출 vs function으로 state 호출

    ``` es6
        // functional로 state 호출
        add = () => {
            this.setState(current => ({ count : current.count + 1 }));
        };

        // 직접 state 호출
        minus = () => {
            this.setState(current => ({ count : this.state.count - 1 }));
        };
    ```

    * 직접 부르면 성능에 이슈가 발생
        * 직접 외부 데이터를 건들기 때문에
    * 외부의 상태에 의존하지 않는 것이 가장 좋기 때문에 함수형으로 프로그래밍을 하는 것이 좋다!

## React LifeCycle
React의 생명 주기

### Mounting
* 컴포넌트가 브라우저 상에 나타날 때
* **constructor()**
    * Javascript가 class를 만들 때 호출
    * 가장 먼저 실행
* getDerivedStateFromPorps()
    * 잘 사용하지 않음
    * props에 받은 값을 state에 동결 시킬 때 사용
    * 업데이팅 과정에서 props가 바뀔 때 실행
* **render()**
    * 브라우저 화면에 rendering 될 때
    * 어떤 DOM을 만들게 될지, 어떤 태그를 나타내면 되는지 등
* **componentDidMount()**
    * render 하고 나서 componentDidMount 호출
    * 컴포넌트가 나타나고 그 뒤에 어떤 것을 하고 싶다 할 때 사용

### Updating
* 컴포넌트의 props나 state가 바뀔 때
* getDerivedStateFromProps()
    * 사용 잘 안함
* shouldCompponentUpdate()
    * 업데이트를 할지 말지 정하는 부분 
    * 컴포넌트가 업데이트 되는 성능을 최적화 시키고 싶을 때 사용
    * 부모 컨포넌트가 Rerandering이 되면 부모 컴포넌트의 자식 컴포넌트들도 랜더링 함수 실행
        * 이때 rerandering하면 virtual Dom에 들어가 실행
        * 이렇기 때문에 virtual Dom조차 하기 싫을 경우 이 함수 사용 
* **render()**
* getSnapshotBeforeUpdate()
    * 거의 사용 안함
    * 랜더링을 하고나서 업데이트 하기 전 즉 브라우저 호출 직전 하고 싶은 작업 할 때
    * ex) 스크롤을 유지하고 싶을 때
* **componentDidUpdate()**
    * state가 바뀔때 이전의 상태와 지금의 상태가 바뀌는 시점에서 작업을 하고 싶을 때 호출

### Unmounting
* 컴포넌트가 브라우저 상에서 사라질 때 
* **componentWillUnmount()**
    * component가 죽을 때 호출
    * ex) 페이지가 나가거나 할 때