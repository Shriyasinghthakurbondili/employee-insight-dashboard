import {useRef} from "react";
const SignatureCanvas = () =>{
    const canvasRef = useRef(null)

    function draw(e){
        const ct = canvasRef.current.getContext("2d")
        ct.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY)
        ct.stroke()
    }
    return(
        <div>
            <h3>Signature</h3>
            <canvas ref={canvasRef} width="300" height="150" onMouseMove={draw} style={{border:"1px solid black"}}></canvas>
        </div>
    )
}
export default SignatureCanvas;