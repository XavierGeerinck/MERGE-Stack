import Link from 'next/link'

export default (props) => (
    <div className="DropdownItem">
        <style jsx>{`
            .DropdownItem {
                padding: 0 20px;
                margin: 15px 0;
                font-size: 14px;
                color: #999;
                line-height: 17px;
            }

            .DropdownItem:hover {
                color: #000;
                cursor: pointer;
            }

            .DropdownItem > a {
                color: #999;
                text-decoration: none;
                display: block;
                -webkit-transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                -ms-transition: all 0.2s ease;
                transition: all 0.2s ease;
                margin-left: -20px;
                margin-right: -20px;
                padding-left: 20px;
                padding-right: 20px;
            }

            .DropdownItem a:hover {
                color: #000;
                cursor: pointer;
                text-decoration: none !important;
            }
        `}</style>

        {props.href ? 
            <Link href={props.href}><a>{props.children}</a></Link> :
            props.children
        }
        
    </div>
)