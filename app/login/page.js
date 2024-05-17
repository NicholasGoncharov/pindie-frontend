import Styles from "./login.module.css";
import {AuthForm} from "@/app/components/AuthForm/AuthForm";

export default function LoginPage () {
  return (
    <main className={Styles['main']}>
      <AuthForm />
    </main>
  )
}