import React, { useState, useContext } from 'react';

import Card from './Card.jsx'
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import Map from './Map.jsx';
import { AuthContext } from './auth-context.jsx';  
import './VolunteerItem.css';

const VolunteerItem = (props) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="volunteer-item__modal-content"
        footerClass="volunteer-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Card className="volunteer-item">
        <div className="volunteer-item__content">
          <div className="volunteer-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="volunteer-item__info">
            <h2>{props.name}</h2>
            <h3>{props.dateTime}</h3>
            <p>{props.address}</p>
            <p>{props.description}</p>
          </div>
          <div className="volunteer-item__actions">
            <Button onClick={openMapHandler}>VIEW ON MAP</Button>
           <Button>
              <a
                href={props.register}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>REGISTER</p>
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default VolunteerItem;
