import styles from './index.less';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Button, Popover, Input } from 'antd';

class App extends React.Component {
  state = {
    showPop: false,
  };

  renderPopover() {
    if (this.state.showPop) {
      return (
        <Popover
          visible
          trigger="click"
          content={
            <Input.TextArea
              className="ne-textarea"
              autoSize={{ minRows: 1, maxRows: 4 }}
            />
            // <input />
          }
        >
          <div style={{ position: 'absolute', top: 11, left: 12 }}></div>
        </Popover>
      );
    }
    return null;
  }

  render() {
    return (
      <div id="test" onClick={() => this.setState({ showPop: true })}>
        点击样本
        {this.renderPopover()}
      </div>
    );
  }
}


setTimeout(() => {
  window.onerror = (e) => {
    console.error(e);
  };
  fireEvent.click(document.querySelector("#test"))
}, 1000);

export default App;