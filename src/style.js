'use es6';

/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { Form } from 'antd';

export const StyledHeading = styled.h1`
  font-family: 'Catamaran', sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 1em;
  margin-bottom: 5px;
`;

export const StyledSubheading = styled.h3`
  font-family: 'Catamaran', sans-serif;
  font-weight: 400;
  font-size: 30px;
`;

export const StyledForm = styled(Form)`
  margin-bottom: 50px;
`;
