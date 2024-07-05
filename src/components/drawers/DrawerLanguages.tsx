/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Drawer, Card, Button, Badge, Space } from 'antd';
import {
  //useProfiler,
  useProfilerDispatch,
} from '../../contexts/ProfilerContext';
import i18n from '../../locales';
import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';
import { useTranslation } from 'react-i18next';
import FlagIcon from '../FlagIcon';

const languages = [
  {
    code: 'enUS',
    name: 'drawerLanguages.english',
    locale: enUS,
    welcomeMessage: 'drawerLanguages.welcomeMessage',
    flag: 'US',
  },
  {
    code: 'ptBR',
    name: 'drawerLanguages.portuguese',
    locale: ptBR,
    welcomeMessage: 'drawerLanguages.welcomeMessage',
    flag: 'BR',
  },
];

const DrawerLanguages: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { t } = useTranslation();
  //const state = useProfiler();
  const dispatch = useProfilerDispatch();

  const handleLanguageChange = (
    language: string,
    locale: typeof enUS | typeof ptBR,
  ) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
    dispatch({ type: 'SET_LANGUAGE', payload: { language, locale } });
    window.location.reload();
  };

  const getTranslation = (code: string, key: string, options?: any) => {
    return i18n.getFixedT(code)(key, options).toString();
  };

  return (
    <Drawer
      size="large"
      title={t('drawerLanguages.title')}
      placement="right"
      onClose={onClose}
      open={open}
    >
      <Card title={t('drawerLanguages.title')} bordered={false}>
        {languages.map((language) => {
          const dateExample = new Intl.DateTimeFormat(
            language.code === 'enUS' ? 'en-US' : 'pt-BR',
          ).format(new Date());
          const currencyExample = new Intl.NumberFormat(
            language.code === 'enUS' ? 'en-US' : 'pt-BR',
            {
              style: 'currency',
              currency: language.code === 'enUS' ? 'USD' : 'BRL',
            },
          ).format(12345.67);

          return (
            <Card.Grid
              key={language.code}
              onClick={() =>
                handleLanguageChange(language.code, language.locale)
              }
              style={{
                textAlign: 'center',
                padding: '20px',
                cursor: 'pointer',
                backgroundColor:
                  i18n.language === language.code ? '#e6f7ff' : undefined,
              }}
            >
              <Badge.Ribbon
                text={getTranslation(language.code, language.name)}
                color="blue"
              >
                <Card
                  hoverable
                  key={language.code}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '20px',
                  }}
                >
                  <Space direction="vertical" size="middle">
                    <FlagIcon code={language.flag} />
                    <p>
                      {getTranslation(language.code, language.welcomeMessage)}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: getTranslation(
                          language.code,
                          'drawerLanguages.dateFormat',
                          { date: dateExample },
                        ),
                      }}
                    ></p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: getTranslation(
                          language.code,
                          'drawerLanguages.currencyFormat',
                          { currency: currencyExample },
                        ),
                      }}
                    ></p>
                    <Button
                      onClick={() =>
                        handleLanguageChange(language.code, language.locale)
                      }
                      style={{ marginTop: 16 }}
                    >
                      {getTranslation(
                        language.code,
                        'drawerLanguages.applyButton',
                      )}
                    </Button>
                  </Space>
                </Card>
              </Badge.Ribbon>
            </Card.Grid>
          );
        })}
      </Card>
    </Drawer>
  );
};

export default DrawerLanguages;
