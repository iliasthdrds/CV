import React from "react";

export default function Header() {
  return (
    <div className="header">
        <div className="header-content">
            <p className="name">Ilias Theodoridis</p>
            <p className="subtitle">Front-End Developer</p>
            <div className="info">
                <span className="info-item">
                    <img src="/C/map-icon.png" alt="location" className="icon" />
                        Kozani, Greece
                </span>
                <span className="info-item">
                    <img src="/C/email-icon.png" alt="email" className="icon" />
                      ilias.thdrds@gmail.com
                </span>
            </div>
         <div className="buttons">
  <a href="https://github.com/iliasthdrds" target="_blank" rel="noopener noreferrer" className="btn-git">
    <img src="/C/github.png"  className="btn-icon" />
    /iliasthdrds
  </a>
  <a href="https://linkedin.com/in/iliasthdrds" target="_blank" rel="noopener noreferrer" className="btn-lnkdin">
    <img src="/C/linkedin.png"  className="btn-icon" />
    /iliasthdrds
  </a>
</div>
        </div>
    </div> 
    )
}