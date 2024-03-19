import { useNavigate } from "react-router-dom";
import './room.css';
function Room(){
    const navigate = new useNavigate();
    const createroom=()=>{
        navigate('/create-room');
    }
    const joinroom=()=>{
        navigate('/student');
    }
    const selftest=()=>{
        navigate('/selftest');
    }
    return(<>
        <button onClick={createroom}>Create Room</button>
        <button onClick={joinroom}>Join Room</button>
        <button onClick={selftest}>Self Test</button>
    </>)
}
export default Room;