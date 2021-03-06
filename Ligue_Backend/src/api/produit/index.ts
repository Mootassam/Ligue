export default (app) => {
  app.post(
    `/tenant/:tenantId/produit`,
    require('./produitCreate').default,
  );
  app.put(
    `/tenant/:tenantId/produit/:id`,
    require('./produitUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/produit/import`,
    require('./produitImport').default,
  );
  app.delete(
    `/tenant/:tenantId/produit`,
    require('./produitDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/produit/autocomplete`,
    require('./produitAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/produit`,
    require('./produitList').default,
  );
  app.get(
    `/tenant/:tenantId/produit/:id`,
    require('./produitFind').default,
  );
};
