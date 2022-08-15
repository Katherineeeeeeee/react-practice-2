import { Component } from 'react';
import s from './AccordionItem.module.css';

class AccordionItem extends Component {
  state = {
    isShow: false,
  };

  clickBtn = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { clickBtn } = this;
    return (
      <div>
        <button type="button" onClick={clickBtn}>
          Click me!
        </button>

        {this.state.isShow && (
          <div style={{ position: 'absolute' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            voluptatum.
          </div>
        )}
      </div>
    );
  }
}

export default AccordionItem;
