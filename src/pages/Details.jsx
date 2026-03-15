import { useParams } from "react-router-dom";
import CameraCapture from "../components/CameraCapture";
import SignatureCanvas from "../components/SignatureCanvas";
import { Link } from "react-router-dom";

const Details = () =>{
    const {id} = useParams();
    return(
        <div className="container">
            <h2>Employee details</h2>
            <h3>Employee ID: {id}</h3>
            <Link to="/analytics">View Analytics</Link>
            <CameraCapture></CameraCapture>
            <SignatureCanvas></SignatureCanvas>
        </div>
    )
}
export default Details;