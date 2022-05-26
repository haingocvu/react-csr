/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from 'app/pages/Home/Loadable';
import { NotFoundPage } from 'app/pages/NotFound/Loadable';
import { SigninPage } from 'app/pages/Signin/Loadable';
import { SignupPage } from 'app/pages/Signup/Loadable';
import { ForgotPasswordPage } from 'app/pages/ForgotPassword/Loadable';
import { ContactPage } from 'app/pages/Contact/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}
