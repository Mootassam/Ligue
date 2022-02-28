import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import actions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import MenuWrapper from 'src/view/layout/styles/MenuWrapper';
import menus from 'src/view/menus';
import selectors from 'src/modules/auth/authSelectors';
import { indexOf } from 'lodash';

function Menu(props) {
  const dispatch = useDispatch();
  const logoUrl = useSelector(selectors.selectLogoUrl);
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );
  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );
  const subMenu = useSelector(
    layoutSelectors.selectSubMenu,
  );
  const pathUrl = useSelector(layoutSelectors.selectPath);
  const onClick = (path) => {
    dispatch(actions.dosubMenu(path));
  };

  useLayoutEffect(() => {
    const toggleMenuOnResize = () => {
      window.innerWidth < 576
        ? dispatch(actions.doHideMenu())
        : dispatch(actions.doShowMenu());
    };

    toggleMenuOnResize();

    window.addEventListener('resize', toggleMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
  }, [dispatch]);

  const selectedKeys = () => {
    const url = props.url;

    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }
      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }

    return [];
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
      permission,
    );
  };

  return (
    <MenuWrapper
      style={{
        display: menuVisible ? 'block' : 'none',
      }}
    >
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <div className="menu-logo">
              <Link to="/">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    width="164px"
                    alt={i18n('app.title')}
                    style={{ verticalAlign: 'middle' }}
                  />
                ) : (
                  <>{i18n('app.title')}</>
                )}
              </Link>
            </div>
            <ul className="menu-ul">
              {menus
                .filter((menu) =>
                  match(menu.permissionRequired),
                )
                .map((menu, index) => (
                  <>
                    {!menu.subMenu ? (
                      <li
                        key={menu.path}
                        className={`submenu ${
                          selectedKeys().includes(menu.path)
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link
                          to={menu.path}
                          onClick={() => {
                            onClick(index);
                          }}
                        >
                          <i
                            className={`menu-icon ${menu.icon}`}
                          ></i>
                          <span>{menu.label}</span>
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={menu.path}
                        className={`menu-li text-nowrap ${
                          selectedKeys().includes(menu.path)
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link
                          onClick={() => {
                            onClick(index);
                          }}
                        >
                          <i
                            className={`menu-icon ${menu.icon}`}
                          ></i>
                          <span>{menu.label}</span>
                        </Link>
                        {menu.subMenu?.map((item) => (
                          <ul
                            style={{
                              display:
                                subMenu && index === pathUrl
                                  ? 'block'
                                  : 'none',
                            }}
                          >
                            <li key={item.path}>
                              <Link to={item.path}>
                                <span
                                  className={`${
                                    props.url.includes(
                                      item.path,
                                    )
                                      ? 'active'
                                      : ''
                                  }`}
                                >
                                  {item.label}
                                </span>
                              </Link>
                            </li>
                          </ul>
                        ))}
                      </li>
                    )}
                  </>
                ))}

              {menus
                .filter((menu) =>
                  lockedForCurrentPlan(
                    menu.permissionRequired,
                  ),
                )
                .map((menu) => (
                  <li
                    key={menu.path}
                    className={`menu-li text-nowrap`}
                    style={{
                      cursor: 'auto',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      opacity: 0.5,
                    }}
                  >
                    <div className="menu-li-locked">
                      <i
                        className={`menu-icon ${menu.icon}`}
                      ></i>
                      <span>{menu.label}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </MenuWrapper>
  );
}

export default Menu;
