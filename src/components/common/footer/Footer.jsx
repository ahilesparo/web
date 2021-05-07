import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function Footer() {

  return(
    <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h4>Instagram</h4>
              <ul className="list-unstyled">
                <li>Instagram</li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col">
              <h4>Facebook</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
              </ul>
            </div>
            {/* column3 */}
            <div className="col">
              <h4>Twitter</h4>
              <ul className="list-unstyled">
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Ahí les paro | Comité de Comunicación
            </p>
          </div>

        </div>
    </div>
  );
}

export default Footer;
