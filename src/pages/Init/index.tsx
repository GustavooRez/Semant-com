import { IoPlayCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const Start = () => {
    const navigate = useNavigate();

    function redirectHome() {
        navigate(`/home`)
    }
    return(
        <div id="background-init">
            <div className="display-center start">
                <div>
                    <h1 className="pt-5">SEMANT!COM</h1>
                </div>
                <div className="button-start">
                    <IoPlayCircleOutline size={200} onClick={redirectHome}/>
                </div>
            </div>
        </div>
    )
}

export default Start;