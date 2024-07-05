// src/pages/Operation/parts/HeaderCommand.tsx
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect, useRef } from 'react';
import { Input, Tag } from 'antd';
import { MonitorOutlined, MacCommandOutlined } from '@ant-design/icons';
import {
  FaHome,
  FaCog,
  FaProjectDiagram,
  FaCode,
  FaLifeRing,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import 'react-cmdk/dist/cmdk.css';
import CommandPalette, {
  filterItems,
  getItemIndex,
  JsonStructure,
} from 'react-cmdk';
import {
  useProfiler,
  useProfilerDispatch,
} from '../../../contexts/ProfilerContext';

const HeaderCommand: React.FC = () => {
  const [page, setPage] = useState<'root' | 'projects'>('root');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const state = useProfiler();
  const dispatch = useProfilerDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (state.theme === 'dark') {
      import('@/styles/cmdk-dark.css');
    } else {
      import('@/styles/cmdk-light.css');
    }
  }, [state.theme]);

  const items: JsonStructure = [
    {
      heading: 'Home',
      id: 'home',
      items: [
        { id: 'home', children: 'Home', icon: FaHome, href: '#' },
        { id: 'settings', children: 'Settings', icon: FaCog, href: '#' },
        {
          id: 'projects',
          children: 'Projects',
          icon: FaProjectDiagram,
          onClick: () => setPage('projects'),
        },
      ],
    },
    {
      heading: 'Other',
      id: 'advanced',
      items: [
        {
          id: 'developer-settings',
          children: 'Developer settings',
          icon: FaCode,
          href: '#',
        },
        {
          id: 'privacy-policy',
          children: 'Privacy policy',
          icon: FaLifeRing,
          href: '#',
        },
        {
          id: 'log-out',
          children: 'Log out',
          icon: FaSignOutAlt,
          onClick: () => alert('Logging out...'),
        },
        {
          id: 'light-theme',
          children: 'Light Theme',
          icon: FaSun,
          onClick: () => {
            dispatch({ type: 'SET_THEME', payload: 'light' });
            window.location.reload();
          },
        },
        {
          id: 'dark-theme',
          children: 'Dark Theme',
          icon: FaMoon,
          onClick: () => {
            dispatch({ type: 'SET_THEME', payload: 'dark' });
            window.location.reload();
          },
        },
      ],
    },
  ];

  const filteredItems = filterItems(items, search);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (navigator?.platform?.toLowerCase().includes('mac')
          ? e.metaKey
          : e.ctrlKey) &&
        e.key === 'k'
      ) {
        e.preventDefault();
        setIsOpen((current) => !current);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Input
        size="large"
        ref={inputRef}
        placeholder="Search..."
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
        onKeyDown={(e) => {
          if (!isOpen && e.key !== 'Tab') {
            setIsOpen(true);
            e.preventDefault();
          }
        }}
        prefix={<MonitorOutlined />}
        suffix={
          <Tag icon={<MacCommandOutlined />} color="cyan">
            Ctrl+K
          </Tag>
        }
        style={{ width: '100%', padding: '8px' }}
      />
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setIsOpen}
        search={search}
        isOpen={isOpen}
        page={page}
      >
        <CommandPalette.Page
          id="root"
          children={
            filteredItems.length ? (
              filteredItems.map((list) => (
                <CommandPalette.List key={list.id} heading={list.heading}>
                  {list.items.map(({ id, ...rest }) => (
                    <CommandPalette.ListItem
                      key={id}
                      index={getItemIndex(filteredItems, id)}
                      {...rest}
                    />
                  ))}
                </CommandPalette.List>
              ))
            ) : (
              <CommandPalette.FreeSearchAction />
            )
          }
        />
        <CommandPalette.Page
          id="projects"
          children={
            <div>
              {/* Conteúdo da página de projetos */}
              <p>Projects page content</p>
            </div>
          }
        />
      </CommandPalette>
    </>
  );
};

export default HeaderCommand;
