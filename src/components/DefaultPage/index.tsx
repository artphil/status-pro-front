import { ReactNode } from "react";


interface Props {
  children: ReactNode
}

function DefaultPage(props: Props) {
  const { children } = props;
  return (
    <main>
      Default Page
      {children}
    </main>
  );
}

export default DefaultPage;