import React from 'react';
import classnames from 'classnames';

import './styles.less';

const overflowCls = (state) => classnames('overflow-detector', {
    'overflow-detector--shadow-left': state.overflowLeft,
    'overflow-detector--shadow-right': state.overflowRight
});

class OverflowDetector extends React.Component {
    constructor(props) {
        super(props);

        this.scroller = React.createRef();
        this.inner = React.createRef();

        this.state = {
            overflowLeft: false,
            overflowRight: false
        };

        window.addEventListener('resize', this.checkOverflow);
    }

    componentDidMount() {
        this.checkOverflow();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkOverflow);
    }

    checkOverflow = () => {
        let overflowLeft = false;
        let overflowRight = false;

        if (this.scroller.current.offsetWidth < this.inner.current.offsetWidth) {
            if (this.scroller.current.scrollLeft !== 0) {
                overflowLeft = true;
            }
            if ((this.scroller.current.scrollLeft + this.scroller.current.offsetWidth) < this.inner.current.offsetWidth) {
                overflowRight = true;
            }
        }

        this.setState({
            overflowLeft,
            overflowRight
        });
    }

    render() {
        return (
            <div className={overflowCls(this.state)}>
                <div
                    className="overflow-detector__scroller"
                    onScroll={this.checkOverflow}
                    ref={this.scroller}
                >
                    <div
                        className="overflow-detector__inner"
                        ref={this.inner}
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default OverflowDetector;
