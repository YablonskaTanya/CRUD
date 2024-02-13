function t(t,e){const o={method:"PATCH",Headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(`http://localhost:3000/books/${e}`,o)}t({title:"Clear JS The best time"},2),t({title:"Great time",author:"no name"},3),t({title:"Css",rating:7},4);
//# sourceMappingURL=index.dbc4e230.js.map
