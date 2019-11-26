type TsPlugin = (modules: {
  typescript: typeof import("typescript/lib/tsserverlibrary");
}) => {
  create: (info: ts.server.PluginCreateInfo) => ts.LanguageService;
};

const init: TsPlugin = () => ({
  create: info => {
    const proxy: ts.LanguageService = Object.create(null);
    for (let k of Object.keys(info.languageService) as Array<
      keyof ts.LanguageService
    >) {
      const x = info.languageService[k];
      proxy[k] = (...args: Array<{}>) => x.apply(info.languageService, args);
    }
    proxy.getCompletionsAtPosition = (fileName, position, options) => {
      const prior = info.languageService.getCompletionsAtPosition(
        fileName,
        position,
        options
      );
      prior.entries = prior.entries.filter(e => !["callee"].includes(e.name));
      return prior;
    };

    return proxy;
  }
});

export = init;
