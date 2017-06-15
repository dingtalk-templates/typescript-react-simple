import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps{
  history: any;
  location: any;
  match: any;
}

class Home extends React.Component<HomeProps,undefined>{
  constructor(props:HomeProps){
    super(props);
  }
  public render():JSX.Element{
    console.log(this.props)
    return(
      <div>home
        <Link to="/details">Dee</Link>
      </div>
    );
  }
}

export default Home;