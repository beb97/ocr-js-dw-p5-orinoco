(async () => {
   const currentPageUrl = new URLSearchParams(window.location.search);
   const id = currentPageUrl.get("id");
   const url = '/api/furniture/'+id;
   const item = await fetch(url)
      .then(response => response.json());
        createItem(item);
})();