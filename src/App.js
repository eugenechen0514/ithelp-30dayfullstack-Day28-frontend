import React, { Component } from 'react';
import LoginBox from './containers/LoginBox'
import './App.css';

class App extends Component {
  state = {
    name: '',
  }

  // componentDidMount() {
  //   // 送到後端的資料
  //   const data = {
  //     name: 'Billy'
  //   };

  //   // 用 XMLHttpRequest 發起一個非同步的 request
  //   const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) { // readyState == 4 為 request 完成
  //       const contentType = xhr.getResponseHeader('content-type');
  //       if (xhr.status === 200 && contentType && contentType.indexOf('application/json') > -1) {　// 依回應的資料格式處理，我們只處理 200 && application/json
  //         try {
  //           var result = JSON.parse(xhr.responseText);
  //           console.log(result)
  //         } catch(e) {
  //           console.error(e);
  //         }
  //       } else {
  //         console.error(new Error('無法得到資料'), xhr.responseText);
  //       }
  //     }
  //   }
  //   xhr.open("POST", "http://localhost:3001/api/echo"); // 開啟連線
  //   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 設定 header
  //   xhr.send(JSON.stringify(data)); // 以文字字串送出JSON資料
  // }

  componentDidMount() {
    // 送到後端的資料
    const data = {
      name: 'Billy'
    };

    // 用 fetch() 發起一個非同步的 request
    fetch("http://localhost:3001/api/echo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json()) // 取出 JSON 資料，並還原成 Object。response.json()　一樣回傳 Promise 物件
      .then(data => {
        console.log(data);

        // 更新的 state 內的值，並再一次引起渲染 render()
        this.setState({
          name: data.name,
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  // componentDidMount() {
  //   // 送到後端的資料
  //   const data = {
  //     name: 'Billy'
  //   };

  //   const workerPromise = (async () => {
  //     // 用 fetch() 發起一個非同步的 request，等待回傳結果
  //     const response = await fetch("http://localhost:3001/api/echo", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify(data),
  //     })

  //     // 等待 response.json() 回傳的 JSON 物件
  //     const resultData = await response.json();
  //     return resultData;
  //   })();

  //   workerPromise
  //     .then(data => {
  //       console.log(data);
  //       this.setState({
  //         name: data.name,
  //       });
  //     })
  //     .catch(e => {
  //       console.error(e);
  //     });
  // }

  render() {
    return (
      <div className="App" >
        Hello React: {this.state.name}
        <LoginBox />
      </div >
    );
  }
}

export default App;
