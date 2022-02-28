import styled from 'styled-components';

const MenuWrapper = styled.div`
  .sidebar {
    flex: 0 0 200px;
    max-width: 300px;
    min-width: 190px;
    width: 250px;
    height: 100%;
    background-color: #212529;
  }
  .menu-logo {
    padding: 8px;
    width: 100%;
    text-align: center;
    height: 61px;
    font-weight: 500;
    font-size: 1.5em;
  }

  .menu-logo a {
    text-decoration: none;
  }
  .sidebar.opened {
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  .sidebar-inner {
    height: 100%;
    transition: all 0.2s ease-in-out 0s;
  }
  .sidebar-menu ul {
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .sidebar-menu li a {
    color: #888;
    display: block;
    font-size: 15px;
    height: auto;
    padding: 0 20px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  .sidebar-menu li a:hover {
    color: #6c63ff;
  }
  .sidebar-menu li.active a {
    color: #6c63ff;
  }
  .menu-title {
    color: #333;
    font-size: 15px;
    font-weight: 500;
    padding: 12px 20px;
  }
  .menu-title > i {
    float: right;
    line-height: 40px;
  }
  .sidebar-menu li.menu-title a {
    color: #6c63ff;
    display: inline-block;
    float: right;
    padding: 0;
  }
  .sidebar-menu li.menu-title a.btn {
    color: #fff;
    display: block;
    float: none;
    font-size: 15px;
    line-height: inherit;
    margin-bottom: 15px;
  }
  .sidebar-menu ul ul a.active {
    color: #6c63ff;
    text-decoration: underline;
  }
  .mobile-user-menu {
    color: #fff;
    display: none;
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    width: 50px;
    z-index: 10;
  }
  .mobile-user-menu > a {
    color: #fff;
    padding: 0;
  }
  .mobile-user-menu > a:hover {
    color: #fff;
  }
  .mobile-user-menu > .dropdown-menu > a {
    line-height: 23px;
  }
  .profile-rightbar {
    display: none !important;
    color: #6c63ff;
    font-size: 26px;
    margin-left: 15px;
  }
  .fixed-sidebar-right {
    position: fixed;
    top: 60px;
    right: 0;
    width: 300px;
    margin-right: -300px;
    bottom: 0;
    z-index: 101;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  .mobile_btn {
    display: none;
  }
  .sidebar .sidebar-menu > ul > li > a span {
    transition: all 0.2s ease-in-out 0s;
    display: inline-block;
    margin-left: 10px;
    white-space: nowrap;
  }
  .sidebar .sidebar-menu > ul > li > a span.badge {
    color: #fff;
    margin-left: auto;
  }
  .sidebar-menu ul ul a {
    display: block;
    font-size: 14px;
    padding: 9px 10px 9px 50px;
    position: relative;
  }
  .sidebar-menu ul ul {
    background-color: rgb(240, 242, 245);
    display: none;
  }
  .sidebar-menu ul ul ul a {
    padding-left: 70px;
  }
  .sidebar-menu ul ul ul ul a {
    padding-left: 90px;
  }
  .sidebar-menu > ul > li {
    position: relative;
  }
  .sidebar-menu .menu-arrow {
    -webkit-transition: -webkit-transform 0.15s;
    -o-transition: -o-transform 0.15s;
    transition: transform 0.15s;
    position: absolute;
    right: 15px;
    display: inline-block;
    font-family: 'FontAwesome';
    text-rendering: auto;
    line-height: 40px;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    line-height: 18px;
    top: 15px;
  }
  .sidebar-menu .menu-arrow:before {
    content: '\f105';
  }
  .sidebar-menu li a.subdrop .menu-arrow {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .sidebar-menu ul ul a .menu-arrow {
    top: 6px;
  }
  .sidebar-menu a {
    transition: unset;
    -moz-transition: unset;
    -o-transition: unset;
    -ms-transition: unset;
    -webkit-transition: unset;
  }
  .sidebar-menu > ul > li > a {
    padding: 12px 20px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: relative;
    transition: all 0.2s ease-in-out 0s;
  }
  .sidebar-menu ul li a i {
    align-items: center;
    display: inline-flex;
    font-size: 18px;
    min-height: 24px;
    line-height: 18px;
    width: 20px;
    transition: all 0.2s ease-in-out 0s;
  }
  .sidebar-menu ul li.menu-title a i {
    font-size: 16px;
    margin-right: 0;
    text-align: right;
    width: auto;
  }

  /*-----------------
	7. Content
-----------------------*/

  .page-wrapper {
    left: 0;
    margin-left: 230px;
    padding-top: 50px;
    position: relative;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  .page-wrapper > .content {
    padding: 30px;
  }

  /*-----------------
	8. Login
-----------------------*/

  .account-page {
    display: table-row;
    height: 100%;
    padding: 40px 0;
  }
  .account-title {
    font-size: 32px;
    font-weight: normal;
    margin: 0 0 40px;
    text-align: center;
  }
  .account-wrapper {
    display: table;
    table-layout: fixed;
    height: 100%;
    padding: 30px;
    width: 100%;
  }
  .account-center {
    display: table-cell;
    vertical-align: middle;
  }
  .account-box {
    background-color: #fff;
    border: 1px solid #eaeaea;
    margin: 0 auto;
    padding: 20px;
    width: 400px;
  }
  .account-logo {
    margin-bottom: 20px;
    text-align: center;
  }
  .account-box .form-group {
    margin-bottom: 20px;
  }
  .account-box a {
    color: #333;
    font-size: 14px;
  }
  .account-box a:hover {
    color: #6c63ff;
  }
  .account-box .form-control {
    border: 1px solid #eaeaea;
    border-radius: 0;
    box-shadow: inherit;
    font-size: 14px;
    height: 40px;
  }
  .account-box textarea.form-control {
    height: 130px;
  }
  .account-box label {
    color: #323232;
    font-size: 14px;
    font-weight: normal;
  }
  .account-logo img {
    max-height: 60px;
    width: auto;
  }
  .account-box .account-btn {
    border-radius: 50px;
    font-size: 16px;
    min-width: 150px;
    padding: 8px 30px;
    text-transform: uppercase;
  }
  .active {
    color: #6c63ff;
  }
`;

export default MenuWrapper;
