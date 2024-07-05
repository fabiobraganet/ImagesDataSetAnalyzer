/* eslint-disable prettier/prettier */
import React from 'react';
import { Drawer, Card, Button, Badge, Space, Row, Col } from 'antd';
import { useProfilerDispatch } from '../../contexts/ProfilerContext';
import { lightTheme, darkTheme } from '../../antd-theme';
import { ThemeType } from '../../types/ThemeType';
import { useTranslation } from 'react-i18next';

const themes: ThemeType[] = [
  {
    name: 'drawerThemes.lightTheme.name',
    description: 'drawerThemes.lightTheme.description',
    theme: lightTheme,
  },
  {
    name: 'drawerThemes.darkTheme.name',
    description: 'drawerThemes.darkTheme.description',
    theme: darkTheme,
  },
];

const gridStyle = (theme: ThemeType['theme']): React.CSSProperties => ({
  width: '100%',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: theme.components?.Layout?.bodyBg as string,
  color: theme.token?.colorText as string,
  borderColor: theme.token?.colorBorderBg as string,
});

const DrawerThemes: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { t } = useTranslation();
  const dispatch = useProfilerDispatch();

  const handleThemeChange = (theme: ThemeType['theme']) => {
    dispatch({
      type: 'SET_THEME',
      payload: theme.algorithm === lightTheme.algorithm ? 'light' : 'dark',
    });
    window.location.reload();
  };

  return (
    <Drawer
      size="large"
      title={t('drawerThemes.title')}
      placement="right"
      onClose={onClose}
      open={open}
    >
      <Card title={t('drawerThemes.title')} bordered={false}>
        {themes.map((themeItem) => (
          <Card.Grid
            key={themeItem.name}
            onClick={() => handleThemeChange(themeItem.theme)}
          >
            <Badge.Ribbon text={t(themeItem.name)} color="purple">
              <Card
                hoverable
                key={themeItem.name}
                style={gridStyle(themeItem.theme)}
              >
                <Row style={{ height: '100%' }} justify="center" align="middle">
                  <Col>
                    <p
                      style={{
                        color: themeItem.theme.token?.colorText as string,
                        marginTop: '24px',
                        marginBottom: '24px',
                      }}
                    >
                      {t(themeItem.description)}
                    </p>
                    <Space direction="vertical">
                      <Space direction="horizontal">
                        <Badge
                          status="success"
                          style={{
                            color: themeItem.theme.token
                              ?.colorSuccessTextActive as string,
                          }}
                        />
                        <Badge
                          status="processing"
                          style={{
                            color: themeItem.theme.token?.colorLink as string,
                          }}
                        />
                        <Badge
                          status="default"
                          style={{
                            color: themeItem.theme.token?.colorText as string,
                          }}
                        />
                        <Badge
                          status="error"
                          style={{
                            color: themeItem.theme.token?.colorErrorTextActive as string,
                          }}
                        />
                        <Badge
                          status="warning"
                          style={{
                            color: themeItem.theme.token?.colorWarning as string,
                          }}
                        />
                      </Space>
                      <Button
                        onClick={() => handleThemeChange(themeItem.theme)}
                        style={{
                          marginTop: 16,
                          backgroundColor: themeItem.theme.components?.Layout?.bodyBg as string,
                          borderColor: themeItem.theme.token?.colorPrimary as string,
                          color: themeItem.theme.token?.colorBgTextActive as string,
                        }}
                      >
                        {t('drawerThemes.applyButton')}
                      </Button>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Badge.Ribbon>
          </Card.Grid>
        ))}
      </Card>
    </Drawer>
  );
};

export default DrawerThemes;
