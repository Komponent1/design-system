import React, { useEffect, useMemo, useState } from 'react';
import type { NavbarType, NavbarVariant } from './navbar.type';
import {
  baseContainerStyle,
  baseStyle,
  hrefStyle,
  linksContainerStyles,
  titleStyle,
} from './navbar.style';

export type NavbarProps = {
  icon?: React.ReactNode;
  title?: string;
  titleLink?: string;
  links?: { label: string; href: string }[];
  type?: NavbarType;
  variant?: NavbarVariant;
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({
  icon,
  title,
  titleLink,
  links,
  type = 'default',
  variant = 'right',
  backgroundColor = '#f8f9fa',
  textColor = '#000',
  children,
}) => {
  const navStyle = useMemo(() => {
    const style: React.CSSProperties = { ...baseStyle };

    if (type === 'fixed') {
      style.position = 'fixed';
      style.top = 0;
      style.width = '100%';
      style.zIndex = 1000;
    } else if (type === 'sticky') {
      style.position = 'sticky';
      style.top = 0;
      style.width = '100%';
      style.zIndex = 1000;
    }

    return {
      ...style,
      backgroundColor,
      color: textColor,
    };
  }, [type, backgroundColor, textColor]);

  const containerStyle: React.CSSProperties = useMemo(() => {
    return {
      ...baseContainerStyle,
      position: 'relative',
    };
  }, []);

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    if (!links || links.length === 0) {
      setSelectedIndex(-1);
      return;
    }

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const currentUrl = currentHash || currentPath;

    const matchIndex = links.findIndex((link) => {
      if (link.href === currentUrl) return true;
      if (link.href.startsWith('#') && link.href === currentHash) return true;
      if (!link.href.startsWith('#') && link.href === currentPath) return true;
      return false;
    });

    setSelectedIndex(matchIndex);
  }, [links]);

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <div style={{ marginRight: '10px' }}>{icon}</div>}
          {title && (
            <a href={titleLink || '#'} style={titleStyle}>
              {title}
            </a>
          )}
        </div>
        <div style={linksContainerStyles[variant]}>
          {links &&
            links.map((link, index) => {
              const isSelected = selectedIndex === index;
              const linkStyle: React.CSSProperties = {
                ...hrefStyle,
                ...(isSelected && {
                  color: '#3b82f6',
                  fontWeight: 700,
                }),
              };
              return (
                <a key={index} href={link.href} style={linkStyle}>
                  {link.label}
                </a>
              );
            })}
        </div>
        {children && (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            {children}
          </div>
        )}
      </div>
    </nav>
  );
};
