import React, { Component } from "react";
import Box from "./component/Box";
import Button from "./component/Button";

const data = [
  "https://feelstory.com/gnu/nori/img/1_on.png",
  "https://feelstory.com/gnu/nori/img/2_on.png",
  "https://feelstory.com/gnu/nori/img/3_on.png",
];



export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPick: null,
      comPick: null,
      myResult: "?",
      comResult: "?",
      count: 0,
      record: [0, 0, 0],
    };
  }


  승부결정 = (i) => {
    const 승부결정도우미 = [0, 1, 2, 0];

    const computerPick = Math.floor(Math.random() * data.length);
   
    this.setState({
      myPick: i,
      comPick: computerPick,
      count: this.state.count + 1,
    })

    let copy = [...this.state.record];
    if (i === computerPick) {
      copy[1]++
      this.setState({
        myResult: "Tie",
        comResult: "Tie",
        
      });
    } else if (승부결정도우미[i + 1] === computerPick) {
      copy[2]++
      this.setState({
        myResult: "Lose",
        comResult: "Win",
      });
    } else {
      copy[0]++
      this.setState({
        myResult: "Win",
        comResult: "Lose",
      });
    }
    this.setState({record: copy})

  };

  render() {
    return (
      <div className="App" style={{ padding: 20, textAlign: "center" }}>
        <h1>가위바위보 게임</h1>
        <div
          className="결투장"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box data={data[this.state.myPick]} result={this.state.myResult} who={"나"} />
          <Box data={data[this.state.comPick]} result={this.state.comResult} who={"컴퓨터"} />
        </div>
        <div
          className="선택버튼"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data.map((e, i) => {
            return (
              <div
                onClick={() => {
                  this.승부결정(i);
                }}
                key={i}
              >
                <Button img={e} />
              </div>
            );
          })}
        </div>
        <div className="전적">
          <p>
            {this.state.count}경기 중 {this.state.record[0]}승 {this.state.record[1]}무 {this.state.record[2]}패
          </p>
          <p>
            승률 :{" "}
            {this.state.record[0] + this.state.record[2]
              ? ((this.state.record[0] / (this.state.record[0] + this.state.record[2])) * 100).toFixed(1)
              : 0}
            %
          </p>
        </div>

        {/* 리셋 */}
        <div
          onClick={() => {
            window.location.reload();
          }}
          style={{
            margin: "auto",
            padding: "10px",
            background: "black",
            width: "300px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </div>
      </div>
    );
  }
}
