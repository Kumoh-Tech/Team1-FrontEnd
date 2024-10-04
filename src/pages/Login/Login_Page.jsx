import "./Login_Page.css";
import UserInput from "../../components/UserInput/UserInput";

const Login = () => {
  return (
    <div className="parent">
      <div className="outline">
        <div className="title">
          <h1>로그인</h1>
        </div>
        <div>
          <UserInput
            type="text"
            placeholder="웹메일"
            //   value={userInfo.email}
            name="userEmail"
          />
        </div>
        <div>
          <UserInput
            type="password"
            placeholder="비밀번호"
            //   value={userInfo.password}
            name="userPassword"
          />
        </div>
        {/* NavLink로 링크 관리하기 */}
        <div>비밀번호 찾기</div>
        <div>
          <button>로그인</button>
        </div>
        <div>-</div>
        <div>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
