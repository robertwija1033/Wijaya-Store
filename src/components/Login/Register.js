import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  return (
    <>
      <div className="container-login">
        <div class="login">
          <h2>Register</h2>
        </div>
        <div class="container-user">
          <form action="/home">
            <div class="input-box">
              <i class="fas fa-user"></i>
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <i class="fas fa-at"></i>
              <input type="email" required="required" />
              <span>Email Address</span>
            </div>
            <div class="input-box">
              <i class="fas fa-lock"></i>
              <input type="password" required="required" />
              <span>Password</span>
            </div>
            <div class="input-box">
              <input type="submit" value="Register" />
              <Link to={"/Login"}>Already have an Account?</Link>
            </div>
          </form>
        </div>
        <div className="sakura">
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
        </div>
      </div>
    </>
  );
};
export default Register;
