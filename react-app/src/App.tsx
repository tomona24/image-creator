import React, { useEffect, useState } from 'react'
import image from './image.png'
const width = 300
const height = 200

function App() {
  const [png, setPng] = useState<string | null>(null)
  const [textName, setTextName] = useState<string>('Test Name')
  const [inputName, setInputName] = useState<string>(textName)
  const [fontColor, setFontColor] = useState<string>('#000000')


  useEffect(() => {
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    canvasElem.height = height
    const ctx = canvasElem && canvasElem.getContext('2d')
    const bgpict = new Image();
    bgpict.src = image;
    // draw
    if(ctx !== null) {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#888888'
    ctx.drawImage(bgpict, 0, 0, 300, 200)
    ctx.font = '14px Hiragino Maru Gothic Pro'
    ctx.fillStyle = fontColor
    ctx.fillText(inputName, width / 6, height / 3)
    }
    setPng(canvasElem.toDataURL())
  }, [inputName])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setTextName(event.target.value);
  }
  const handleSubmit = (): void => {
    setInputName(textName);
  }
  return (
    <div>
      <h3>画像生成</h3>
      <h4>生成</h4>
      {png && (
        <div className="comp" style={{ display: 'flex', border: '1px solid #888888', width: 300 }}>
          <img alt="icon" src={png} />
        </div>
      )}
    <h4>名前</h4>
        <input type="text" value={textName} onChange={handleChange} />
        <button onClick={handleSubmit}>名前を入れる</button>
    </div>
  )
}
export default App