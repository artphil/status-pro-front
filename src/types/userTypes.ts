import { z } from 'zod';

import { loginValidate } from 'hooks/userHooks';


export type LoginFormProps = z.infer<typeof loginValidate>;

export type loginType = {
  username: string,
  password: string
}