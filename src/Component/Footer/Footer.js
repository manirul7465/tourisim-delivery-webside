import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div >
                          <Card className="bg-dark text-white">
               <Row xs={1} md={3} className="g-4">
             <div>
               <h3>
               PHONE SUPPORT
              
                 + 01 345 647 745
               </h3>
             </div>
           
              <div>
                 <h3>
                 call now
                </h3>
                <p>	when you hungry for best foods
                   </p>
               </div>
               <div>
                   <h3>
                    Best foods ever </h3>
                   <p>House # 17,Road # 8,indiana R/A. usa
                  </p>
               </div>
               </Row>
               <small style={{color:'yellow' }} className="text-center">Manir foods delivery since@2001</small>
               </Card>
               
        </div>
    );
};

export default Footer;