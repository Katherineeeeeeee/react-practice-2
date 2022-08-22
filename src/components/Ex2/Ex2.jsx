import { Component } from 'react';

class Ex2 extends Component {
  state = {
    isShow: true,
    isNotShow: false,
  };

  clickOnExpand = () => {
    this.setState({
      isShow: !this.state.isShow,
    });

    // clickOnCollapse = () => {
    //   this.setState({
    //     isNotShow: !this.state.isNotShow,
    //   });
    // };
  };
  render() {
    const { clickOnExpand, clickOnCollapse } = this;

    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button
            type="button"
            className="btn"
            id="expand-all"
            onClick={clickOnExpand}
          >
            Expand All
          </button>
          <button
            type="button"
            className="btn"
            id="collapse-all"
            // onClick={clickOnCollapse}
          >
            Collapse All
          </button>

          <div className="accordion-item">
            <p className="title">Second Question</p>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <p className="title">Third Question</p>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="title">Furth Question</p>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              interdum diam. Donec interdum porttitor risus non bibendum.
              Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo
              purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim
              arcu nec elit faucibus condimentum. Donec facilisis consectetur
              enim sit amet varius. Pellentesque justo dui, sodales quis luctus
              a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla
              feugiat, mauris risus condimentum massa, at elementum libero quam
              ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut
              lobortis aliquam. Nullam eu dolor venenatis mauris placerat
              tristique eget id dolor. Quisque blandit adipiscing erat vitae
              dapibus. Nulla aliquam magna nec elementum tincidunt.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <p className="title">Fifth Question</p>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              interdum diam. Donec interdum porttitor risus non bibendum.
              Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo
              purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim
              arcu nec elit faucibus condimentum. Donec facilisis consectetur
              enim sit amet varius. Pellentesque justo dui, sodales quis luctus
              a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla
              feugiat, mauris risus condimentum massa, at elementum libero quam
              ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut
              lobortis aliquam. Nullam eu dolor venenatis mauris placerat
              tristique eget id dolor. Quisque blandit adipiscing erat vitae
              dapibus. Nulla aliquam magna nec elementum tincidunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ex2;
