'use es6';

import React from 'react';
import { Form, Input, Button } from 'antd';
import { StyledForm } from '../style';

const FlightForm = ({
  origin,
  destination,
  setOrigin,
  setDestination,
  setUrl
}) => {
  return (
    <StyledForm
      layout="inline"
      onSubmit={e => {
        setUrl(
          `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}/${destination}/anytime/anytime`
        );
        e.preventDefault();
      }}
    >
      <Form.Item>
        <Input
          placeholder="Origin"
          value={origin}
          onChange={e => setOrigin(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Destination"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search Flights
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default FlightForm;
