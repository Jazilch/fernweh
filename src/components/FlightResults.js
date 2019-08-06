'use es6';

import React from 'react';
import { Table, Spin } from 'antd';
import { TableColumns } from '../Constants';

const FlightResults = ({ quotes, isLoading }) => {
  return (
    <>
      {isLoading && <Spin size="large" />}
      {quotes && quotes.length && !isLoading && (
        <Table columns={TableColumns} dataSource={quotes} />
      )}
    </>
  );
};

export default FlightResults;
