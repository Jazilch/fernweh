'use es6';

import React from 'react';
import { Table, Spin } from 'antd';
import { TableColumns } from '../Constants';

const FlightResults = ({ data: { Quotes }, isLoading }) => {
  return (
    <>
      {isLoading && <Spin size="large" />}
      {Quotes && Quotes.length && !isLoading && (
        <Table columns={TableColumns} dataSource={Quotes} />
      )}
    </>
  );
};

export default FlightResults;
