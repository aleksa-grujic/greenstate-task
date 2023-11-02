import { FC } from "react";
import { AuthFormProps } from "./AuthForm.types";
import styles from "./AuthForm.module.css";
import Logo from "../../../assets/Logo.png";
import { Button, Icon, Input } from "../../Atoms";

const AuthForm: FC<AuthFormProps> = ({
  email,
  password,
  onChange,
  onSubmit,
  isLogin,
  setIsLogin,
  errors,
  loading,
}) => {
  return (
    <div className={styles.authFormContainer}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.container}>
        <div className={styles.icon}>
          <Icon icon="log out" width={20} height={20} color="#7B828A" />
        </div>
        <h1 className={styles.title}>{isLogin ? "Log in" : "Sign up"}</h1>
        <span className={styles.subtitle}>
          {isLogin
            ? "Use your email to log in to your TimeTrove Dashboard."
            : "Create an account for your TimeTrove Dashboard."}
        </span>

        <Input
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          error={errors.email.length > 0 ? errors.email : undefined}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          error={errors.password.length > 0 ? errors.password : undefined}
        />
        {errors?.general.length > 0 && (
          <span className={styles.generalError}>{errors.general}</span>
        )}
        <Button
          type="submit"
          onClick={onSubmit}
          text={isLogin ? "Log in" : "Sign up"}
          size="xlarge"
          className={styles.button}
          txtVisible={!loading}
          rToggle={!loading}
          rightIcon="loading"
        />
      </div>
      <span className={styles.afterText}>
        {isLogin ? "Don’t have an account yet?" : "Already have an account?"}{" "}
        <span className={styles.cta} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Log in"}
        </span>
      </span>
    </div>
  );
};

export default AuthForm;
