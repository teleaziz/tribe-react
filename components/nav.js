import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <img
            alt=""
            src="https://techguytn.com/tribe/logo-dark-25.png/"
            width="155"
            height="25"
          ></img>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: black;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 20px 20px;
      }
      li {
        display: flex;
        padding: 6px 10px;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 13px;
        padding: 6px 8px;
      }
    `}</style>
  </nav>
)

export default Nav
