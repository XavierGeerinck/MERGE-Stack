import React from 'react';
import Link from 'next/link';

export default class Label extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className="Avatar">
                    <style jsx>{`
                        .Avatar {
                            margin: auto 14px auto 0;
                        }

                        .Avatar img {
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            display: block;
                        }
                    `}</style>
                    <img src={this.props.image} role='presentation' />

                    {this.props.children}
                </a>
            </Link>
        );
    }
}
