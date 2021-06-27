import express from 'express';
import nunjucks from 'nunjucks';
import i18n from 'i18n';

export default function (app: express.Application):void {
  nunjucks.configure(__dirname + '/../../views', { express: app })
  .addGlobal('locales', i18n.getLocales());
}
