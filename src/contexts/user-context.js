import { createContext } from 'react';

const UserContext = createContext({
  authenticated: false,
  toggleAuthenticated() {}
});

UserContext.displayName = 'UserInfoContext';

export default UserContext;
