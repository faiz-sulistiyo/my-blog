/* eslint-disable new-cap */
import UAParser from 'ua-parser-js';
import type { IResult } from 'ua-parser-js';

export const checkDevice = (headers: Headers) => {
  let userAgent: IResult;

  if (headers) {
    const uastring = (typeof headers.get == 'function' && headers.get('user-agent')) || '';

    userAgent = UAParser(uastring);
  } else {
    userAgent = new UAParser().getResult();
  }

  return userAgent.device.type === 'mobile';
};
