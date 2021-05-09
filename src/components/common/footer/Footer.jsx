import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {

  return(
    <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h4>Instagram</h4>
              <ul className="list-unstyled">
                <SocialIcon url="https://www.instagram.com/ahilesparocol" />
              </ul>
            </div>
            {/* column2 */}
            <div className="col">
              <h4>Facebook</h4>
              <ul className="list-unstyled">
                <SocialIcon url="https://www.facebook.com/Ahí-Les-Paro-105041358419301" />
              </ul>
            </div>
            {/* column3 */}
            <div className="col">
              <h4>Twitter</h4>
              <ul className="list-unstyled">
                <SocialIcon url="https://twitter.com/AhiLesParo" />
              </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Ahí les paro | Comité de Comunicación
            </p>
          </div>

        </div>
    </div>
  );
}

export default Footer;
