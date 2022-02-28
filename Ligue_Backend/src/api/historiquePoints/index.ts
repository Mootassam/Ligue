export default (app) => {
  app.post(
    `/tenant/:tenantId/historique-points`,
    require("./historiquePointsCreate").default
  );
  app.put(
    `/tenant/:tenantId/historique-points/:id`,
    require("./historiquePointsUpdate").default
  );
  app.post(
    `/tenant/:tenantId/historique-points/import`,
    require("./historiquePointsImport").default
  );
  app.delete(
    `/tenant/:tenantId/historique-points`,
    require("./historiquePointsDestroy").default
  );
  app.get(
    `/tenant/:tenantId/historique-points/autocomplete`,
    require("./historiquePointsAutocomplete").default
  );
  app.get(
    `/tenant/:tenantId/historique-points`,
    require("./historiquePointsList").default
  );
  app.get(
    `/tenant/:tenantId/historique-points/:id`,
    require("./historiquePointsFind").default
  );
  app.get(
    `/tenant/:tenantId/histroiqueCurrentUSer`,
    require("./historiqueCurrentUser").default
  );
};
