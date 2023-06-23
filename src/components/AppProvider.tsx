import type { ReactNode } from "react";

import "react-toastify/dist/ReactToastify.css";

const AppProvider = ({ childrens }: { childrens: ReactNode }) => {
  return { childrens };
};

export default AppProvider;
