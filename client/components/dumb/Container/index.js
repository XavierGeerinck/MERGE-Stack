import React from 'react';
export default class Container extends React.Component {
    static propTypes = {
        width: React.PropTypes.number,
        isCentered: React.PropTypes.bool,
        isBackground: React.PropTypes.bool,
        isNoPadding: React.PropTypes.bool
    }

    render() {
        var style = {};

        if (this.props.width) {
            style.width = this.props.width;
        }

        if (this.props.isCentered) {
            style.margin = "0 auto";
        }

        let classes = "Container";

        if (this.props.isBackground) {
            classes += " Container-Background";
        }

        if (this.props.isNoPadding) {
           classes += " Container-NoPadding";
        }
        
        return (
            <div className={classes} style={style}>
                <style jsx>{`
                .Container {
                    padding: 20px;
                    margin: 0 auto;
                }

                .Container-NoPadding {
                    padding: 0;
                }

                .Container-Background {
                    background-color: white;
                    border: 1px solid #e6e6e6;
                    border-radius: 3px;
                }

                .Container h1 {
                    margin: 0 0 10px 0;
                    font-size: 24px;
                }
                `}</style>
                {this.props.children}
            </div>
        );
    }
};
