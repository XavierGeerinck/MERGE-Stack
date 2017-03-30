import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'

import React from 'react'
export { DropdownDivider, DropdownItem };
    
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isTriggered: false
        }
    }

    render() {
        if (!this.state.isTriggered) {
            return (
                <div className="Dropdown">
                    <style jsx>{`
                        .Dropdown-Trigger:hover {
                            pointer: cursor;
                        }
                    `}</style>
                    <div className="Dropdown-Trigger" onClick={(e) => this.setState({ isTriggered: !this.state.isTriggered })}>{this.props.trigger}</div>
                </div>
            )
        }

        return (
            <div className="Dropdown">
                <div className="Dropdown-Trigger" onClick={(e) => this.setState({ isTriggered: !this.state.isTriggered })}>{this.props.trigger}</div>

                <div className="Dropdown-Triggered">
                    <style jsx>{`
                        .Dropdown {
                            position: relative;
                        }

                        .Dropdown-Triggered {
                            position: absolute;
                            margin-top: 13px;
                            color: #000;
                            text-align: left;
                            background: #fff;
                            border: 1px solid #eee;
                            border-radius: 3px;
                            box-shadow: 0px 18px 30px 0px rgba(0, 0, 0, 0.12);
                            margin-left: -18px;
                        }

                        .Dropdown-Trigger:hover {
                            pointer: cursor;
                        }

                        .triangle {
                            display: block;
                            line-height: 11px;
                            z-index: 1;
                            width: 100%;
                            position: absolute;
                            left: 10px;
                            top: -12px;
                        }
                    `}</style>

                    <div className="triangle">
                        <img src="/static/triangle.svg" />
                    </div>

                    {this.state.isTriggered && this.props.children}
                </div>
            </div>
        )
        
    }
}

export default Dropdown;