import { NextPage } from 'next';
import Link from 'next/link';

const Register: NextPage = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="login">
                <a>Have an account?</a>
              </Link>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
