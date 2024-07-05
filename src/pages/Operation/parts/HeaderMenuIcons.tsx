import React, { useState } from 'react';
import {
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  GlobalOutlined,
  AppstoreOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { Dropdown, MenuProps, Button, Space, Tooltip, Layout } from 'antd';
import DrawerThemes from '@/components/drawers/DrawerThemes';
import DrawerLanguages from '@/components/drawers/DrawerLanguages';
import { useTranslation } from 'react-i18next';

const HeaderMenuIcons: React.FC = () => {
  const { t } = useTranslation();
  const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState(false);
  const [isLanguageDrawerOpen, setIsLanguageDrawerOpen] = useState(false);

  const showThemeDrawer = () => {
    setIsThemeDrawerOpen(true);
  };

  const hideThemeDrawer = () => {
    setIsThemeDrawerOpen(false);
  };

  const showLanguageDrawer = () => {
    setIsLanguageDrawerOpen(true);
  };

  const hideLanguageDrawer = () => {
    setIsLanguageDrawerOpen(false);
  };

  const items: MenuProps['items'] = [
    {
      label: t('menu.profile'),
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: t('menu.settings'),
      key: '2',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      label: t('menu.logout'),
      key: '3',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout className="MenuIcons">
      <Tooltip title={t('menu.notifications')}>
        <Button type="text" icon={<BellOutlined />} />
      </Tooltip>
      <Tooltip title={t('menu.language')}>
        <Button
          type="text"
          icon={<GlobalOutlined />}
          onClick={showLanguageDrawer}
        />
        <DrawerLanguages
          open={isLanguageDrawerOpen}
          onClose={hideLanguageDrawer}
        />
      </Tooltip>
      <Tooltip title={t('menu.theme')}>
        <Button type="text" icon={<SkinOutlined />} onClick={showThemeDrawer} />
        <DrawerThemes open={isThemeDrawerOpen} onClose={hideThemeDrawer} />
      </Tooltip>
      <Tooltip title={t('menu.modules')}>
        <Button type="text" icon={<AppstoreOutlined />} />
      </Tooltip>
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <SettingOutlined style={{ fontSize: '20px', margin: '0 10px' }} />
          </Space>
        </a>
      </Dropdown>
    </Layout>
  );
};

export default HeaderMenuIcons;
