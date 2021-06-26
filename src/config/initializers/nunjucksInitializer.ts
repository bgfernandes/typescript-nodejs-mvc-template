import express from 'express';
import nunjucks from 'nunjucks';
import i18n from 'i18n';

export default function (app: express.Application):void {
  nunjucks.configure(__dirname + '/../../views', { express: app })
  .addGlobal('__', i18n.__)
  .addGlobal('locale', i18n.getLocale())
  .addGlobal('locales', i18n.getLocales());
}
