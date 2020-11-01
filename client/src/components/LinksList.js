import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center">No links for now</p>
    }
    return (
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Original</th>
                    <th>Shortened</th>
                    <th>Open</th>
                </tr>
            </thead>

            <tbody>
                {links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td style={{'word-break': 'break-word'}}>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/detail/${link._id}`}>Open</Link>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )

}