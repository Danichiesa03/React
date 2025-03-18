import { useRef } from "react";

export default function UncontrolledLogin() {
  const formRef = useRef(null);

  function onLogin(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Login with DOM API:");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  }

  function loginWithFormData() {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    console.log("Login with FormData API:");
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember:", formData.get("remember") === "on");
  }
  return (
    <form ref={formRef} onSubmit={onLogin}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFormData}>
        Login with FormData
      </button>
    </form>
  );
}
