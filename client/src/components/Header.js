import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'LogIn', href: '/Login', visibleTo: ['guest'] },
  { name: 'ChatBot', href: '/ChatBot', visibleTo: ['doctor'] },
  { name: 'Reports', href: '/Reports', visibleTo: ['doctor', 'Care Taker'] },
  { name: 'Form', href: '/Form', visibleTo: ['Care Taker'] },
  { name: 'Admin', href: '/Admin', visibleTo: ['admin'] },
  { name: 'Logout', href: '#', visibleTo: ['doctor', 'Care Taker', 'admin'] },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ handleLogout }) => {
  const location = useLocation();

  // Extract user type from session storage
  const userType = sessionStorage.getItem('userType') || 'guest';

  const filteredNavigation = navigation.filter((item) =>
    (item.visibleTo || []).includes(userType)
  );

  return (
    <div className="bg-gray-800 shadow-md">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0">
                    <Link to='/'>
                      <img
                        className="h-9 w-auto"
                        src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1721623538/logo_lqkj0b_2_ilzwks.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {filteredNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href === location.pathname
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          onClick={item.name === 'Logout' ? handleLogout : null}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-800">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.href === location.pathname
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={
                      item.href === location.pathname ? 'page' : undefined
                    }
                    onClick={item.name === 'Logout' ? handleLogout : null}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
