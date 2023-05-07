import { AppBarComp } from 'components/AppBarComp/AppBarComp';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBarComp />
      {children}
    </div>
  );
};
