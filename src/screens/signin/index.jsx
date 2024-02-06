import { useCallback, useState } from "react";
import { Input, Button } from "antd";

import "./style.css";
import { useSigninUser } from "../../hooks/mutation/user";

const SigninScreen = () => {
  const { mutateAsync: signInUserAsync } = useSigninUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await signInUserAsync({ email, password });
    },
    [email, password, signInUserAsync]
  );

  return (
    <div className="signin-container">
      <form onSubmit={handleFormSubmit} className="form-container">
        <label htmlFor="email">Email Address</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          required
        />
        <label htmlFor="password">Password</label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          required
        />
        <Button htmlType="submit" disabled={!password || !email} type="primary">
          Signin
        </Button>
      </form>
    </div>
  );
};

export default SigninScreen;
