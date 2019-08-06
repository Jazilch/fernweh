'use es6';

import React from 'react';
import { Icon } from 'antd';

/* eslint-disable import/prefer-default-export */

export const TableColumns = [
  {
    title: 'ID',
    dataIndex: 'QuoteId',
    key: 'QuoteId'
  },
  {
    title: 'Price',
    dataIndex: 'MinPrice',
    key: 'MinPrice',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.MinPrice - b.MinPrice,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Direct',
    dataIndex: 'Direct',
    key: 'Direct',
    render: text =>
      text ? (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      ) : (
        <Icon type="close-circle" theme="twoTone" twoToneColor="#f5222d" />
      )
  },
  {
    title: 'Departure Flight',
    dataIndex: 'OutboundLeg',
    key: 'OutboundLeg',
    render: date => <span>{date.DepartureDate}</span>
  },
  {
    title: 'Inbound Flight',
    dataIndex: 'InboundLeg',
    key: 'InboundLeg',
    render: date => <span>{date.DepartureDate}</span>
  }
];
