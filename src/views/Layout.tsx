import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-end bg-sky-700">


          <li>
          <h1  className=" title p-4">Photo upload app</h1>
          </li>
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-sky-800"
                to="/"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-sky-800"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-sky-800"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-sky-800"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-slate-50 hover:bg-sky-800"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="flex justify-end bg-sky-700 p-4">
        <p>Copyright 2024 - NN</p>
      </footer>
    </>
  );
};

export default Layout;
