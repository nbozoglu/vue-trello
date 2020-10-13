import { createClient } from 'contentful'
console.log(process.env);

export default createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN
})
var contentful = require('contentful')

var client = contentful.createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN
})

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      console.log(entry.fields.title)
    }
  })
})