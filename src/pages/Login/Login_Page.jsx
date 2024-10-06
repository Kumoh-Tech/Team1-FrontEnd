import "./Login_Page.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserInput from "../../components/UserInput/UserInput";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPasswd, setUserPasswd] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 웹메일 미입력시
    if (!userMail) {
      return alert("웹메일을 입력해주세요.");
    }
    // 비밀번호 미입력시
    else if (!userPasswd) {
      return alert("비밀번호를 입력해주세요.");
    }
    // 모든 필드가 입력됐을 때
    else {
      axios({
        method: "post",
        url: "/api/registerUserInfo",
        data: {
          mail: userMail,
          passwd: userPasswd,
        },
        withCredentials: true, //refresh token이 httpOnly 쿠키로 저장되기 위한 옵션
      })
        .then((response) => {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          console.log(response);
          alert("로그인 성공!");
        })
        .catch((error) => {
          console.log(error);
          alert("메일 또는 비밀번호를 다시 입력해주세요.");
        });
    }
  };

  const goSignUp_Page = () => {
    navigate("/signup");
  };

  return (
    <div className="parent">
      <div className="outline">
        <div className="title">
          <h1>로그인</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <UserInput
              type="text"
              placeholder="웹메일"
              value={userMail}
              name="mail"
              onChange={(e) => setUserMail(e.target.value)}
            />
          </div>
          <div>
            <UserInput
              type="password"
              placeholder="비밀번호"
              value={userPasswd}
              name="passwd"
              onChange={(e) => setUserPasswd(e.target.value)}
            />
          </div>
          {/* NavLink로 링크 관리하기 */}
          <div>비밀번호 찾기</div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
        <div>------------</div>
        <div>
          <button type="button" onClick={goSignUp_Page}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
