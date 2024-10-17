import React from 'react'
function ClickButton() {
const handleClick = () =>{
alert("Button clicked")
}
return (
<div>
<button onClick={handleClick}>Click me</button>
</div>
)
}
export default ClickButton