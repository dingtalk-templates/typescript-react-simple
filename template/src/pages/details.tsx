/// <reference path="../../typings/qrcode-npm.d.ts" />

import * as React from 'react';
import QRCode = require('qrcode-npm');

interface DetailsProps{
  history: any;
  location: any;
  match: any;
}

class Details extends React.Component<DetailsProps,undefined>{
  constructor(props:DetailsProps){
    super(props);
  }
  public render():JSX.Element{
    console.log(this.props)
    return(
      <div>details</div>
    );
  }
}

export default Details;
