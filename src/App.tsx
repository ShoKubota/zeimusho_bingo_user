import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@freee_jp/vibes/css';
import { Button, Container, Header, SubSectionTitle, Note, Stack } from '@freee_jp/vibes'

const gridOptions: string[] = [
  "麹町税務署",
  "神田税務署",
  "日本橋税務署",
  "京橋税務署",
  "芝税務署",
  "四谷税務署",
  "麻布税務署",
  "小石川税務署",
  "本郷税務署",
  "東京上野税務署",
  "浅草税務署",
  "品川税務署",
  "荏原税務署",
  "大森税務署",
  "雪谷税務署",
  "蒲田税務署",
  "世田谷税務署",
  "北沢税務署",
  "玉川税務署",
  "目黒税務署",
  "渋谷税務署",
  "新宿税務署",
  "中野税務署",
  "杉並税務署",
  "荻窪税務署",
  "板橋税務署",
  "練馬東税務署",
  "練馬西税務署",
  "豊島税務署",
  "王子税務署",
  "荒川税務署",
  "足立税務署",
  "西新井税務署",
  "本所税務署",
  "向島税務署",
  "葛飾税務署",
  "江戸川北税務署",
  "江戸川南税務署",
  "江東西税務署",
  "江東東税務署",
  "青梅税務署",
  "八王子税務署",
  "日野税務署",
  "町田税務署",
  "立川税務署",
  "東村山税務署",
  "武蔵野税務署",
  "武蔵府中税務署",
  "横浜中税務署",
  "横浜南税務署",
  "保土ケ谷税務署",
  "戸塚税務署",
  "神奈川税務署",
  "緑税務署",
  "鶴見税務署",
  "川崎南税務署",
  "川崎北税務署",
  "川崎西税務署",
  "横須賀税務署",
  "鎌倉税務署",
  "藤沢税務署",
  "平塚税務署",
  "厚木税務署",
  "大和税務署",
  "相模原税務署",
  "小田原税務署",
  "千葉東税務署",
  "千葉西税務署",
  "千葉南税務署",
  "成田税務署",
  "松戸税務署",
  "柏税務署",
  "市川税務署",
  "船橋税務署",
  "佐原税務署",
  "銚子税務署",
  "東金税務署",
  "茂原税務署",
  "木更津税務署",
  "館山税務署",
  "甲府税務署",
  "山梨税務署",
  "鰍沢税務署",
  "大月税務署"
]
interface ICell {
  name: string;
  clicked: boolean;
}

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

// [[name: string, clicked: boolean], [], [], [], []]

const App: React.FC = () => {
  let randomGridOptions = [...gridOptions]
  const [grid, setGrid] = useState<Array<Array<ICell>>>(
    Array.from({length: 5}, (v, i) =>
      Array.from({length: 5}, (v, j) => {
        const randomIndex = getRandomInt(randomGridOptions.length);
        const name = (i === 2 && j === 2) ? '' : randomGridOptions[randomIndex];
        randomGridOptions.splice(randomIndex, 1);
        return { name, clicked: false };
      }
    ))
  );

  const handleClick = (i: number, j: number) => {
    if (i === 2 && j === 2) return; // 真ん中のマスをクリックした時の反応を防ぐ
    const newGrid = [...grid];
    newGrid[i][j].clicked = !grid[i][j].clicked;
    setGrid(newGrid);
  };

  return (
    <div className="App">
      <header>
      <Header mb={2}disableGutters sectionDataList={[]} logo={<SubSectionTitle>税務署BINGO</SubSectionTitle>} />
        <Container width='narrow' responsive={true}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          {grid.map((row, i) =>
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}> {/* 各行も中央に寄せます */}
              {row.map((cell, j) =>
                <div key={j}
                    onClick={() => (i === 2 && j === 2) ? null : handleClick(i, j)}
                    style={{
                    width: '50px',
                    height: '50px',
                    lineHeight: '15px',
                    textAlign: 'center',
                    padding: '10px',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    wordWrap: 'break-word',
                    overflow: 'auto',
                    position: 'relative'   // relative positioning
                    }}>
                  {cell.name}
                  {/* クリックされたときに画像を表示 */}
                  {cell.clicked &&
                  <img src='stamp.png'
                      alt="Stamp"
                      style={{
                          width: '90%', // adjust as per your needs
                          height: '90%', // adjust as per your needs
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                      }}
                  />}
                  {/* 真ん中のマスにSweee画像を表示 */}
                  {(i === 2 && j === 2) &&
                  <img src='Sweee.png'
                      alt="Sweee"
                      style={{
                          width: '100%', // adjust as per your needs
                          height: '100%', // adjust as per your needs
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                      }}
                  />}
                </div>)}
            </div>)}
        </div>
        <Note mt={1}>※東京国税局管轄（東京都・神奈川県・千葉県・山梨県）の税務署を表示しています。埼玉県在住の方ごめんなさい</Note>
        <Note >※リロードしたらリセットされます</Note>
        </Container>
      </header>
    </div>
  );
}

export default App;
