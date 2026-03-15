import { useRef } from "react";

const CameraCapture = () =>{
    const videoRef  = useRef(null);

    async function startCamera(){
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        videoRef.current.srcObject = stream;
    }

    return(
        <div className="box1">
            <button onClick={startCamera}>Start Camera</button>
            <br/><br/>
            <video ref={videoRef} autoPlay muted width="300"></video>
        </div>
    )
}
export default CameraCapture;