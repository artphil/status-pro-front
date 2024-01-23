import { z } from "zod";

import { loginValidate, signUpValidate } from "hooks/userHooks";


export type LoginFormProps = z.infer<typeof loginValidate>;

export type loginType = {
  username: string,
  password: string
}

export type SignUpFormProps = z.infer<typeof signUpValidate>;

export type signUpType = {
  name: string,
  username: string,
  password1: string
  password2: string
}