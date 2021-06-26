import i18n from 'i18n';

export default function ():void {
  i18n.configure({
    locales: ['en', 'pt-br'],
    queryParameter: 'lang',
    cookie: 'lang',

    // do not update locale files with new keys not found there
    // makes no sense since it would update the files in the dist folder instead of src
    updateFiles: false,

    directory: __dirname + '/../../locales'
  });
}
