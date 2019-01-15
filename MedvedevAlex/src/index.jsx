import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';

import Header from 'components/Header'
import Content from 'components/Content';
import LeftContentBlock from 'components/LeftContentBlock'
import RightContentBlock from 'components/RightContentBlock'
import Footer from 'components/Footer';
import CommentsListContainer from 'containers/CommentsListContainer';
import TopBlogersContainer from 'containers/TopBlogersContainer'

class App extends PureComponent {

  render() {
    return (
      <div>
        <Header/>
        <Content>
          <LeftContentBlock/>
          <RightContentBlock/>
        </Content>
        <Content>
          <CommentsListContainer/>
        </Content>
        <Content>
          <TopBlogersContainer/>
        </Content>
        <Footer/>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);