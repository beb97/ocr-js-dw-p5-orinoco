(async () => {
   const id = "";
   const url = 'api/furniture/';
   const items = await fetch(url)
      .then(response => response.json());
        createItems(items);

})();