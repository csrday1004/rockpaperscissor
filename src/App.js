/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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

  const [myPick, setMyPick] = useState(null);
  const [comPick, setComPick] = useState(null);
  const [myResult, setMyResult] = useState("?");
  const [comResult, setComResult] = useState("?");

  const 승부결정 = () => {
    const 승부결정도우미 = [0, 1, 2, 0];

    if (myPick === comPick) {
      setMyResult("Tie");
      setComResult("Tie");
    } else {
      if (승부결정도우미[myPick + 1] === comPick) {
        setMyResult("Lose");
        setComResult("Win");
      } else {
        setMyResult("Win");
        setComResult("Lose");
      }
    }
  };

  useEffect(() => {
    console.log("나", myPick);
    console.log("컴", comPick);

    if (myPick===null) {
      return
    }else{
      승부결정()
    }
  }, [myPick, comPick]);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>가위바위보 게임</h1>
      <div
        className="결투장"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box data={data[myPick]} myResult={myResult} who={"나"} />
        <Box data={data[comPick]} comResult={comResult} who={"컴퓨터"} />
      </div>
      <div
        className="선택버튼"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        {data.map((e, i) => {
          return (
            <div
              onClick={() => {
                // 내가 고른 거 저장
                setMyPick(i);
                // 컴퓨터 랜덤 픽 저장
                setComPick(Math.floor((Math.random() * 10) % 3));
              }}
            >
              <Button img={e} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
