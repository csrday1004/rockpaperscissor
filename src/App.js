/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";

// 1. 박스2개 (타이틀, 사진, 승부 결과)
// 2. 가위바위보 선택 버튼
// 3. 버튼 누르면  누른 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 값 선택
// 5. 누가 이겼는지 승패 따짐
// 6. 결과에 따라 테두리색 변경(승/초록, 패/빨강, 무/검)

function App() {
  const data = [
    "https://feelstory.com/gnu/nori/img/1_on.png",
    "https://feelstory.com/gnu/nori/img/2_on.png",
    "https://feelstory.com/gnu/nori/img/3_on.png",
  ];

  const [myPick, setMyPick] = useState();
  const [comPick, setComPick] = useState();
  const [myResult, setMyResult] = useState("?");
  const [comResult, setComResult] = useState("?");
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState([0, 0, 0]);
  // 승,무,패

  const 승부결정 = (i) => {
    const 승부결정도우미 = [0, 1, 2, 0];
    
    // 내가 고른 거 저장
    setMyPick(i);
    // 컴퓨터 랜덤 픽 저장
    const computerPick = Math.floor((Math.random() *data.length));
    setComPick(computerPick);
    // 클릭 수 저장
    setCount(count + 1);
    
    let copy = [...record];
    if (i === computerPick) {
      setMyResult("Tie");
      setComResult("Tie");
      copy[1]++;
    } else if (승부결정도우미[i + 1] === computerPick) {
      setMyResult("Lose");
      setComResult("Win");
      copy[2]++;
    } else {
      setMyResult("Win");
      setComResult("Lose");
      copy[0]++;
    }
    setRecord(copy);
  };

  return (
    <div className="App" style={{ padding: 20, textAlign: "center"}}>
      <h1>가위바위보 게임</h1>
      <div
        className="결투장"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box data={data[myPick]} result={myResult} who={"나"} />
        <Box data={data[comPick]} result={comResult} who={"컴퓨터"} />
      </div>
      <div
        className="선택버튼"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        {data.map((e, i) => {
          return (
            <div
              onClick={() => {
                승부결정(i);
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
          {count}경기 중 {record[0]}승 {record[1]}무 {record[2]}패
        </p>
        <p>
          승률 :{" "}
          {record[0] + record[2]
            ? ((record[0] / (record[0] + record[2])) * 100).toFixed(1)
            : 0}
          %
        </p>
      </div>

      {/* 리셋 */}
      <div onClick={()=>{
        window.location.reload()
      }} style={{margin:'auto',padding:'10px', background:'black', width:'300px', borderRadius:'10px', color:'white', cursor:'pointer'}}>Reset</div>
    </div>
  );
}

export default App;
