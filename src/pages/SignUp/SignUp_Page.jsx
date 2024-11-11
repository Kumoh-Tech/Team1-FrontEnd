import style from "./SignUp_Page.module.css";
import UserInput from "../../components/UserInput/UserInput";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [UserInfo, setUserInfo] = useState({
    mail: "",
    code: "",
    passwd: "",
    passwdCheck: "",
    name: "",
    id: "",
    major: "",
    grade: "",
    tel: "",
  });

  const [subRequire, setsubRequire] = useState({
    mail: false,
    code: false,
    passwd: false,
    passwdCheck: false,
    name: false,
    id: false,
    major: false,
    grade: false,
    tel: false,
  });

  const [passwdError, setpasswdError] = useState("");
  const [passwdCheckError, setpasswdCheckError] = useState("");
  const [idError, setidError] = useState("");
  const [telError, settelError] = useState("");
  const [mailError, setmailError] = useState("");

  const [verificationError, setverificationError] = useState(""); //인증 오류
  const [sendVerification, setsendVerification] = useState(false); //인증 발송 상태

  const [majorList, setMajorList] = useState([]); // 학과 데이터 리스트

  const [submitEnalbed, setSubmitEnabled] = useState(false); //회원가입 버튼 활성화 상태

  // 웹메일 인증 버튼 클릭 이벤트 핸들러
  const sendVerificationMail = () => {
    // console.log(UserInfo.mail);
    // setsendVerification(true);
    axios({
      method: "post",
      url: "https://ed200653-686d-4e31-a2bd-d36ed76ee3e6.mock.pstmn.io/mailsucess",
      data: { mail: UserInfo.mail },
    })
      .then((response) => {
        console.log("메일 전송 완료", response);
        setsendVerification(true);
      })
      .catch((error) => {
        console.log("메일 전송 실패", error);
        setsendVerification(false);
      });
  };

  // 인증 번호 확인
  const codeCheck = () => {
    axios({
      method: "post",
      url: "https://ed200653-686d-4e31-a2bd-d36ed76ee3e6.mock.pstmn.io//verification_sucess",
      data: { mail: UserInfo.mail, code: UserInfo.code },
    })
      .then((response) => {
        console.log("인증 완료", response);
        setverificationError("인증이 완료되었습니다.");
        setsubRequire((prev) => ({ ...prev, code: true }));
        return true;
      })
      .catch((error) => {
        console.log("인증 실패", error);
        setverificationError("인증 번호가 일치하지 않습니다.");
        setsubRequire((prev) => ({ ...prev, code: false }));
        return false;
      });
    // const server = "1234"; //여기 수정해야됨. 서버에서 전송한 인증번호 받아와야됨.
    // // 서버에서 전송한 인증번호와 사용자가 입력한 인증번호가 동일한지 검사
    // if (UserInfo.code === server) {
    //   setverificationError("인증이 완료되었습니다.");
    //   setsubRequire((prev) => ({ ...prev, code: true }));
    //   return true;
    // } else {
    //   setverificationError("인증 번호가 일치하지 않습니다.");
    //   setsubRequire((prev) => ({ ...prev, code: false }));
    //   return false;
    // }
  };

  // 웹메일 유효성 검사
  const mailCheckHandler = (mail) => {
    const mailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@kumoh\.ac\.kr$/;

    if (mail === "" || !mailRegex.test(mail)) {
      setmailError("올바른 메일 형식으로 입력해주세요.");
      return false;
    } else {
      setmailError("");
      return true;
    }
  };

  // 비밀번호 유효성 검사
  const passwdCheckHandler = (passwd, passwdCheck) => {
    const passwdRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{10,20}$/;

    if (passwd === "" || !passwdRegex.test(passwd)) {
      setpasswdError(
        "영문 대/소문자, 숫자, 특수문자를 조합하여 입력해주세요. (10~20자)"
      );
      return false;
    } else if (passwdCheck !== passwd) {
      setpasswdError("");
      setpasswdCheckError("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setpasswdError("");
      setpasswdCheckError("");
      return true;
    }
  };

  // 학번 유효성 검사
  const idCheckHandler = (id) => {
    const idRegex = /^\d{8}$/;
    if (id === "" || !idRegex.test(id)) {
      setidError("학번 8자를 모두 입력해주세요.");
      return false;
    } else {
      setidError("");
      return true;
    }
  };

  // 전화번호 유효성 검사
  const telCheckHandler = (tel) => {
    const telRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (tel === "" || !telRegex.test(tel)) {
      settelError("010-1234-5678 형식으로 입력해주세요.");
      return false;
    } else {
      settelError("");
      return true;
    }
  };

  useEffect(() => {
    if (UserInfo.passwd || UserInfo.passwdCheck) {
      const isValid = passwdCheckHandler(UserInfo.passwd, UserInfo.passwdCheck);
      setsubRequire((prev) => ({
        ...prev,
        passwd: isValid,
        passwdCheck: isValid,
      }));
    }

    if (UserInfo.id) {
      const isValid = idCheckHandler(UserInfo.id);
      setsubRequire((prev) => ({
        ...prev,
        id: isValid,
      }));
    }

    if (UserInfo.tel) {
      const isValid = telCheckHandler(UserInfo.tel);
      setsubRequire((prev) => ({
        ...prev,
        tel: isValid,
      }));
    }

    if (UserInfo.mail) {
      const isValid = mailCheckHandler(UserInfo.mail);
      setsubRequire((prev) => ({
        ...prev,
        mail: isValid,
      }));
    }

    if (UserInfo.name.trim() !== "") {
      setsubRequire((prev) => ({
        ...prev,
        name: true,
      }));
    } else {
      setsubRequire((prev) => ({
        ...prev,
        name: false,
      }));
    }

    if (UserInfo.major !== "") {
      setsubRequire((prev) => ({
        ...prev,
        major: true,
      }));
    } else {
      setsubRequire((prev) => ({
        ...prev,
        major: false,
      }));
    }

    if (UserInfo.grade !== "") {
      setsubRequire((prev) => ({
        ...prev,
        grade: true,
      }));
    } else {
      setsubRequire((prev) => ({
        ...prev,
        grade: false,
      }));
    }
  }, [UserInfo]);

  // 컴포넌트가 마운트될 때 학과 데이터 리스트 호출
  useEffect(() => {
    axios
      .get(
        "https://ed200653-686d-4e31-a2bd-d36ed76ee3e6.mock.pstmn.io/majorList"
      )
      .then((response) => {
        console.log(response.data);
        setMajorList(response.data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패", error);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...UserInfo,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/registerUserInfo",
      data: {
        mail: subRequire.mail,
        code: subRequire.code,
        passwd: subRequire.passwd,
        passwdCheck: subRequire.passwdCheck,
        name: subRequire.name,
        id: subRequire.id,
        major: subRequire.major,
        grade: subRequire.grade,
        tel: subRequire.tel,
      },
    })
      .then((response) => {
        console.log("회원가입 완료", response);
      })
      .catch((error) => {
        console.log("회원가입 실패", error);
        console.log(subRequire);
      });
    // console.log(subRequire);
  };

  return (
    <div className={style.parent}>
      <div className={style.outline}>
        <div>
          <h1>회원가입</h1>
        </div>
        <form onSubmit={submit}>
          <div>
            <UserInput
              type="text"
              placeholder="금오공대 웹메일"
              value={UserInfo.mail}
              name="mail"
              onChange={onChange}
            />
            <button
              type="button"
              onClick={sendVerificationMail}
              disabled={mailError || UserInfo.mail === ""}
            >
              인증
            </button>
          </div>
          {mailError && (
            <div>
              <small>{mailError}</small>
            </div>
          )}
          {sendVerification && (
            <div>
              <div>
                <UserInput
                  type="text"
                  placeholder="인증번호"
                  value={UserInfo.code}
                  name="code"
                  onChange={onChange}
                />
                <button type="button" onClick={codeCheck}>
                  확인
                </button>
              </div>
              <div>
                <small>{verificationError}</small>
              </div>
            </div>
          )}
          <div>
            <UserInput
              type="password"
              placeholder="비밀번호"
              value={UserInfo.passwd}
              name="passwd"
              onChange={onChange}
              maxLength={20}
            />
            {passwdError && (
              <div>
                <small>{passwdError}</small>
              </div>
            )}
          </div>
          <div>
            <UserInput
              type="password"
              placeholder="비밀번호 확인"
              value={UserInfo.passwdCheck}
              name="passwdCheck"
              onChange={onChange}
            />
            {passwdCheckError && (
              <div>
                <small>{passwdCheckError}</small>
              </div>
            )}
          </div>
          <hr />
          <div>
            <UserInput
              type="text"
              placeholder="이름"
              value={UserInfo.name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div>
            <UserInput
              type="text"
              placeholder="학번"
              value={UserInfo.id}
              name="id"
              onChange={onChange}
              maxLength={8}
            />
            {idError && (
              <div>
                <small>{idError}</small>
              </div>
            )}
          </div>
          <div>
            <select name="major" onChange={onChange} value={UserInfo.major}>
              <option value="">학과</option>
              {majorList.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select name="grade" onChange={onChange} value={UserInfo.grade}>
              <option value="">학년</option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
              <option value="4">4학년</option>
            </select>
          </div>
          <div>
            <UserInput
              type="text"
              placeholder="전화번호"
              value={UserInfo.tel}
              name="tel"
              onChange={onChange}
            />
            {telError && (
              <div>
                <small>{telError}</small>
              </div>
            )}
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
