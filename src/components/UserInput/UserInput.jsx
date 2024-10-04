const UserInput = ({ type, placeholder, value, name, onChange, maxLength }) => {
  return (
    <input
      className="userInput"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      maxLength={maxLength}
    ></input>
  );
};
export default UserInput;
