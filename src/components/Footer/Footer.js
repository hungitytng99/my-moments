import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

Footer.protoType = {
    category: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
}
Footer.defaultProps = {
    category: [[{
        text: "",
        link: "",
    }]]
}

function Footer(props) {
    const { category } = props;
    let ulKey = 0;
    return (
        <div className="footer">
            {
                category.map((items) => {
                    return (
                        <div key={(ulKey++).toString()} className="footer__column">
                            <ul className="footer__list">
                                {
                                    items.map((item) => {
                                        return (
                                            <li key={item.text} className="footer__list-item" >
                                                <Link to={item.link} className="footer__link">{item.text}</Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            <div className="footer__column">
                <span className="footer__copyright">© 2017 Coppyright</span>
            </div>
        </div>
    )
}
export default Footer;