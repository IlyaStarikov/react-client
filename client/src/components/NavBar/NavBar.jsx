import React from "react";

const NavBar = () => {
    return  <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="/">News</a></li>
                  <li><a href="/user">Users</a></li>
                  <li><a href="user/123">Log in</a></li>
                </ul>
              </div>
            </nav>
};

export default NavBar;