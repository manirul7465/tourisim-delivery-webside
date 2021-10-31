import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWQ-EDeyuQ7Svi2CU0X40SzxSnl4bGud5DM-3bMY8RZxB9DxUF8-0gIeInn0QIgLSTNU&usqp=CAU" alt=""/>
            <div>
            <Link to="/">  
          <Button variant="warning" active>
              Go back
            </Button>
         </Link>
            </div>
        </div>
    );
};

export default Notfound;