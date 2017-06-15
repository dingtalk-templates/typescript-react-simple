import * as React from 'react';

interface HeaderProps{

}

class Header extends React.Component<HeaderProps,undefined>{
  constructor(props:HeaderProps){
    console.log(props)
    super(props);
  }

  public render():JSX.Element{
    return (
      <div className="header">
        Header
      </div>
    );
  }
}

export default Header;
